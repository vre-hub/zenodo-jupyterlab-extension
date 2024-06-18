import ZenodoBlueTitle from '../icons/ZenodoBlueTitle'
  // //import ReactDOM from 'react-dom';
import React from 'react';
import NavBar from './NavBar';
import { JupyterFrontEnd } from '@jupyterlab/application';
  
  //import React from 'react';
  
  //import { MenuBar } from '../components'
  
  /* interface APODResponse {
    copyright: string;
    date: string;
    explanation: string;
    media_type: 'video' | 'image';
    title: string;
    url: string;
  }; */

  interface SideBarProps {
    app: JupyterFrontEnd<any,any>;
  }
  

  const SideBarPanel: React.FC<SideBarProps> = (
    { app }
  ) => {
    return <div id='SideBarPanel'>
        <div id='title_container'>
            <ZenodoBlueTitle />
            <NavBar app={app} />
        </div>
    </div>
  }

  export default SideBarPanel;
