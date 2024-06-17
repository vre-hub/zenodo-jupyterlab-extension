import {
  ILayoutRestorer,
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import {
  ICommandPalette,
  MainAreaWidget,
  WidgetTracker
} from '@jupyterlab/apputils';

import { 
  Menu,
  MenuBar,
  Widget 
 } from '@lumino/widgets';

import { LabIcon } from '@jupyterlab/ui-components';
import z_icon from '/src/icon/z_icon.svg';
import title_icon from '/src/icon/zenodo-black.svg';

/* interface APODResponse {
  copyright: string;
  date: string;
  explanation: string;
  media_type: 'video' | 'image';
  title: string;
  url: string;
}; */


class ZenodoWidget extends Widget {
  constructor(app: JupyterFrontEnd) {
    super();

    this.addClass('my-apodWidget');
    this.id = 'zenodo-jupyterlab-extension';
    this.title.closable = true;
    const icon = new LabIcon ({
      name:'zenodo_jupyterlab-extension:zenodo',
      svgstr: z_icon,
    });
    this.title.icon = icon.bindprops();

    this.title_container = document.createElement('div');
    this.title_container.id = 'Zenodo-Title';
    this.title_container.setAttribute("style", "text-align: center");
    this.title_container.innerHTML = title_icon;
    this.node.appendChild(this.title_container);

    this.main_text = document.createElement('p');
    this.main_text.innerText = 'Testing';
    this.node.appendChild(this.main_text);

    const menuBar = new MenuBar();
    
    // Create a menu
    const fileMenu = new Menu({ commands: app.commands });
    fileMenu.title.label = 'Item 1';
    
    // Add commands to the menu
    fileMenu.addItem({ command: 'my-extension:new-file' });
    fileMenu.addItem({ command: 'my-extension:open-file' });
    
    // Add the menu to the menu bar
    menuBar.addMenu(fileMenu);

    // Create another menu if needed
    const editMenu = new Menu({ commands: app.commands });
    editMenu.title.label = 'Item 2';
    editMenu.addItem({ command: 'my-extension:copy' });
    editMenu.addItem({ command: 'my-extension:paste' });

    menuBar.addMenu(editMenu);

    // Add the menu bar to the content node
    this.node.insertBefore(menuBar.node, this.main_text);
  }

  readonly title_container: HTMLDivElement;
  readonly main_text: HTMLParagraphElement;

  async fillContent(): Promise<void> {
    // this.img1.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Zenodo-gradient-square.svg/1200px-Zenodo-gradient-square.svg.png'
    // this.summary.innerText = 'Hello';
    return;
  }
  /* async updateAPODImage(): Promise<void> { http://localhost:8890/lab/icon/zenodo-gradient-square.png

    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${this.randomDate()}`);

    if (!response.ok) {
      const data = await response.json();
      if (data.error) {
        this.summary.innerText = data.error.message;
      } else {
        this.summary.innerText = response.statusText;
      }
      return;
    }

    const data = await response.json() as APODResponse;

    if (data.media_type === 'image') {
      // Populate the image
      this.img.src = data.url;
      this.img.title = data.title;
      this.summary.innerText = data.title;
      if (data.copyright) {
        this.summary.innerText += ` (Copyright ${data.copyright})`;
      }
    } else {
      this.summary.innerText = 'Random APOD fetched was not an image.';
    }
  } */
  /* randomDate(): string {
    const start = new Date(2010, 1, 1);
    const end = new Date();
    const randomDate = new Date(start.getTime() + Math.random()*(end.getTime() - start.getTime()));
    return randomDate.toISOString().slice(0, 10);
  } */
}

/**
* Activate the APOD widget extension.
*/
async function activate(app: JupyterFrontEnd, palette: ICommandPalette, restorer: ILayoutRestorer | null) {
  console.log('JupyterLab extension jupyterlab_apod is activated!');
  // Define commands
  app.commands.addCommand('my-extension:new-file', {
    label: 'New File',
    execute: () => {
      console.log('New File command executed');
    }
  });

  app.commands.addCommand('my-extension:open-file', {
    label: 'Open File',
    execute: () => {
      console.log('Open File command executed');
    }
  });

  app.commands.addCommand('my-extension:copy', {
    label: 'Copy',
    execute: () => {
      console.log('Copy command executed');
    }
  });

  app.commands.addCommand('my-extension:paste', {
    label: 'Paste',
    execute: () => {
      console.log('Paste command executed');
    }
  });
  // Declare a widget variable
  let widget: MainAreaWidget<ZenodoWidget>;

  /* const content = new ZenodoWidget();
  widget = new MainAreaWidget({content});
  app.shell.add(widget, 'left');
  app.shell.activateById(widget.id); */

  // Add an application command
  const command: string = 'apod:open';
  app.commands.addCommand(command, {
    execute: () => {
      if (!widget || widget.isDisposed) {
        const content = new ZenodoWidget(app);
        widget = new MainAreaWidget({content});
      }
      if (!tracker.has(widget)) {
        // Track the state of the widget for later restoration
        tracker.add(widget);
      }
      if (!widget.isAttached) {
        // Attach the widget to the main work area if it's not there
        app.shell.add(widget, 'left');
        
      }
      widget.content.fillContent();

      // Activate the widget
      app.shell.activateById(widget.id);
    }
  });

/*   // Add the command to the palette.
  palette.addItem({ command, category: 'Tutorial' }); */

  // Track and restore the widget state
  let tracker = new WidgetTracker<MainAreaWidget<ZenodoWidget>>({
    namespace: 'apod'
  });
  if (restorer) {
    restorer.restore(tracker, {
      command,
      name: () => 'apod'
    });
  }

  app.commands.execute(command)
}

const plugin: JupyterFrontEndPlugin<void> = {
  id: 'zenodo_jupyterlab_extension',
  description: 'Show a random NASA Astronomy Picture of the Day in a JupyterLab panel.',
  autoStart: true,
  requires: [ICommandPalette],
  optional: [ILayoutRestorer],
  activate: activate
};

export default plugin;