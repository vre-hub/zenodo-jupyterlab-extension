# handlers.py
from datetime import timezone, datetime
from jupyter_server.base.handlers import APIHandler, JupyterHandler
from jupyter_server.utils import url_path_join
import os
from .testConnection import checkZenodoConnection
from .search import searchRecords, searchCommunities, recordInformation


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

class ZenodoTestHandler(APIHandler):
    async def get(self):
        response = await checkZenodoConnection(sandbox = False)
        self.finish({'status': response})

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
        (url_path_join(base_path, 'xsrf_token'), XSRFTokenHandler),
        (url_path_join(base_path, 'test-connection'), ZenodoTestHandler),
        (url_path_join(base_path, 'search-records'), SearchRecordHandler),
        (url_path_join(base_path, 'search-communities'), SearchCommunityHandler),
        (url_path_join(base_path, 'record-info'), RecordInfoHandler),
        (url_path_join(base_path, 'files'), FileBrowserHandler),
        (url_path_join(base_path, 'server-info'), ServerInfoHandler)
    ]

    web_app.add_handlers(".*$", handlers)