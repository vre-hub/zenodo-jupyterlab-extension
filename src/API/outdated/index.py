# index.py

import json
from jupyter_server.base.handlers import APIHandler
from jupyter_server.utils import url_path_join
from tornado import web
from example_search import collect_escape2020 as search

class SearchHandler(APIHandler):
    async def post(self):
        data = self.get_json_body()
        query = data['query']
        results = search(query)
        self.finish(json.dumps(results))

def setup_handlers(web_app):
    host_pattern = '.*$'
    route_pattern = url_path_join(web_app.settings['base_url'], '/run_search')
    handlers = [(route_pattern, SearchHandler)]
    web_app.add_handlers(host_pattern, handlers)
