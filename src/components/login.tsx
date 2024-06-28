import React, { useState } from 'react';
//import GreetingComponent from '../API/GreetingTest';
import { createUseStyles } from 'react-jss';
import { Kernel, KernelMessage } from '@jupyterlab/services';
//import fs from 'fs';
//const pythoncode = ''

interface LoginProps {
    kernel: Kernel.IKernelConnection; // Pass the kernel connection object from your JupyterLab extension
}

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
//action="/login" method="post" in form
const Login: React.FC<LoginProps> = ({ kernel }) => {
    const classes = useStyles();
    const [APIKey, setAPIKey] = useState('');
    const[outputData, setOutputData] = useState<string | null>(null);

    const sendDatatoKernel = async (code: string) => {
        if (!kernel) return;

        try  {
            const future = kernel.requestExecute({ code });

            future.onIOPub = (msg: KernelMessage.IIOPubMessage) => {
                if (msg.header.msg_type === 'execute_result' || msg.header.msg_type === 'stream') {
                } else if (msg.header.msg_type === 'error') {
                    console.error('Error in execution:', msg.content);
                }
            };
            future.onReply = (msg: KernelMessage.IShellMessage) => {
                if ((msg.content as any).status === 'error') {
                    console.error(`Error executing code: ${(msg.content as any).evalue}`);
                }
            };
            future.onStdin = (msg: KernelMessage.IStdinMessage) => {
                console.log(`Stdin message: ${msg.content}`);
            };

            future.done.then(() => {
                console.log('Execution completed');
            });

        } catch (error) {
            if (error instanceof Error) {
                console.error('Error in sendDatatoKernel:', error);
            } else {
                console.error('Unexpected error:', error);
            }
        }
    }

    const testAPIConnection = () => {
        //var test_code = fs.readFileSync(pythoncode,'utf8');
        try {
        var test_code = `
from eossr.api.zenodo import ZenodoAPI
z = ZenodoAPI(access_token = os.environ['TESTVAR'])
response = z.query_user_deposits()
print(response)
        `;
        const future = kernel.requestExecute({ code: test_code });
            future.onIOPub = (msg: KernelMessage.IIOPubMessage) => {
                if (msg.header.msg_type === 'execute_result' || msg.header.msg_type === 'stream') {
                    const content = msg.content as KernelMessage.IExecuteResultMsg['content'] | KernelMessage.IStreamMsg['content'];
                    if ('data' in content) {
                        const data = content.data;
                        if (data && typeof data === 'string') {
                            setOutputData(data);
                        } else if (data && 'text/plain' in data) {
                            setOutputData(data['text/plain'] as string);
                        } else if (data && 'application/json' in data) {
                            setOutputData(JSON.stringify(data['application/json']));
                        }
                    } else if ('text' in content) {
                        setOutputData("Zenodo Token Stored in Kernel Environment");
                    }
                } else if (msg.header.msg_type === 'error') {
                    console.error('Error in execution:', msg.content);
                    setOutputData(`Invalid Zenodo API Token`);
                }
            };
        return test_code;
        } catch (error) {
            console.error('Invalid Zenodo API Key');
        }
    }

    const handleLogin = () => {
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
            sendDatatoKernel(code);
            testAPIConnection();
        } catch (error) {
            alert('Invalid Zenodo API Token');
        }
    }

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
        </div>
    </div>
</div>
    );
};
//<GreetingComponent isTrue={isTrue} />
export default Login;
