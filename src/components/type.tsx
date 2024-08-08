// types.ts

export interface FileEntry {
    name: string;
    type: 'file' | 'directory';
    path: string;
    modified?: string; // ISO date string
    size?: number; // Size in bytes
}

export type OnSelectFile = (filePath: string) => void;