import React, { useState } from 'react';
import { searchRecords, searchCommunities } from '../API/API_functions';
import { createUseStyles } from 'react-jss';

// interface SearchResult {
//     id: number;
//     title: string;
//     date: string;
// }
//title, version, type, date

const useStyles = createUseStyles({
    searchWidget: {
        width: '100%',
        maxWidth: '1000px', // Optional: set a max-width for the widget
        overflowX: 'auto', // Enable horizontal scrolling
        margin: '0 auto', // Center the widget if maxWidth is set
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '20px',
    },
    input: {
        marginBottom: '10px',
        padding: '8px',
        width: '200px',
        border: '1px solid #ccc',
        borderRadius: '4px',
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
    tableContainer: {
        width: '100%',
        overflowX: 'auto',
        marginTop: '20px',
    },
    table: {
        minWidth: '400px',
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '20px',
    },
    headerRow: {
        backgroundColor: '#007bff',
        color: 'white',
    },
    headerCell: {
        padding: '10px',
        textAlign: 'left',
        borderBottom: '2px solid #ccc',
    },
    row: {
        borderBottom: '1px solid #ccc',
    },
    cell: {
        padding: '10px',
        textAlign: 'left',
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
    }
});

const SearchWidget: React.FC = () => {
    const classes = useStyles();
    const[results, setResults] = useState<any[]>([]);
    const[searchTerm, setSearchTerm] = useState('');
    const[isLoading, setIsLoading] = useState(false);
    const [selectedType, setSelectedType] = useState('records');
    const [lastSearchType, setLastSearchType] = useState('records');
    const [hasSearched, setHasSearched] = useState(false);

    const handleSearch = async () => {
        setIsLoading(true);
        setHasSearched(true);
        try {
            //const response = await searchRecords(searchTerm);
            const response = selectedType === 'records'
            ? await searchRecords(searchTerm, 1)
            : await searchCommunities(searchTerm);
            //const data: SearchResult[] = await response;
            setResults(response[selectedType]);
            //console.log(response['records']);
        } catch (error) {
            console.error('Error during search: ', error);
        } finally {
            setLastSearchType(selectedType);
            setIsLoading(false);
        }
    }
    const handleCheckboxChange = (type: string) => {
        setSelectedType(type);
    };
    return (
        <div className={classes.searchWidget}>
            <div className={classes.container}>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search..."
                    className={classes.input}
                />
                <div className={classes.checkboxContainer}>
                    <label className={classes.checkboxLabel} style={{'marginRight': '20px'}}>
                        <input 
                        type="checkbox"
                        checked={selectedType === 'records'}
                        onChange={() => handleCheckboxChange('records')}
                        className={classes.checkboxInput}
                        />
                        Records
                    </label>
                    <label className={classes.checkboxLabel}>
                        <input 
                        type="checkbox"
                        checked={selectedType === 'communities'}
                        onChange={() => handleCheckboxChange('communities')}
                        className={classes.checkboxInput}
                        />
                        Communities
                    </label>
                </div>
                <button onClick={handleSearch} className={classes.button}>Search</button>
            </div>
            {isLoading && <p>Loading Search Results...</p>}
            {hasSearched && !isLoading && (
                results.length > 0 ? (
                    lastSearchType === 'records' ? (
                    <div className={classes.tableContainer}>
                        <table className={classes.table}>
                            <thead>
                                <tr className={classes.headerRow}>
                                    <th className={classes.headerCell}>Title</th>
                                    <th className={classes.headerCell}>Resource Type</th>
                                    <th className={classes.headerCell}>Date Published</th>
                                </tr>
                            </thead>
                            <tbody>
                                {results.map((result, index) => (
                                    <tr key={result.id} className={classes.row} style={{ backgroundColor: index % 2 === 0 ? '#e6f7ff' : '#cceeff' }}>
                                        <td className={classes.cell}>{result.title}</td>
                                        <td className={classes.cell}>{result.resource_type}</td>
                                        <td className={classes.cell}>{result.date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    ) : (
                        <div className={classes.tableContainer}>
                        <table className={classes.table}>
                            <thead>
                                <tr className={classes.headerRow}>
                                    <th className={classes.headerCell}>Title</th>
                                    <th className={classes.headerCell}>Date Published</th>
                                </tr>
                            </thead>
                            <tbody>
                                {results.map((result, index) => (
                                    <tr key={result.id} className={classes.row} style={{ backgroundColor: index % 2 === 0 ? '#e6f7ff' : '#cceeff' }}>
                                        <td className={classes.cell}>{result.title}</td>
                                        <td className={classes.cell}>{result.date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    )
                ) : (
                    <p>No results found.</p>
                )
            )}
            
            
        </div>
    );
};

export default SearchWidget;
