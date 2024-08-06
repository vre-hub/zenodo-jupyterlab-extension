---
title: Install
nav-order: 2
has children: true
---

# Install

## For End-Users

The most simple way to download and install the extension is via Docker:\
`docker run -d -p 8888:8888 ghcr.io/vre-hub/zenodo-jupyterlab-extension:<version>`\
All available versions can be found at this [link](https://github.com/vre-hub/zenodo-jupyterlab-extension/pkgs/container/zenodo-jupyterlab-extension).

Now, the instance of Jupyter Lab with the extension installed and enabled should be available on localhost:8888.

## For Developers

The following steps require NodeJS >= 20.

Install `yarn`:\
`npm install -g corepack`\
`corepack enable`\

Install Python dependecies:\
`python3 -m pip install -r requirements.txt`

Install `yarn` dependencies:\
`jlpm`

Install and Build the Extension:\
`python3 -m pip install -e .`\
Note: the `-e` tag enables editable mode.

Enable the server extension:\
`jupyter server extension enable zenodo_jupyterlab.server`

Now, open a local instance of Jupyter Lab, and it should be present on the sidebar.
