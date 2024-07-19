import React, { useState } from 'react';
import { searchRecords, searchCommunities, recordInformation } from '../API/API_functions';
import { createUseStyles } from 'react-jss';
import clsx from 'clsx';

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
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '20px',
    },
    tableBody: {
        borderLeft: '2px solid black',
        borderRight: '2px solid black',
        borderBottom: '2px solid black',
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
        cursor: 'pointer',
        backgroundColor: '#e6f7ff',
        '&:hover': {
            backgroundColor: '#b3e0ff',
        },
    },
    alternateRow: {
        borderBottom: '1px solid #ccc',
        cursor: 'pointer',
        backgroundColor: '#cceeff',
        '&:hover': {
            backgroundColor: '#99d6ff',
        },
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
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '5px',
    },
    spacer: {
        flexGrow: '1',
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
    const [selectedRecordID, setSelectedRecordID] = useState<number | null>(null);
    const [recordInfo, setRecordInfo] = useState<any>({});
    const [recordLoading, setRecordLoading] = useState(false);
    const [resultsPage, setResultsPage] = useState(1);
    const [endPage, setEndPage] = useState(false);

    const handleSearch = async (page: number) => {
        setIsLoading(true);
        setHasSearched(true);
        try {
            //const response = await searchRecords(searchTerm);
            const response = selectedType === 'records'
            ? await searchRecords(searchTerm, page)
            : await searchCommunities(searchTerm, page);
            //const data: SearchResult[] = await response;
            setResults(response[selectedType]);
            setSelectedRecordID(null);
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

    const handleRowClick = async (recordID: number) => {
        if (selectedRecordID === recordID) {
            setSelectedRecordID(null);
            setRecordInfo({});
            setRecordLoading(false);
        } else {
            setSelectedRecordID(recordID);
            setRecordLoading(true);
            try {
                var response = await recordInformation(recordID);
                setRecordInfo(response['data']);
                //console.log(recordInfo);
            } catch (error) {
                console.error('Error fetching record information: ', error);
            } finally {
                setRecordLoading(false);
            }
        }
    }

    const handleNextPageClick = () => {
        const nextPage = resultsPage + 1;
        setResultsPage(nextPage);
        handleSearch(nextPage);
        if (results.length !> 0) {
            setEndPage(true);
        }
    }

    const handleLastPageClick = () => {
        setEndPage(false);
        const prevPage = resultsPage - 1;
        setResultsPage(prevPage);
        handleSearch(prevPage);
    }

    const handleSearchClick = () => {
        setEndPage(false);
        setResultsPage(1);
        handleSearch(1);
    }

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
                <button onClick={handleSearchClick} className={classes.button}>Search</button>
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
                            <tbody className={classes.tableBody}>
                                {results.map((result, index) => (
                                    <React.Fragment key={result.id}>
                                    <tr className={clsx(classes.row, { [classes.alternateRow]: index % 2 !== 0 })} onClick={() => handleRowClick(result.id)}>
                                        <td className={classes.cell}>{result.title}</td>
                                        <td className={classes.cell}>{result.resource_type}</td>
                                        <td className={classes.cell}>{result.date}</td>
                                    </tr>
                                    {selectedRecordID === result.id && !recordLoading &&(
                                                <tr>
                                                    <td colSpan={3} className={classes.cell}>
                                                        <div>
                                                            <p><strong>Additional information for {result.title}:</strong></p>
                                                            {recordInfo.authors && (
                                                                <div>
                                                                    <p><strong>Authors:</strong></p>
                                                                    <ul>
                                                                        {recordInfo.authors.map((author: {'name': string, 'affiliation': string}, index: number) => (
                                                                            <li key={index}>{author.name}, Affiliation: {author.affiliation}</li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            )}
                                                            {recordInfo.filelist && (
                                                                <div>
                                                                    <p><strong>Files:</strong></p>
                                                                    <ul>
                                                                        {recordInfo.filelist.map((file: string, index: number) => (
                                                                            <li key={index}>{file}</li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </td>
                                                </tr>
                                            )}
                                    </React.Fragment>
                                ))}
                            </tbody>
                        </table>
                        <br></br>
                        <div className={classes.buttonContainer}>
                            {resultsPage > 1 && (
                                <button className={classes.button} onClick={handleLastPageClick}>Last Page</button>
                            )}
                            <div className={classes.spacer}></div>
                            <button className={classes.button} onClick={handleNextPageClick}>Next Page</button>
                        </div>
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
                            <tbody className={classes.tableBody}>
                                {results.map((result, index) => (
                                    <tr key={result.id} className={classes.row} style={{ backgroundColor: index % 2 === 0 ? '#e6f7ff' : '#cceeff' }}>
                                        <td className={classes.cell}>{result.title}</td>
                                        <td className={classes.cell}>{result.date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className={classes.buttonContainer}>
                            {resultsPage > 1 && (
                                <button className={classes.button} onClick={handleLastPageClick}>Last Page</button>
                            )}
                            <div className={classes.spacer}></div>
                            <button className={classes.button} onClick={handleNextPageClick}>Next Page</button>
                        </div>
                    </div>
                    )
                ) : (
                    !endPage ? (
                        <p>No results found.</p>
                    ) : (
                        <div>
                            <p>No further results found. Please return to the previous page.</p>
                            <button className={classes.button} onClick={handleLastPageClick}>Last Page</button>
                        </div>
                    )
                )
            )}
            
            
        </div>
    );
};

export default SearchWidget;
