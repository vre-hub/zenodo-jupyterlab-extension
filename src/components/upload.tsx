import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import FileBrowser from './FileBrowser';
import Confirmation from './confirmation';
import { depositUpload } from '../API/API_functions';
import { UploadPayload } from './type';

const useStyles = createUseStyles({
    container: {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        maxWidth: '800px',
        textAlign: 'center',
        verticalAlign: 'top'
    },
    heading: {
        textAlign: 'center',
        marginBottom: '20px',
        color: '#333',
    },
    inputContainer: {
        marginBottom: '20px',
    },
    inputLabel: {
        display: 'block',
        marginBottom: '8px',
        fontWeight: 'bold',
        color: '#333',
    },
    requiredAsterisk: {
        color: 'red',
        marginLeft: '5px', // Adjust as necessary for spacing
    },
    input: {
        width: '100%',
        padding: '8px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        boxSizing: 'border-box',
    },
    select: {
        width: '100%',
        padding: '8px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        boxSizing: 'border-box',
    },
    button: {
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#0056b3',
        },
    },
    buttonContainer: {
        textAlign: 'center',
    },
    creatorList: {
        marginBottom: '20px',
    },
    creatorItem: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px',
    },
    creatorInput: {
        flex: 1,
        padding: '8px',
        border: '1px solid #ccc',
        borderRadius: '4px',
    },
    addButton: {
        padding: '8px 15px',
        backgroundColor: '#28a745',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#218838',
        },
    },
    fileList: {
        marginTop: '10px',
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        maxWidth: '100%', // Ensure it doesn't exceed the container width
        overflow: 'visible', // Allow horizontal scrolling if needed
    },
    fileItem: {
        display: 'flex',
        //justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexDirection: 'column',
        padding: '5px 0',
        borderBottom: '1px solid #ddd',
        width: '100%', // Ensure file item uses full width of fileDetails
        boxSizing: 'border-box',
        overflow: 'hidden',
        position: 'relative',
        transition: 'background-color 0.3s', // Add transition for smooth effect
        '&:hover': {
            backgroundColor: '#f0f0f0', // Background color on hover
        },
    },
    removeButton: {
        backgroundColor: '#dc3545',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        padding: '5px 10px',
        width: '75px',
        //marginLeft: '10px',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#c82333',
        },
    },
    fileSummary: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '10px',
        width: '100%',
    },
    
    fileDetails: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%', // Ensure the details section uses the full width of the container
        overflow: 'hidden',
    },
    
    toggleButton: {
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        padding: '5px 10px',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#0056b3',
        },
    },
    fileName: {
        flex: 1, // Allow the file name to take up available space
        maxWidth: 'calc(100% - 85px)', // Adjust this value based on the width needed for the remove button
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        cursor: 'pointer', // Indicate that it's interactive
        position: 'relative',
    },
    checkboxContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '10px',
        flexDirection: 'row',
    },
    checkboxLabel: {
        display: 'flex',
        alignItems: 'center',
    },
    checkboxInput: {
        marginRight: '5px',
    },
    errorBox: {
        backgroundColor: '#f8d7da',
        color: '#721c24',
        padding: '10px',
        borderRadius: '4px',
        border: '1px solid #f5c6cb',
        marginBottom: '20px',
        textAlign: 'left',
        boxSizing: 'border-box',
        width: '100%',
        overflow: 'hidden',
        wordWrap: 'break-word'
    },
    description: {
        width: '100%',
        padding: '8px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        boxSizing: 'border-box',
        resize: 'vertical', // Allows vertical resizing
        minHeight: '100px' // Optional, for a minimum height
    },
    filePathItem: {
        display: 'block',
        alignItems: 'flex-start',
        padding: '5px 0',
        borderBottom: '1px solid #ddd',
        width: '100%',
        boxSizing: 'border-box',
        backgroundColor: '#f9f9f9',
        marginTop: '2px',
        overflow: 'auto'
    },
    
    filePathText: {
        flex: 1,
        whiteSpace: 'nowrap',
        overflow: 'auto', // Change to auto for overflow handling
        textOverflow: 'ellipsis',
        padding: '5px',
    },
    fileHeader: {
        display: 'flex',
        alignItems: 'center', // Align items vertically centered
        width: '100%', // Ensure it takes full width
        marginBottom: '5px', // Space between file name and path
    },
});

const Upload: React.FC = () => {
    const classes = useStyles();
    const [title, setTitle] = useState('');
    const [resourceType, setResourceType] = useState('');
    const [creators, setCreators] = useState([{ name: '', affiliation: '' }]);
    const [doi, setDoi] = useState('');
    //const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const [isExpanded, setIsExpanded] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [selectedFilePaths, setSelectedFilePaths] = useState<string[]>([]);
    const [isConfirmationVisible, setIsConfirmationVisible] = useState(false);
    const [isSandbox, setIsSandbox] = useState(false);
    const [description, setDescription] = useState('');
    const [expandedFile, setExpandedFile] = useState<string | null>(null);

    useEffect(() => {
        async function fetchSandboxStatus() {
            try {
                const response = await fetch('zenodo-jupyterlab/env?env_var=ZENODO_SANDBOX');
                const data = await response.json();
                setIsSandbox(data.ZENODO_SANDBOX === 'true');
            } catch (error) {
                console.error('Error fetching sandbox status:', error);
            }
        }

        fetchSandboxStatus();
    }, []);

    const handleFileClick = (filePath: string) => {
        setExpandedFile(prev => (prev === filePath ? null : filePath));
    };

    const handleFileRemove = (filePath: string) => {
        setSelectedFilePaths(prevPaths => prevPaths.filter(path => path !== filePath));
    };

    const handleFileSelect = (filePath: string) => {
        setSelectedFilePaths(prevPaths => [
            ...new Set([...prevPaths, filePath]) // Add new paths, avoiding duplicates
        ]);
    };

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handleResourceTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setResourceType(event.target.value);
    };

    const handleDoiChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDoi(event.target.value);
    };

    const handleCreatorChange = (index: number, key: 'name' | 'affiliation', value: string) => {
        const newCreators = [...creators];
        newCreators[index][key] = value;
        setCreators(newCreators);
    };


    const addCreator = () => {
        setCreators([...creators, { name: '', affiliation: '' }]);
    };

    const handleSubmit = () => {
        setErrorMessage('');
        if (!title || !resourceType || selectedFilePaths.length === 0 || creators.some(creator => !creator.name)) {
            setErrorMessage('Please fill out all required fields: Title, at least one file, resource type, and at least one creator name.');
            return;
        }
        setIsConfirmationVisible(true);
    };

    const handleEdit = () => {
        setIsConfirmationVisible(false);
    };

    const handleConfirm = async () => {
        const formData = new FormData();
        selectedFilePaths.forEach(filePath => formData.append('filePaths', filePath));
        formData.append('title', title);
        formData.append('resourceType', resourceType);
        formData.append('creators', JSON.stringify(creators));
        formData.append('doi', doi);
        formData.append('description', description);
        formData.append('action', 'upload');

        const payload: UploadPayload = {
            title,
            resourceType,
            creators,
            doi,
            description,
            filePaths: selectedFilePaths,
            isSandbox,
            action: 'upload'
        };
    
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }
        console.log(JSON.stringify(payload));
        const response = await depositUpload(payload);
        console.log(response['status']);
    };

    const fileName = (filePath: string) => {
        const segments = filePath.split('/');
        return segments.pop();
    }

    return (
        <div className={classes.container}>
            {isConfirmationVisible ? (
                <Confirmation 
                    title={title} 
                    resourceType={resourceType} 
                    creators={creators} 
                    doi={doi} 
                    filePaths={selectedFilePaths} 
                    isSandbox = {isSandbox}
                    description={description}
                    onEdit={handleEdit} 
                    onConfirm={handleConfirm}
                />
            ) : (
                <>
                    <h1 className={classes.heading}>Upload</h1>
                    {errorMessage && (
                        <div className={classes.errorBox}>
                            {errorMessage}
                        </div>
                    )}
                    <div className={classes.checkboxContainer}>
                        <label className={classes.checkboxLabel}>
                            <input 
                            type="checkbox"
                            //checked={selectedType === 'communities'}
                            //onChange={() => handleCheckboxChange('communities')}
                            className={classes.checkboxInput}
                            checked={isSandbox}
                            readOnly
                            />
                            Sandbox
                        </label>
                    </div>
                    <div className={classes.inputContainer}>
                        <label htmlFor="file-upload" className={classes.inputLabel}>Select Files to Upload<span className={classes.requiredAsterisk}>*</span></label>
                        <FileBrowser onSelectFile={handleFileSelect}/>
                        <div className={classes.fileList}>
                            {selectedFilePaths.length > 0 && (
                                <>
                                    <div className={classes.fileSummary}>
                                        <span>{selectedFilePaths.length} file{selectedFilePaths.length > 1 ? 's' : ''}</span>
                                        <button type="button" onClick={() => setIsExpanded(!isExpanded)} className={classes.toggleButton}>
                                            {isExpanded ? 'Collapse' : 'Expand'}
                                        </button>
                                    </div>
                                    {isExpanded && (
                                        <div className={classes.fileDetails}>
                                            {selectedFilePaths.map((filePath, index) => (
                                                <div key={index} className={classes.fileItem}>
                                                    <div className={classes.fileHeader}>
                                                    <span className={classes.fileName} onClick={() => handleFileClick(filePath)}>
                                                        {fileName(filePath)}
                                                     </span>
                                                    <button type="button" onClick={() => handleFileRemove(filePath)} className={classes.removeButton}>Remove</button>
                                                    </div>
                                                    {expandedFile === filePath && (
                                                        <>
                                                        <div className={classes.filePathItem}>
                                                            <span className={classes.filePathText}>
                                                                {filePath}
                                                            </span>
                                                        </div>
                                                        </>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                    <div className={classes.inputContainer}>
                        <label htmlFor="doi" className={classes.inputLabel}>Digital Object Identifier</label>
                        <input type="text" id="doi" value={doi} onChange={handleDoiChange} className={classes.input} />
                    </div>
                    <div className={classes.inputContainer}>
                        <label htmlFor="resource-type" className={classes.inputLabel}>Resource type<span className={classes.requiredAsterisk}>*</span></label>
                        <select id="resource-type" value={resourceType} onChange={handleResourceTypeChange} className={classes.select}>
                            <option value="">Select type</option>
                            <option value="article">Article</option>
                            <option value="dataset">Dataset</option>
                            <option value="image">Image</option>
                            <option value="software">Software</option>
                            <option value="journal">Journal</option>
                            <option value="other">Other</option>
                            <option value="publication">Publication</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>
                    <div className={classes.inputContainer}>
                        <label htmlFor="title" className={classes.inputLabel}>Title<span className={classes.requiredAsterisk}>*</span></label>
                        <input type="text" id="title" value={title} onChange={handleTitleChange} className={classes.input} />
                    </div>
                    <div className={classes.inputContainer}>
                        <label htmlFor="description" className={classes.inputLabel}>Description</label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className={classes.description}
                        />
                    </div>
                    <div className={classes.inputContainer}>
                        <label className={classes.inputLabel}>Creators<span className={classes.requiredAsterisk}>*</span></label>
                        <div className={classes.creatorList}>
                        {creators.map((creator, index) => (
                            <div key={index} className={classes.creatorItem}>
                                <input
                                    type="text"
                                    value={creator.name}
                                    onChange={(e) => handleCreatorChange(index, 'name', e.target.value)}
                                    placeholder="Creator name"
                                    className={classes.creatorInput}
                                />
                                <input
                                    type="text"
                                    value={creator.affiliation}
                                    onChange={(e) => handleCreatorChange(index, 'affiliation', e.target.value)}
                                    placeholder="Affiliation"
                                    className={classes.creatorInput}
                                />
                            </div>
                        ))}
                            <button type="button" onClick={addCreator} className={classes.addButton}>Add creator</button>
                        </div>
                    </div>
                    <div className={classes.buttonContainer}>
                        <button type="button" onClick={handleSubmit} className={classes.button}>Next</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Upload;

/*

List of Required Information for Publishable Record:
DOI: yes or no (can check if data in field, then go from there checking yes or no) [actually if none given it defaults to no] V
File Upload (at least one) V
Reource Type V
Title V
Creator (with optional affiliation) V

Additional Info:
to be added
*/