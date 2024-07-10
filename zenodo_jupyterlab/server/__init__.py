# __init__.py
def _jupyter_server_extension_points():
    return [{
        "module": "zenodo_jupyterlab.server.extension"
    }]
