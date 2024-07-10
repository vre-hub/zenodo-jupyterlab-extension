#extension.py
from .handlers import  setup_handlers

def _load_jupyter_server_extension(server_app):
    web_app = server_app.web_app
    try:
        setup_handlers(web_app)
        server_app.log.info("Registered zenodo_jupyterlab server extension")
    except Exception as e:
        server_app.log.error(f"Failed to register zenodo_jupyterlab server extension: {e}")
        raise