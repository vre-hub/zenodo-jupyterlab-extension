import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    confirmationContainer: {
        backgroundColor: '#f9f9f9',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'center',
    },
    heading: {
        marginBottom: '20px',
        color: '#333',
    },
    detailsList: {
        listStyleType: 'none',
        padding: 0,
        textAlign: 'left',
        margin: '0 auto',
        maxWidth: '600px',
    },
    detailItem: {
        marginBottom: '10px',
        fontSize: '16px',
        lineHeight: '1.5',
    },
    buttonContainer: {
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'center',
        gap: '15px', // Space between buttons
    },
    button: {
        padding: '10px 20px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
        color: '#fff',
        backgroundColor: '#007bff',
        '&:hover': {
            backgroundColor: '#0056b3',
        },
    },
    editButton: {
        backgroundColor: '#28a745',
        '&:hover': {
            backgroundColor: '#218838',
        },
    },
    confirmButton: {
        backgroundColor: '#dc3545',
        '&:hover': {
            backgroundColor: '#c82333',
        },
    },
});

const Confirmation: React.FC<{
    title: string;
    resourceType: string;
    creators: { name: string; affiliation: string }[];
    doi: string;
    filePaths: string[];
    isSandbox: boolean; // New prop for sandbox status
    description: string;
    onEdit: () => void;
    onConfirm: () => void;
}> = ({ title, resourceType, creators, doi, filePaths, isSandbox, description, onEdit, onConfirm }) => {
    const classes = useStyles();

    return (
        <div className={classes.confirmationContainer}>
            <h1 className={classes.heading}>Confirmation</h1>
            <ul className={classes.detailsList}>
                <li className={classes.detailItem}><strong>Title:</strong> {title}</li>
                <li className={classes.detailItem}><strong>Resource Type:</strong> {resourceType}</li>
                <li className={classes.detailItem}><strong>DOI:</strong> {doi || '(automatic)'}</li>
                <li className={classes.detailItem}><strong>Description:</strong> { description || 'None given.'}</li>
                <li className={classes.detailItem}>
                    <strong>Creators:</strong>
                    <ul>
                        {creators.map((creator, index) => (
                            <li key={index} className={classes.detailItem}>
                                {creator.name} {creator.affiliation && `(${creator.affiliation})`}
                            </li>
                        ))}
                    </ul>
                </li>
                <li className={classes.detailItem}>
                    <strong>Files:</strong>
                    <ul>
                        {filePaths.map((filePath, index) => (
                            <li key={index} className={classes.detailItem}>{filePath}</li>
                        ))}
                    </ul>
                </li>
                <li className={classes.detailItem}><strong>Sandbox:</strong> {isSandbox ? 'Yes' : 'No'}</li>
            </ul>
            <div className={classes.buttonContainer}>
                <button type="button" className={`${classes.button} ${classes.editButton}`} onClick={onEdit}>Edit</button>
                <button type="button" className={`${classes.button} ${classes.confirmButton}`} onClick={onConfirm}>Confirm</button>
            </div>
        </div>
    );
};

export default Confirmation;