FROM quay.io/jupyter/scipy-notebook:python-3.11.9
LABEL maintainer="mrzengel"

SHELL ["/bin/bash", "-c"]

COPY . /zenodo_jupyterlab_extension

# Change ownership to the default user 'jovyan'
USER root
RUN chown -R jovyan:users /zenodo_jupyterlab_extension

#install correct version of Node
RUN apt-get update && apt-get install -y curl
RUN apt-get install -y nodejs npm
RUN npm install npm@latest -g && npm install n -g && n 20.15.1

# Set the working directory and switch back to non-root user
USER jovyan
WORKDIR /zenodo_jupyterlab_extension

# Install Python requirements
RUN python3 -m pip install --upgrade pip
RUN python3 -m pip install -r requirements.txt

# Install Yarn dependencies and build
RUN jlpm && jlpm run build

# Install and enable extension
RUN python3 -m pip install .
RUN jupyter server extension enable zenodo_jupyterlab.server

# Expose port and run JupyterLab
EXPOSE 8888
CMD ["jupyter", "lab", "--ip=*", "--NotebookApp.token=''", "--NotebookApp.password=''", "--no-browser", "--allow-root"]
