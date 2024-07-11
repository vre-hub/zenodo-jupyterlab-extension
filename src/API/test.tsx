import { requestAPI } from './handler';

export async function getEnvVariable(varName: string) {
    try {
        const data = await requestAPI('zenodo-jupyterlab/env?env_var=${encodeURIComponent(varName)}', {
            method: 'GET'
        });
        return(data);
    } catch (error) {
        console.error(`Error fetching ${varName}:`, error);
    }
}

export async function setEnvVariable(key: string, value: string) {
    try {
        const data = await requestAPI('zenodo-jupyterlab/env', {
            method: 'POST',
            body: JSON.stringify({ key, value })
        });
        console.log(data);
    } catch (error) {
        console.error(`Error setting ${key}:`, error);
    }
}

export async function runPythonCode(code: string) {
    try {
        const data = await requestAPI('zenodo-jupyterlab/code', {
            method: 'POST',
            body: JSON.stringify({ code: code })
        });
        console.log(data);
    } catch (error) {
        console.error('Error running code:', error);
    }
}