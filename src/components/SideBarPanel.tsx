import ZenodoBlueTitle from '../icons/ZenodoBlueTitle'
  // //import ReactDOM from 'react-dom';
import React from 'react';
import NavBar from './NavBar';
import { JupyterFrontEnd } from '@jupyterlab/application';
import SearchWidget from './SearchPanel';
import Login from './login';
import { createUseStyles } from 'react-jss';
import { Kernel } from '@jupyterlab/services';
  
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

  const useStyles = createUseStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#fff',
      height: '100vh',
      padding: '20px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    titleContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  });

  interface SideBarProps {
    app: JupyterFrontEnd;
    isTrue: boolean;
    showLogin: boolean;
    showSearch: boolean;
    kernel: Kernel.IKernelConnection;
  }
  
  const SideBarPanel: React.FC<SideBarProps> = (
    { 
      app,
      isTrue,
      showLogin,
      showSearch,
      kernel
     }
  ) => {
    const classes = useStyles();
    /* const runSearch = async (query: string) => {
        try {
            const response = await fetch('/run_search', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ query })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error searching:', error);
            return [];
        }
    }; */
    return <div id='SideBarPanel' className={classes.container}>
        <div className={classes.titleContainer}>
          <ZenodoBlueTitle />
        </div>
            <NavBar app={app} />
            {showLogin && (
              <Login kernel = {kernel}/>
            )}
            {showSearch && (<SearchWidget isTrue={isTrue} />)}
    </div>
  }

  export default SideBarPanel;
