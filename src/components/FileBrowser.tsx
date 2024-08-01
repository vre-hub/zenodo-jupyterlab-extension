import React, { useState, useEffect, useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faFile } from '@fortawesome/free-solid-svg-icons';
import { getServerRootDir } from '../API/API_functions';
import { FileEntry, OnSelectFile } from './type';

const useStyles = createUseStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '100%',
        maxHeight: '400px', // Set the max height
        overflowY: 'auto',  // Allow scrolling if content exceeds max height
        border: '1px solid #ddd',
        borderRadius: '4px',
        padding: '10px',
        boxSizing: 'border-box',
    },
    item: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '5px',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#f0f0f0',
        },
    },
    fileName: {
        marginLeft: '10px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
    fileInfo: {
        flexShrink: 0,
        textAlign: 'right',
        marginLeft: '10px',
        fontSize: '12px',
        color: '#888',
    },
    folderIcon: {
        width: '16px',
        height: '16px',
        marginRight: '5px',
    },
    fileIcon: {
        width: '16px',
        height: '16px',
        marginRight: '5px',
    },
    breadcrumb: {
        marginBottom: '10px',
        display: 'flex',
        alignItems: 'center',
    },
    breadcrumbItem: {
        marginRight: '5px',
        cursor: 'pointer',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
});

interface FileBrowserProps {
    onSelectFile: OnSelectFile;
}

const FileBrowser: React.FC<FileBrowserProps> = ({ onSelectFile }) => {
    const classes = useStyles();
    const [entries, setEntries] = useState<FileEntry[]>([]);
    const [currentPath, setCurrentPath] = useState<string>('');
    const [rootPath, setRootPath] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchRootPath = async () => {
            setLoading(true);
            setError('');
            try {
                const rootDir = await getServerRootDir();
                if (rootDir) {
                    setRootPath(rootDir);
                    setCurrentPath(rootDir);
                } else {
                    setError('Failed to retrieve the root path.');
                }
            } catch (error) {
                setError('Error fetching root path.');
                console.error('Error fetching root path:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchRootPath();
    }, []);

    useEffect(() => {
        const loadFiles = async () => {
            setLoading(true);
            setError('');
            try {
                if (!currentPath) return;

                const response = await fetch(`/zenodo-jupyterlab/files?path=${encodeURIComponent(currentPath)}`);
                if (response.ok) {
                    const data = await response.json();
                    setEntries(data.entries || []);
                } else {
                    setError('Failed to fetch file entries.');
                }
            } catch (error) {
                setError('Error fetching file entries.');
                console.error('Error fetching file entries:', error);
            } finally {
                setLoading(false);
            }
        };

        loadFiles();
    }, [currentPath]);

    const handleClick = (entry: FileEntry) => {
        if (entry.type === 'directory') {
            setCurrentPath(entry.path);
        } else if (entry.type === 'file') {
            onSelectFile(entry.path);
        }
    };

    const handleBreadcrumbClick = (path: string) => {
        console.log('Breadcrumb clicked, path:', path);
        if (path !== currentPath) {
            //console.log('Updating currentPath from', currentPath, 'to', path);
            setCurrentPath(path);
        }
    };

    const breadcrumbs = useMemo(() => {
        if (!rootPath || !currentPath) return null;
    
        // Normalize the current path
        const normalizedCurrentPath = currentPath.startsWith(rootPath)
            ? currentPath
            : `${rootPath}${currentPath}`;
        const relativePath = normalizedCurrentPath.slice(rootPath.length).replace(/^\/|\/$/g, '');
        const parts = relativePath.split('/').filter(part => part);
    
        // Array to hold the breadcrumb items
        const breadcrumbItems = [];
    
        // Generate breadcrumbs
        for (let i = 0; i < parts.length; i++) {
            // Build the path up to the current part
            let path = rootPath;
            for (let j = 0; j <= i; j++) {
                path = `${path}/${parts[j]}`.replace(/\/+/g, '/');
            }
    
            // Add breadcrumb item
            breadcrumbItems.push(
                <React.Fragment key={path}>
                    <span
                        className={classes.breadcrumbItem}
                        onClick={() => handleBreadcrumbClick(path)}
                    >
                        {parts[i]}
                    </span>
                    {i < parts.length - 1 && ' / '}
                </React.Fragment>
            );
        }
    
        return breadcrumbItems;
    }, [currentPath, rootPath, classes.breadcrumbItem]);

    return (
        <div className={classes.container}>
            <div className={classes.breadcrumb}>
                {rootPath && (
                    <>
                        <span
                            className={classes.breadcrumbItem}
                            onClick={() => setCurrentPath(rootPath)}
                        >
                            $HOME
                        </span>
                        {currentPath !== rootPath && ' / '}
                        {breadcrumbs}
                    </>
                )}
            </div>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {entries.length === 0 && !loading && !error && <p>No items to display.</p>}
            {entries.map((entry) => (
                <div key={entry.path} className={classes.item} onClick={() => handleClick(entry)}>
                    <FontAwesomeIcon
                        icon={entry.type === 'directory' ? faFolder : faFile}
                        className={entry.type === 'directory' ? classes.folderIcon : classes.fileIcon}
                    />
                    <span className={classes.fileName}>{entry.name}</span>
                    <span className={classes.fileInfo}>
                        {entry.modified && new Date(entry.modified).toLocaleDateString()}<br />
                        {entry.size && `${entry.size} B`}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default FileBrowser;