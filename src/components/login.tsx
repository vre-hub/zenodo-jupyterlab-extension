import React, { useState, useCallback } from 'react';
import { createUseStyles } from 'react-jss';
import { getEnvVariable, setEnvVariable, testZenodoConnection } from '../API/test';

const useStyles = createUseStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    loginContainer: {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        width: '300px',
        textAlign: 'center',
        verticalAlign: 'top'
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

const Login: React.FC = () => {
    const classes = useStyles();
    const [APIKey, setAPIKey] = useState('');
    const[outputData, setOutputData] = useState<string | null>(null);
    const [connectionStatus, setConnectionStatus] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const handleLogin = useCallback(async () => {
        try {
            if (APIKey != '') {
                await setEnvVariable('ZENODO_API_KEY', APIKey);
                //console.log(await getEnvVariable('ZENODO_API_KEY'));
                setOutputData("Zenodo Token Successfully Stored in Environment.");
                testAPIConnection();
            } else {
                const storedKey = getEnvVariable('ZENODO_API_KEY');
                if (storedKey === null) {
                    setOutputData("No Zenodo Key Stored. Please Enter A Key.");
                } else {
                    setOutputData("Zenodo Key still stored.");
                    testAPIConnection();
                }
            }
        } catch (error) {
            console.error(error);
        }
    }, [APIKey]);

    const testAPIConnection = async () => {
        setIsLoading(true);
        try {
            var response = await testZenodoConnection();
            //console.log(response['status']);
            if (Number(response['status']) == 200) {
                setConnectionStatus("API Connection Successful")
            } else {
                setConnectionStatus("Invalid Zenodo API Key")
            }
        } catch(error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

/*     const handleLogin = () => {
        try {
            var code = `
import os
            `;
            if (APIKey != '') {
                code += `
os.environ['TESTVAR'] = '${APIKey}'
                `;
            }
            code += `
os.environ['TESTVAR']
            `;
            console.log(code);
        } catch (error) {
            alert('Invalid Zenodo API Token');
        }
    } */

    return (
        <div className={classes.root}>
            <div className={classes.loginContainer}>
            <h2>Login</h2>
            <div className={classes.formGroup}>
                    <input className={classes.input} type="text" id="APIKey" name="APIKey" placeholder="API Key" value={APIKey} onChange={(e) => setAPIKey(e.target.value)} required />
        </div>
        <div className={classes.formGroup}>
            <button className={classes.button} type="submit" onClick={handleLogin}>Login</button>
            {outputData ? (
                <div>
                    <h2>Processed Output:</h2>
                    <p>{outputData}</p>
                </div>
                ) : (
                <p>No data processed yet</p>
            )}
            {isLoading ? (
                        <p>Loading...</p>
                    ) : connectionStatus ? (
                        <div>
                            <h2>Zenodo Connection Status:</h2>
                            <p>{connectionStatus}</p>
                        </div>
                    ) : null}
        </div>
    </div>
</div>
    );
};

export default Login;

