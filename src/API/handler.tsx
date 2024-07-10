// handler.ts

import { URLExt } from '@jupyterlab/coreutils';
import { ServerConnection } from '@jupyterlab/services';

/**
 * Custom error for network-related issues.
 */
export class NetworkError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'NetworkError';
    }
}

/**
 * Custom error for server response errors.
 */
export class ResponseError extends Error {
    constructor(public response: Response, public message: string) {
        super(message);
        this.name = 'ResponseError';
    }
}

/**
 * Make an API request to the Jupyter server.
 *
 * @param {string} endPoint - The API endpoint to call.
 * @param {RequestInit} init - The initialization options for the request.
 * @returns {Promise<any>} - The response data.
 */
export async function requestAPI(endPoint: string, init: RequestInit): Promise<any> {
    const settings = ServerConnection.makeSettings();
    const requestUrl = URLExt.join(settings.baseUrl, endPoint);

    const csrfToken = await getCsrfToken();
    if (!csrfToken) {
        throw new Error('CSRF token not available');
    }
    const headers = {
        'Content-Type': 'application/json',
        'X-XSRFToken': csrfToken // Adjust header name as per your server configuration
    };

    let response: Response;
    try {
        response = await fetch(requestUrl, { ...init, headers});

        if (!response.ok) {
            throw new ResponseError(response, `Response error: ${await response.text()}`);
        }

        return response.json();
    } catch (error: any) {
        throw new NetworkError(`Network error: ${error.message}`);
    }
}

async function getCsrfToken(): Promise<string | undefined> {
    try {
        const response = await fetch('/zenodo-jupyterlab/xsrf_token'); // Replace with your actual endpoint
        if (!response.ok) {
            throw new Error(`Failed to fetch CSRF token: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        return data.xsrfToken; // Adjust as per your server's JSON structure
    } catch (error) {
        console.error('Failed to fetch CSRF token:', error);
        return undefined;
    }
}