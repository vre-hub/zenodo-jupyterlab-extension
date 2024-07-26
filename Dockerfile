FROM quay.io/jupyter/scipy-notebook:python-3.11.9
LABEL maintainer="mrzengel"

SHELL ["/bin/bash", "-c"]

COPY . /zenodo_jupyterlab_extension

# Change ownership to the default user 'jovyan'
USER root
RUN chown -R jovyan:users /zenodo_jupyterlab_extension

# Set the working directory and switch back to non-root user
USER jovyan
WORKDIR /zenodo_jupyterlab_extension

#install correct version of Node
RUN conda upgrade -c conda-forge nodejs

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
