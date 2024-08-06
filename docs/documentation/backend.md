---
title: "Backend Documentation"
parent: "Full Documentation"
nav_order: 2
---

# Backend Documentation

## General Framework
The backend for this extension is built as a Jupyter Server Extension. The project entry points are specified with the `pyproject.toml` file in the root directory. These point to the `zenodo_jupyterlab.server` module, which contains the `extenion.py` and `__init__.py` files which run the function that sets up the API handlers defined within other files in that directory.