---
title: Full Documentation
nav_order: 4
has_children: true
---

# Full Documentation
This section is dedicated to a full documentation of both the frontend and backend components of the extension. This is intended as a guide for future developers.

## Folder Structure
```
zenodo-jupyterlab-extension
├── pyproject.toml
├── requirements.txt
├── setup.py
├── src     #frontend
│   ├── API
│   │   ├── API_functions.tsx
│   │   ├── handler.tsx
│   ├── components
│   │   ├── NavBar.tsx
│   │   ├── SearchPanel.tsx
│   │   ├── SideBarPanel.tsx
│   │   └── login.tsx
│   ├── icons
│   │   ├── ZenodoBlueTitle.tsx
│   │   ├── z_icon.svg
│   │   ├── zenodo-black.svg
│   │   └── zenodo-blue.svg
│   ├── index.tsx
│   └── svg.d.tsx
├── style
│   ├── base.css
│   ├── index.css
│   └── index.js
├── zenodo_jupyterlab
│   ├── __init__.py
│   ├── _version.py
│   ├── labextension
│   │   ├── build_log.json
│   │   ├── package.json
│   │   └── static/
│   └── server
│       ├── __init__.py
│       ├── extension.py
│       ├── handlers.py
│       ├── search.py
│       ├── testConnection.py
│       └── tests
│           ├── __pycache__
│           │   ├── test_search.cpython-312-pytest-8.2.2.pyc
│           │   ├── test_testConnection.cpython-312-pytest-8.2.2.pyc
│           │   └── test_testConnection.cpython-312.pyc
│           ├── test_search.py
│           └── test_testConnection.py
```