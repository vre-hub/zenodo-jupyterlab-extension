// types.ts

export interface FileEntry {
    name: string;
    type: 'file' | 'directory';
    path: string;
    modified?: string; // ISO date string
    size?: number; // Size in bytes
}

export type OnSelectFile = (filePath: string) => void;

export interface Creator {
    name: string;
    affiliation?: string;
}

export interface UploadPayload {
    title: string;
    resourceType: string;
    creators: Creator[];
    doi: string;
    description: string;
    filePaths: string[];
    isSandbox: boolean;
    action: string;
}