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

import { Widget } from '@lumino/widgets';

//import { zenodoIcon }from './icon/ZenodoIcon'

import { LabIcon } from '@jupyterlab/ui-components';
import z_icon from '/src/icon/z_icon.svg';
//import {ReactSVG} from "react-svg";
import title_icon from '/src/icon/zenodo-black.svg';

//import zenodoBlack from './icon/zenodoBlack';

//import React, { FC } from 'react';

/* const z_icon = `
  <svg width="288" height="288" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.046 51.046">
    <path fill="#000000" d="m 28.324,20.044 c -0.043,-0.106 -0.084,-0.214 -0.131,-0.32 -0.707,-1.602 -1.656,-2.997 -2.848,-4.19 -1.188,-1.187 -2.582,-2.125 -4.184,-2.805 -1.605,-0.678 -3.309,-1.02 -5.104,-1.02 -1.85,0 -3.564,0.342 -5.137,1.02 -1.467,0.628 -2.764,1.488 -3.91,2.552 V 14.84 c 0,-1.557 -1.262,-2.822 -2.82,-2.822 h -19.775 c -1.557,0 -2.82,1.265 -2.82,2.822 0,1.559 1.264,2.82 2.82,2.82 h 15.541 l -18.23,24.546 c -0.362,0.487 -0.557,1.077 -0.557,1.682 v 1.841 c 0,1.558 1.264,2.822 2.822,2.822 H 5.038 c 1.488,0 2.705,-1.153 2.812,-2.614 0.932,0.743 1.967,1.364 3.109,1.848 1.605,0.684 3.299,1.021 5.102,1.021 2.723,0 5.15,-0.726 7.287,-2.187 1.727,-1.176 3.092,-2.639 4.084,-4.389 0.832799,-1.472094 1.418284,-2.633352 1.221889,-3.729182 -0.173003,-0.965318 -0.694914,-1.946419 -2.326865,-2.378358 -0.58,0 -1.376024,0.17454 -1.833024,0.49254 -0.463,0.316 -0.793,0.744 -0.982,1.275 l -0.453,0.93 c -0.631,1.365 -1.566,2.443 -2.809,3.244 -1.238,0.803 -2.633,1.201 -4.188,1.201 -1.023,0 -2.004,-0.191 -2.955,-0.579 -0.941,-0.39 -1.758,-0.935 -2.439,-1.64 C 9.986,40.343 9.441,39.526 9.027,38.603 8.617,37.679 8.41,36.71 8.41,35.687 v -2.476 h 17.715 c 0,0 1.517774,-0.15466 2.183375,-0.770672 0.958496,-0.887085 0.864622,-2.15038 0.864622,-2.15038 0,0 -0.04354,-5.066834 -0.338376,-7.578154 C 28.729048,21.812563 28.324,20.044 28.324,20.044 Z M -11.767,42.91 2.991,23.036 C 2.913,23.623 2.87,24.22 2.87,24.827 v 10.86 c 0,1.799 0.35,3.498 1.059,5.104 0.328,0.752 0.719,1.458 1.156,2.119 -0.016,0 -0.031,-10e-4 -0.047,-10e-4 H -11.767 Z M 23.71,27.667 H 8.409 v -2.841 c 0,-1.015 0.189,-1.99 0.58,-2.912 0.391,-0.922 0.936,-1.74 1.645,-2.444 0.697,-0.703 1.516,-1.249 2.438,-1.641 0.922,-0.388 1.92,-0.581 2.99,-0.581 1.02,0 2.002,0.193 2.949,0.581 0.949,0.393 1.764,0.938 2.441,1.641 0.682,0.704 1.225,1.521 1.641,2.444 0.414,0.922 0.617,1.896 0.617,2.912 z" transform="translate(20.35 -4.735)" class="colorfff svgShape"></path>
  </svg>
`;
 */
/* interface APODResponse {
  copyright: string;
  date: string;
  explanation: string;
  media_type: 'video' | 'image';
  title: string;
  url: string;
}; */


class ZenodoWidget extends Widget {
  constructor() {
    super();

    this.addClass('my-apodWidget');

    // Add an image element to the panel
    // this.img1 = document.createElement('img');
    // this.img1.width = 150;
    // this.node.appendChild(this.img1);

    // Add a summary element to the panel
    // this.summary = document.createElement('p');
    // this.node.appendChild(this.summary);
    this.id = 'zenodo-jupyterlab-extension';
    //this.title.label = 'Zenodo';
    this.title.closable = true;
    const icon = new LabIcon ({
      name:'zenodo_jupyterlab-extension:zenodo',
      svgstr: z_icon,
    });
    this.title.icon = icon.bindprops();

    this.title_container = document.createElement('div');
    this.title_container.id = 'Zenodo-Title';
    this.title_container.setAttribute("style", "padding-left: 40px");
    this.title_container.innerHTML = title_icon;
    this.node.appendChild(this.title_container);

    
    //this.svg = document.createElement('ReactSVG')
    /* const svg = document.createElement('svg');
    svg = zenodoBlack */
    

    //this.title_container.appendChild(zenodoBlack);
  }

  // readonly img1: HTMLImageElement;

  // readonly summary: HTMLParagraphElement;

  readonly title_container: HTMLDivElement;

  //readonly svg: ReactSVG;

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
        const content = new ZenodoWidget();
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