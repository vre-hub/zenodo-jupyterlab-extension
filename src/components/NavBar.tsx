//import ZenodoBlueTitle from '../icons/ZenodoBlueTitle'
import { JupyterFrontEnd } from '@jupyterlab/application';
import React, {useState} from 'react';

interface NavBarProps {
    app: JupyterFrontEnd<any,any>;
}

const NavBar: React.FC<NavBarProps> = (
    { app }
) => {
    const [isOpen] = useState(false);
  
    const handleSearchClick = () => {
      app.commands.execute('zenodo-jupyterlab: search');
      // Place your home command here
    };
  
    const handleAboutClick = () => {
      console.log('About clicked');
      // Place your about command here
    };
  
    const handleServicesClick = () => {
      console.log('Services clicked');
      // Place your services command here
    };
  
    const handleContactClick = () => {
      console.log('Contact clicked');
      // Place your contact command here
    };
  
    return (
      <nav className="navbar">
        <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <li><a href="#" onClick={handleSearchClick}>Search</a></li>
          <li><a href="#" onClick={handleAboutClick}>About</a></li>
          <li><a href="#" onClick={handleServicesClick}>Services</a></li>
          <li><a href="#" onClick={handleContactClick}>Contact</a></li>
        </ul>
      </nav>
    );
}

export default NavBar;

/* interface IMenuBarProps {
    value?: any;
    onChange: { (value: any): void };
    menus: IMenu[];
  }
  
  export interface IMenu {
    title: any;
    value: any;
    right?: boolean;
    disabled?: boolean;
  }

export const NavBar: React.FunctionComponent = () => {
    //const classes = useStyles();
  
    return (
      <div>
        <ul>
          {menus.map(menu => {
            const activeClass = menu.value === value ? 'active' : '';
            const disabledClass = menu.disabled ? 'disabled' : '';
            //const tabClass = menu.right ? classes.tabItemRight : classes.tabItem;
            //${tabClass}
            return (
              <li
                onClick={!menu.disabled ? () => onChange(menu.value) : undefined}
                key={menu.value}
                className={` ${activeClass} ${disabledClass}`}
              >
                {menu.title}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }; */

