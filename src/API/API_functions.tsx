import { requestAPI } from './handler';
import { UploadPayload } from '../components/type';

export async function getEnvVariable(varName: string) {
    try {
        const data = await requestAPI(`zenodo-jupyterlab/env?env_var=${encodeURIComponent(varName)}`, {
            method: 'GET'
        });
        return(data);
    } catch (error) {
        console.error(`Error fetching ${varName}:`, error);
    }
}

export async function setEnvVariable(key: string, value: string) {
    try {
        await requestAPI('zenodo-jupyterlab/env', {
            method: 'POST',
            body: JSON.stringify({ key, value })
        });
    } catch (error) {
        console.error(`Error setting ${key}:`, error);
    }
}

export async function testZenodoConnection() {
    try {
/*         const data = await requestAPI('zenodo-jupyterlab/test-connection', {
            method: 'GET'
        }); */
        const data = await requestAPI('zenodo-jupyterlab/zenodo-api', {
            method: 'POST',
            body: JSON.stringify({action: 'check-connection'}),
        })
        return data;
    } catch (error) {
        console.error(`Error testing connection:`, error);
    }
}

export async function depositUpload(payload: UploadPayload) {
    try {
        const data = await requestAPI('zenodo-jupyterlab/zenodo-api', {
            method: 'POST',
            body: JSON.stringify(payload),
        });
        return data;
    } catch (error) {
        console.error('Error uploading info:', error);
    }
}

export async function searchRecords(search_field: string, page: number, kwargs: Record<string, any> = {}) {
    try {
        let url = `zenodo-jupyterlab/search-records?search_field=${encodeURIComponent(search_field)}&page=${encodeURIComponent(page)}`;

        for (const [key, value] of Object.entries(kwargs)) {
            url += `&${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
        }
        const data = await requestAPI(url, {
            method: 'GET'
        });
        return data;
    } catch (error) {
        console.error('Error searching records: ', error);
    }
}

export async function searchCommunities(search_field: string, page:number) {
    try{
        const data = await requestAPI(`zenodo-jupyterlab/search-communities?search_field=${encodeURIComponent(search_field)}&page=${encodeURIComponent(page)}`, {
            method: 'GET'    
        });
        return data;
    } catch (error) {
        console.error('Error searching communities: ', error);
    }
}

export async function recordInformation(recordID: number) {
    try{
        const data = await requestAPI(`zenodo-jupyterlab/record-info?record-id=${encodeURIComponent(recordID)}`, {
            method: 'GET'    
        });
        return data;
    } catch (error) {
        console.error('Error retriving record information: ', error);
    }
}

export async function getServerRootDir() {
    try {
        const response = await requestAPI('zenodo-jupyterlab/server-info', {
            method: 'GET'
        });
        return response.root_dir;
    } catch (error) {
        console.error('Error fetching server root directory:', error);
    }
}

export async function fetchSandboxStatus() {
    try {
        let response = await fetch('zenodo-jupyterlab/env?env_var=ZENODO_SANDBOX');
        if (response.ok) {
            let data = await response.json();
            return data.ZENODO_SANDBOX;
        } else {
            console.error('Failed to fetch sandbox status');
            return null;
        }
    } catch (error) {
        console.error('Error fetching sandbox status:', error);
        return null;
    }
}