import ZenodoBlueTitle from '../icons/ZenodoBlueTitle'
  // //import ReactDOM from 'react-dom';
import React from 'react';
import NavBar from './NavBar';
import { JupyterFrontEnd } from '@jupyterlab/application';
import SearchWidget from './SearchPanel';
import Login from './login';
  
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
    app: JupyterFrontEnd;
    isTrue: boolean;
    showLogin: boolean
  }
  
  const SideBarPanel: React.FC<SideBarProps> = (
    { 
      app,
      isTrue,
      showLogin
     }
  ) => {
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
    return <div id='SideBarPanel'>
        <div id='title_container'>
            <ZenodoBlueTitle />
            <NavBar app={app} />
            {showLogin && (
              <Login />
            )}
            <SearchWidget isTrue = {isTrue}/>
        </div>
    </div>
  }

  export default SideBarPanel;
