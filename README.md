# Zenodo Jupyterlab Extension
Zenodo JupyterLab plugin
**This project is currently in development and is subject to change.**

This project integrates [Zenodo](https://zenodo.org) into Jupyter Lab extension.

# Requirements
JupyterLab > 4, < 5
Notebook < 7

# Install
You will need NodeJS >= 20 for these steps.

Now, install `yarn`:\
`npm install -g corepack`
`corepack enable`

Install the Python dependencies from within the main project directory:\
`python -m pip install -r requirements.txt`

Install Yarn Dependencies:\
`jlpm`

Install and Build the Extension:\
`python -m pip install .`

Enable the Extension:\
`jupyter server extension enable zenodo_jupyterlab.server`

Now open a local instance of Jupyter Lab, and it should be present on the sidebar.