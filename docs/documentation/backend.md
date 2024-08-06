---
title: "Backend Documentation"
parent: "Full Documentation"
nav_order: 2
---

# Backend Documentation

## General Framework
The backend for this extension is built as a Jupyter Server Extension. The project entry points are specified with the `pyproject.toml` file in the root directory. These point to the `zenodo_jupyterlab.server` module, which contains the `extenion.py` and `__init__.py` files which run the function that sets up the API handlers defined within other files in that directory. This guide will go through each section, with explanation of functionality.

## `extension.py`
`_load_jupyter_server_extenion` is a basic function that calls on `setup_handlers` which is defined in `handlers.py` and passes the `server_app.web_app` object. This is automatically passed via the server extension points.

## `__init__.py`
Defines the `_jupyter_server_extension_points` function that signals to the primary extension in `pyproject.toml` how to access the server extension and to build when it built.

## `handlers.py`
This file generates the API endpoints for use by the frontend components. All handlers inherit from `jupyter_server.base.handlers.APIHandler` (except the XSRFTokenHandler inherits from JupyterHandler). For simplicity, parameters are placed within the function definitions here, though they are accessed via the `APIHandler.get_argument()` function because they are URI encoded in the API calls. In addition, return statements are defined plainly here, though they are actually returned via the `APIHandler.finish()` function.

### `class EnvHandler`
Interacts with environmental variables in the Jupyter instance. Exploits the `os` module.
#### `get(env_var: string)`
Simple function to return the value of a stored environmental variable. Returns a dict containing the variable name and value.
> **Returns:** `{env_var: *value*}`

