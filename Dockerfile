FROM jupyter/datascience-notebook
LABEL maintainer="mrzengel"

SHELL ["/bin/bash", "-c"]

COPY . /zenodo_jupyterlab_extension
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
