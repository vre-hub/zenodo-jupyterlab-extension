import React from 'react';
//import GreetingComponent from '../API/GreetingTest';
import { createUseStyles } from 'react-jss';

/* interface Props {
    isTrue: boolean;
  } */

const useStyles = createUseStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
    },
    loginContainer: {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        width: '300px',
        textAlign: 'center',
    },
    formGroup: {
        marginBottom: '20px',
    },
    input: {
        width: 'calc(100% - 20px)', // Change to a string to avoid type errors
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        margin: '10px 0',
    },
    button: {
        width: '100%',
        padding: '10px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
        '&:hover': {
            backgroundColor: '#45a049',
        },
    }
});
//action="/login" method="post" in form
const Login: React.FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.loginContainer}>
            <h2>Login</h2>
            <form>
            <div className={classes.formGroup}>
                    <input className={classes.input} type="text" id="username" name="username" placeholder="Email" required />
        </div>
        <div className={classes.formGroup}>
            <input className={classes.input} type="password" id="password" name="password" placeholder="Password" required />
        </div>
        <div className={classes.formGroup}>
            <button className={classes.button} type="submit">Login</button>
        </div>
    </form>
    </div>
</div>
    );
};
//<GreetingComponent isTrue={isTrue} />
export default Login;
