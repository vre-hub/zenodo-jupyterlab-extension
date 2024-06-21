# zenodo-jupyterlab-extension
Zenodo JupyterLab plugin
**This project is currently in development and is subject to change.**
*This README so far is devoted to building and loading the extension on a local instance of Jupyter Lab.

First, ensure Node.js >= 20.x ([Install instructions](https://nodejs.org/en/download/package-manager)) is installed as well as git ([Install instructions](https://git-scm.com/downloads)). Also ensure Python >= 3.11 is installed ([Install instructions](https://wiki.python.org/moin/BeginnersGuide/Download)).

Now, install `yarn`:\
`npm install -g corepack`
`corepack enable`

Install the Python dependencies from within the main project directory:\
`python -m pip install -r requirements.txt`

Install the Extension:\
`python -m pip install .`

Install Yarn Dependencies:\
`yarn install`

Build the Extension:\
`yarn run build`

Now open a local instance of Jupyter Lab, and it should be present on the sidebar.