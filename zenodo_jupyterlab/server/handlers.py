# handlers.py

from jupyter_server.base.handlers import APIHandler, JupyterHandler
from jupyter_server.utils import url_path_join
import os
from .testConnection import testZenodoConnection
from .search import searchRecords


class EnvHandler(APIHandler):
    async def get(self):
        env_var = self.get_argument('env_var')
        self.finish({env_var: os.getenv(env_var)})

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
        response = await testZenodoConnection()
        self.finish({'status': response})

class XSRFTokenHandler(JupyterHandler):
    async def get(self):
        xsrf_token = self.xsrf_token
        self.finish({'xsrfToken': xsrf_token.decode('utf-8') if isinstance(xsrf_token, bytes) else xsrf_token})

class SearchRecordHandler(APIHandler):
    async def get(self):
        search_field = self.get_query_argument('search_field', default="")
        response = await searchRecords(search_field=search_field)
        self.finish({'records': response})


def setup_handlers(web_app):
    base_path = web_app.settings['base_url']
    base_path = url_path_join(base_path, 'zenodo-jupyterlab')

    handlers = [
        (url_path_join(base_path, 'env'), EnvHandler),
        (url_path_join(base_path, 'code'), CodeHandler),
        (url_path_join(base_path, 'xsrf_token'), XSRFTokenHandler),
        (url_path_join(base_path, 'test-connection'), ZenodoTestHandler),
        (url_path_join(base_path, 'search-records'), SearchRecordHandler)
    ]

    web_app.add_handlers(".*$", handlers)