//import ZenodoBlueTitle from '../icons/ZenodoBlueTitle'
import { JupyterFrontEnd } from '@jupyterlab/application';
import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  navbar: {
    width: '100%',
    padding: '10px 0',
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
  },
  navButton: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 20px',
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: '#0056b3',
    },
  },
  navbarLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '20px', // Add some space between the buttons
    margin: 0,
    padding: 0,
  },
})

interface NavBarProps {
    app: JupyterFrontEnd;
}

const NavBar: React.FC<NavBarProps> = (
    { app }
) => {

    const classes = useStyles();

    //const [isOpen] = useState(false);
  
    const handleSearchClick = () => {
      app.commands.execute('zenodo-jupyterlab: search');
    };
  
    const handleLoginClick = () => {
      app.commands.execute('zenodo-jupyterlab:login');
    };

    const handleUploadClick = () => {
      app.commands.execute('zenodo-jupyterlab:upload');
    }
  
    return (
      <nav className={classes.navbar}>
        <ul className={classes.navbarLinks}>
          <li><button className={classes.navButton} onClick = {handleLoginClick}>Login</button></li>
          <li><button className={classes.navButton} onClick={handleSearchClick}>Search</button></li>
          <li><button className={classes.navButton} onClick = {handleUploadClick}>Upload</button></li>
        </ul>
      </nav>
    );
}

export default NavBar;