import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the jupyterlab_ext_test_apod extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab_ext_test_apod:plugin',
  description: 'Show a random NASA Astronomy Picture of the Day in a JupyterLab panel',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyterlab_ext_test_apod is activated!');
  }
};

export default plugin;
