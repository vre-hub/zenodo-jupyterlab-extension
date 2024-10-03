FROM quay.io/jupyter/scipy-notebook:python-3.11.9
LABEL maintainer="mrzengel"

SHELL ["/bin/bash", "-c"]

COPY . /zenodo_jupyterlab_extension

USER root
WORKDIR /zenodo_jupyterlab_extension

#install correct version of Node
RUN conda upgrade -c conda-forge nodejs && \
    python3 -m pip install --upgrade pip && \
    python3 -m pip install -r requirements.txt && \
    jlpm && jlpm run build && \
    python3 -m pip install . && \
    jupyter server extension enable zenodo_jupyterlab.server

USER jovyan
WORKDIR /home/jovyan/work
# Expose port and run JupyterLab
EXPOSE 8888
CMD ["jupyter", "lab", "--ip=*", "--NotebookApp.token=''", "--NotebookApp.password=''", "--no-browser", "--allow-root"]
