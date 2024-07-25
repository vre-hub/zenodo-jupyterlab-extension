# Zenodo Jupyterlab Extension
[![Build and install extension](https://github.com/vre-hub/zenodo-jupyterlab-extension/actions/workflows/build.yaml/badge.svg)](https://github.com/vre-hub/zenodo-jupyterlab-extension/actions/workflows/build.yaml)

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

#Docker
Rather than manually cloning the repository, it is possible to run the extension in a Docker container. To do this, use the following commands:
`docker pull ghcr.io/vre-hub/zenodo-jupyterlab-extension:<version>\
docker run -d -p 8888:8888 ghcr.io/vre-hub/zenodo-jupyterlab-extension`

All available versions can be found [here](https://github.com/vre-hub/zenodo-jupyterlab-extension/pkgs/container/zenodo-jupyterlab-extension)

Now the instance of Jupyter Lab with the extension installed and enabled should be avilable on localhost:8888