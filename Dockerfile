FROM ubuntu:20.04
LABEL maintainer="mrzengel"

WORKDIR /app
SHELL ["/bin/bash", "-c"]

#Git clone
RUN apt-get update && apt-get install -y git
RUN git clone https://github.com/vre-hub/zenodo-jupyterlab-extension.git
WORKDIR /app/zenodo-jupyterlab-extension

#Install Python
RUN apt-get install -y python3 python3-pip

#Install Node
RUN apt-get install -y curl
RUN ln -snf /usr/share/zoneinfo/$CONTAINER_TIMEZONE /etc/localtime \
    && echo $CONTAINER_TIMEZONE > /etc/timezone
RUN apt-get install -y software-properties-common npm
RUN npm install npm@latest -g && npm install n -g && n 20.15.1

#Install requirements
RUN python3 -m pip install --upgrade pip
RUN python3 -m pip install -r requirements.txt

#Install Yarn dependencies and build
RUN jlpm && jlpm run build

#install and enable extension
RUN python3 -m pip install .
RUN jupyter server extension enable zenodo_jupyterlab.server

#Expose port and run Jupyterlab
EXPOSE 8888
CMD ["jupyter", "lab", "--ip='*'", "--NotebookApp.token=''", "--NotebookApp.password=''", "--no-browser", "--allow-root"]