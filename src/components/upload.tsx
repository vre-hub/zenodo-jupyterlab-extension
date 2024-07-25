import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    container: {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
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
    creatorInput: {
        width: 'calc(100% - 110px)',
        padding: '8px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '10px',
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
});

const Upload: React.FC = () => {
    const classes = useStyles();
    const [files, setFiles] = useState<FileList | null>(null);
    const [title, setTitle] = useState('');
    const [resourceType, setResourceType] = useState('');
    const [publicationDate, setPublicationDate] = useState('');
    const [creators, setCreators] = useState(['']);
    const [doi, setDoi] = useState('');

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFiles(event.target.files);
    };

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handleResourceTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setResourceType(event.target.value);
    };

    const handlePublicationDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPublicationDate(event.target.value);
    };

    const handleDoiChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDoi(event.target.value);
    };

    const handleCreatorChange = (index: number, value: string) => {
        const newCreators = [...creators];
        newCreators[index] = value;
        setCreators(newCreators);
    };

    const addCreator = () => {
        setCreators([...creators, '']);
    };

    const handleSubmit = () => {
        const formData = new FormData();
        if (files) {
            Array.from(files).forEach(file => formData.append('files', file));
        }
        formData.append('title', title);
        formData.append('resourceType', resourceType);
        formData.append('publicationDate', publicationDate);
        formData.append('creators', JSON.stringify(creators));
        formData.append('doi', doi);

        // Make an API call here, e.g., using fetch
        fetch('your-api-endpoint', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    return (
        <div className={classes.container}>
            <h1 className={classes.heading}>Upload</h1>
            <div className={classes.inputContainer}>
                <label htmlFor="file-upload" className={classes.inputLabel}>Drag and drop files</label>
                <input type="file" id="file-upload" multiple onChange={handleFileChange} className={classes.input} />
            </div>
            <div className={classes.inputContainer}>
                <label htmlFor="doi" className={classes.inputLabel}>Digital Object Identifier</label>
                <input type="text" id="doi" value={doi} onChange={handleDoiChange} className={classes.input} />
            </div>
            <div className={classes.inputContainer}>
                <label htmlFor="resource-type" className={classes.inputLabel}>Resource type</label>
                <select id="resource-type" value={resourceType} onChange={handleResourceTypeChange} className={classes.select}>
                    <option value="">Select type</option>
                    <option value="article">Article</option>
                    <option value="dataset">Dataset</option>
                    <option value="image">Image</option>
                    {/* Add more options as needed */}
                </select>
            </div>
            <div className={classes.inputContainer}>
                <label htmlFor="title" className={classes.inputLabel}>Title</label>
                <input type="text" id="title" value={title} onChange={handleTitleChange} className={classes.input} />
            </div>
            <div className={classes.inputContainer}>
                <label htmlFor="publication-date" className={classes.inputLabel}>Publication date</label>
                <input type="date" id="publication-date" value={publicationDate} onChange={handlePublicationDateChange} className={classes.input} />
            </div>
            <div className={classes.inputContainer}>
                <label className={classes.inputLabel}>Creators</label>
                <div className={classes.creatorList}>
                    {creators.map((creator, index) => (
                        <div key={index} className={classes.inputContainer}>
                            <input
                                type="text"
                                value={creator}
                                onChange={(e) => handleCreatorChange(index, e.target.value)}
                                placeholder="Creator name"
                                className={classes.creatorInput}
                            />
                        </div>
                    ))}
                    <button type="button" onClick={addCreator} className={classes.addButton}>Add creator</button>
                </div>
            </div>
            <div className={classes.buttonContainer}>
                <button type="button" onClick={handleSubmit} className={classes.button}>Submit</button>
            </div>
        </div>
    );
};

export default Upload;