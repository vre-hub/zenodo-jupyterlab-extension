# handlers.py
from datetime import timezone, datetime
import json
from jupyter_server.base.handlers import APIHandler, JupyterHandler
from jupyter_server.utils import url_path_join
import os
import requests

from .upload import upload
from .testConnection import checkZenodoConnection
from .search import searchRecords, searchCommunities, recordInformation
from notebook.services.contents.manager import ContentsManager
#from eossr.api.zenodo import ZenodoAPI


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

""" class XSRFTokenHandler(JupyterHandler):
    async def get(self):
        xsrf_token = self.xsrf_token
        self.finish({'xsrfToken': xsrf_token.decode('utf-8') if isinstance(xsrf_token, bytes) else xsrf_token}) """

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
        #root_dir = os.getenv("HOME")
        relative_path = self.get_query_argument('path', '')
        full_path = os.path.join(os.getcwd(), relative_path)

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
                "path": os.path.relpath(entry_path, os.getcwd()).replace('\\', '/'),  # Use relative path from home directory
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
                    response, recordID = await upload(ZenodoAPIHandler.zAPI, form_data)
                    self.finish({'status': response, 'recordID': recordID})
                    """ if response == None:
                        self.finish({'status': '0'})
                    else:
                        self.finish({'status': 'Completed!!!'}) """
            else:
                self.finish(json.dumps('null'))

class DownloadFileHandler(APIHandler):
    async def post(self):
        data = self.get_json_body()
        file_name = data.get('file_name', '')
        recordID = data.get('record_id', '')

        # Define the path to save the file in the server's HOME directory
        home_dir = os.getenv("HOME")  # Get the HOME directory
        if not home_dir:
            self.set_status(500)
            self.finish({'status': 'Error: HOME directory not found.'})
            return
        
        # Get the file name from the URL (this assumes the URL ends with the file name)
        file_url = f'https://zenodo.org/records/{recordID}/files/{file_name}'
        if '/' in file_name:
            file_name =  file_name.replace('/', '_')
            #self.finish({'status': file_name})
        file_path = os.path.join(home_dir, file_name)  # Full path to save the file

        try:
            response = requests.get(file_url)

            if response.status_code != 200:
                self.set_status(500)
                self.finish({'status': f'Failed to download file: {response.status_code}'})
                return

            # Stream and write the file directly to the home directory
            with open(file_path, 'wb') as f:
                f.write(response.content)  # Write the file body to the specified path


            # File saved successfully in the remote home directory
            #self.set_header('Content-Type', 'application/json')
            self.finish({'status': response.status_code})
            return


        except Exception as e:
            self.set_status(500)
            self.finish({'status': f'Error during request: {e}'})

class ServerInfoHandler(APIHandler):
    async def get(self):
        home_dir = os.getenv("HOME")
        # Respond with the $HOME directory
        self.finish({'root_dir': home_dir})


def setup_handlers(web_app):
    base_path = web_app.settings['base_url']
    base_path = url_path_join(base_path, 'zenodo-jupyterlab')

    handlers = [
        (url_path_join(base_path, 'env'), EnvHandler),
        (url_path_join(base_path, 'code'), CodeHandler),
        #(url_path_join(base_path, 'xsrf_token'), XSRFTokenHandler),
        #(url_path_join(base_path, 'test-connection'), ZenodoTestHandler),
        (url_path_join(base_path, 'search-records'), SearchRecordHandler),
        (url_path_join(base_path, 'search-communities'), SearchCommunityHandler),
        (url_path_join(base_path, 'record-info'), RecordInfoHandler),
        (url_path_join(base_path, 'files'), FileBrowserHandler),
        (url_path_join(base_path, 'server-info'), ServerInfoHandler),
        (url_path_join(base_path, 'zenodo-api'), ZenodoAPIHandler),
        (url_path_join(base_path, 'download-file'), DownloadFileHandler)
    ]

    web_app.add_handlers(".*$", handlers)