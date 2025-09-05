# handlers.py
from datetime import timezone, datetime
import json
from jupyter_server.base.handlers import APIHandler, JupyterHandler
from jupyter_server.utils import url_path_join
import os
import secrets
import urllib.parse

from .upload import upload
from .testConnection import checkZenodoConnection
from .search import searchRecords, searchCommunities, recordInformation
#from eossr.api.zenodo import ZenodoAPI
from tornado.httpclient import AsyncHTTPClient, HTTPRequest, HTTPClientError


class EnvHandler(APIHandler):
    async def get(self):
        env_var = self.get_argument('env_var')
        value = os.getenv(env_var)
        if value is None:
            self.finish({"error": f"Environment variable {env_var} not found"})
        else:
            self.finish({env_var: value})

    async def post(self):
        data = self.get_json_body()
        os.environ[data['key']] = data['value']
        self.finish({data['key']: data['value']})

class CodeHandler(APIHandler):
    async def post(self):
        data = await self.request.json()
        exec(data['code'], globals())
        self.finish({'status': 'success'})

""" class ZenodoTestHandler(APIHandler):
    async def get(self):
        response = await checkZenodoConnection()
        self.finish({'status': response}) """

class XSRFTokenHandler(JupyterHandler):
    async def get(self):
        xsrf_token = self.xsrf_token
        self.finish({'xsrfToken': xsrf_token.decode('utf-8') if isinstance(xsrf_token, bytes) else xsrf_token})

class SearchRecordHandler(APIHandler):
    async def get(self):
        search_field = self.get_query_argument('search_field', default="")
        page = self.get_query_argument('page', default=1)
        communities = self.get_query_argument('communities', default="")
        response = await searchRecords(search_field=search_field, page=page, communities=communities)
        self.finish({'records': response})

class SearchCommunityHandler(APIHandler):
    async def get(self):
        search_field = self.get_query_argument('search_field', default="")
        page = self.get_query_argument('page', default=1)
        response = await searchCommunities(search_field=search_field, page = page)
        self.finish({'communities': response})

class RecordInfoHandler(APIHandler):
    async def get(self):
        recordID = int(self.get_query_argument('record-id'))
        response = await recordInformation(recordID)
        self.finish({'data': response})

class FileBrowserHandler(APIHandler):
    async def get(self):
        # Use the home directory as the root directory
        root_dir = os.getenv("HOME")
        relative_path = self.get_query_argument('path', '')
        full_path = os.path.join(root_dir, relative_path)

        # Check if the directory exists
        if not os.path.isdir(full_path):
            self.set_status(404)
            self.finish({"error": "Directory not found"})
            return

        entries = []
        for entry in os.listdir(full_path):
            if entry.startswith('.'):
                continue
            entry_path = os.path.join(full_path, entry)
            entry_stat = os.stat(entry_path)
            entries.append({
                "name": entry,
                "type": "directory" if os.path.isdir(entry_path) else "file",
                "path": os.path.relpath(entry_path, root_dir).replace('\\', '/'),  # Use relative path from home directory
                "modified": datetime.fromtimestamp(entry_stat.st_mtime, tz=timezone.utc).isoformat(),
                "size": entry_stat.st_size
            })

        self.finish({"entries": entries})
        
class ZenodoAPIHandler(APIHandler):
        zAPI = None

        async def post(self):
            #data = self.get_json_body()
            #action = data.get('action')
            try:
                form_data = json.loads(self.request.body)
            except json.JSONDecodeError:
                self.set_status(400)
                self.finish(json.dumps({'status': 'Invalid JSON'}))
                return
            
            action = form_data.get('action')

            if action == 'check-connection':
                response, zAPI = await checkZenodoConnection()
                if zAPI is not None:
                    ZenodoAPIHandler.zAPI = zAPI 
                self.finish({'status': response})
            elif action == 'upload':
                if ZenodoAPIHandler.zAPI == None:
                    self.finish({'status': 'Please Log In before trying to '})
                else:
                    response = await upload(ZenodoAPIHandler.zAPI, form_data)
                    self.finish({'status': response})
                    """ if response == None:
                        self.finish({'status': '0'})
                    else:
                        self.finish({'status': 'Completed!!!'}) """
            else:
                self.finish(json.dumps('null'))



class ServerInfoHandler(APIHandler):
    async def get(self):
        home_dir = os.getenv("HOME")
        # Respond with the $HOME directory
        self.finish({'root_dir': home_dir})


class ZenodoOAuthLoginHandler(JupyterHandler):
    async def get(self):
        """
        Initiate Zenodo OAuth by redirecting the user to the consent page.
        Requires env vars:
        - ZENODO_CLIENT_ID
        - ZENODO_REDIRECT_URI (must match the app config, e.g., https://<host>/user/<name>/zenodo-jupyterlab/oauth/callback)
        Optional env vars (with sensible defaults):
        - ZENODO_AUTHORIZE_URL (default https://zenodo.org/oauth/authorize)
        - ZENODO_SCOPES (default "deposit:write deposit:actions")
        """
        client_id = os.getenv('ZENODO_CLIENT_ID')
        # Use provided redirect_uri or compute it from current base_url
        redirect_uri = os.getenv('ZENODO_REDIRECT_URI')
        if not redirect_uri:
            redirect_uri = f"{self.request.protocol}://{self.request.host}{url_path_join(self.base_url, 'zenodo-jupyterlab', 'oauth', 'callback')}"
        authorize_url = os.getenv('ZENODO_AUTHORIZE_URL', 'https://zenodo.org/oauth/authorize')
        scopes = os.getenv('ZENODO_SCOPES', 'deposit:write deposit:actions')

        if not client_id or not redirect_uri:
            self.set_status(500)
            self.finish({
                'error': 'Missing configuration',
                'details': 'ZENODO_CLIENT_ID and ZENODO_REDIRECT_URI must be set'
            })
            return

        # CSRF protection via state parameter stored in a secure cookie
        state = secrets.token_urlsafe(32)
        # Use secure cookie if cookie_secret is configured (default in Jupyter Server)
        try:
            self.set_secure_cookie('zenodo_oauth_state', state, httponly=True, samesite='lax')
        except Exception:
            # Fallback to a regular cookie if secure cookie is unavailable
            self.set_cookie('zenodo_oauth_state', state, httponly=True)

        params = {
            'client_id': client_id,
            'response_type': 'code',
            'redirect_uri': redirect_uri,
            'scope': scopes,
            'state': state,
        }
        # If not explicitly set, infer sandbox flag from authorize_url
        if os.getenv('ZENODO_SANDBOX') is None:
            os.environ['ZENODO_SANDBOX'] = 'true' if 'sandbox.zenodo.org' in authorize_url else 'false'

        url = authorize_url + '?' + urllib.parse.urlencode(params)
        self.redirect(url)


class ZenodoOAuthCallbackHandler(JupyterHandler):
    async def get(self):
        """
        Handle Zenodo OAuth callback, exchange code for token, and store it in process env as ZENODO_API_KEY
        so the rest of the server extension can use it.
        Requires env vars:
        - ZENODO_CLIENT_ID
        - ZENODO_CLIENT_SECRET
        - ZENODO_REDIRECT_URI
        Optional env vars:
        - ZENODO_TOKEN_URL (default https://zenodo.org/oauth/token)
        """
        error = self.get_argument('error', None)
        if error:
            self.set_status(400)
            self.finish({'error': error})
            return

        code = self.get_argument('code', None)
        state = self.get_argument('state', None)

        expected_state = None
        try:
            cookie_val = self.get_secure_cookie('zenodo_oauth_state')
            if cookie_val is not None:
                expected_state = cookie_val.decode('utf-8') if isinstance(cookie_val, bytes) else cookie_val
        except Exception:
            expected_state = self.get_cookie('zenodo_oauth_state')

        if not code or not state or not expected_state or state != expected_state:
            self.set_status(400)
            self.finish({'error': 'Invalid OAuth state or missing code'})
            return

        client_id = os.getenv('ZENODO_CLIENT_ID')
        client_secret = os.getenv('ZENODO_CLIENT_SECRET')
        # Use provided redirect_uri or compute it from current base_url
        redirect_uri = os.getenv('ZENODO_REDIRECT_URI')
        if not redirect_uri:
            redirect_uri = f"{self.request.protocol}://{self.request.host}{url_path_join(self.base_url, 'zenodo-jupyterlab', 'oauth', 'callback')}"
        token_url = os.getenv('ZENODO_TOKEN_URL', 'https://zenodo.org/oauth/token')

        if not client_id or not client_secret or not redirect_uri:
            self.set_status(500)
            self.finish({'error': 'Missing configuration', 'details': 'ZENODO_CLIENT_ID, ZENODO_CLIENT_SECRET and ZENODO_REDIRECT_URI must be set'})
            return

        body = urllib.parse.urlencode({
            'grant_type': 'authorization_code',
            'code': code,
            'redirect_uri': redirect_uri,
            'client_id': client_id,
            'client_secret': client_secret,
        })
        headers = {'Content-Type': 'application/x-www-form-urlencoded'}

        http = AsyncHTTPClient()
        try:
            response = await http.fetch(HTTPRequest(url=token_url, method='POST', headers=headers, body=body))
            data = json.loads(response.body.decode('utf-8'))
        except HTTPClientError as e:
            self.set_status(502)
            self.finish({'error': 'Token exchange failed', 'details': str(e)})
            return
        except Exception as e:
            self.set_status(500)
            self.finish({'error': 'Unexpected error during token exchange', 'details': str(e)})
            return

        access_token = data.get('access_token')
        if not access_token:
            self.set_status(502)
            self.finish({'error': 'No access_token in response'})
            return

        # Store token for server-side use by existing endpoints
        os.environ['ZENODO_API_KEY'] = access_token

        # Optionally persist other metadata
        result = {
            'status': 'linked',
            'token_type': data.get('token_type'),
            'scope': data.get('scope'),
            'expires_in': data.get('expires_in'),
        }
        self.finish(result)


class ZenodoOAuthLogoutHandler(JupyterHandler):
    async def post(self):
        # Clear server-side token and state cookie
        os.environ.pop('ZENODO_API_KEY', None)
        try:
            self.clear_cookie('zenodo_oauth_state')
        except Exception:
            pass
        self.finish({'status': 'unlinked'})


def setup_handlers(web_app):
    base_path = web_app.settings['base_url']
    base_path = url_path_join(base_path, 'zenodo-jupyterlab')

    handlers = [
        (url_path_join(base_path, 'env'), EnvHandler),
        (url_path_join(base_path, 'code'), CodeHandler),
        (url_path_join(base_path, 'xsrf_token'), XSRFTokenHandler),
        #(url_path_join(base_path, 'test-connection'), ZenodoTestHandler),
        (url_path_join(base_path, 'search-records'), SearchRecordHandler),
        (url_path_join(base_path, 'search-communities'), SearchCommunityHandler),
        (url_path_join(base_path, 'record-info'), RecordInfoHandler),
        (url_path_join(base_path, 'files'), FileBrowserHandler),
        (url_path_join(base_path, 'server-info'), ServerInfoHandler),
        (url_path_join(base_path, 'zenodo-api'), ZenodoAPIHandler),
        # OAuth endpoints
        (url_path_join(base_path, 'oauth/login'), ZenodoOAuthLoginHandler),
        (url_path_join(base_path, 'oauth/callback'), ZenodoOAuthCallbackHandler),
        (url_path_join(base_path, 'oauth/logout'), ZenodoOAuthLogoutHandler),
    ]

    web_app.add_handlers(".*$", handlers)
    