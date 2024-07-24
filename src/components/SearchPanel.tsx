import React, { useEffect, useState } from 'react';
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
        tableLayout: 'fixed',
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
        wordWrap: 'break-word',
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
    },
    communityTitle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f0f0', // Light gray background
        border: '1px solid #ccc',   // Gray border
        padding: '10px',            // Padding around the text
        borderRadius: '4px',        // Rounded corners
        marginBottom: '0',          // No margin below
        textAlign: 'center',        // Center align text
        width: '100%',              // Full width of container
        boxSizing: 'border-box',    // Include padding and border in element's total width and height
        position: 'relative',       // Ensure positioning context for the close button
    },
    closeButton: {
        position: 'absolute',       // Position relative to communityTitle
        right: '10px',              // Position close button on the right
        cursor: 'pointer',
        fontSize: '16px',
        backgroundColor: 'transparent',
        border: 'none',
        fontWeight: 'bold',
    },
    authorList: {
        color: '#666', // Light gray color for authors
        margin: '10px 0',
        '& li': {
            listStyleType: 'none',
            display: 'inline-block',
            marginRight: '10px',
            position: 'relative',
            cursor: 'pointer',
        },
        '& li::after': {
            content: "';'",
            marginLeft: '5px',
        },
        '& li:last-child::after': {
            content: "''",
        }
    },
    tooltip: {
        visibility: 'hidden',
        backgroundColor: '#fff',
        color: '#666',
        textAlign: 'center',
        borderRadius: '6px',
        padding: '5px',
        position: 'absolute',
        zIndex: 1,
        bottom: '100%', // Adjusted to prevent overlap with the name
        left: '50%',
        transform: 'translateX(-50%)',
        whiteSpace: 'nowrap',
        boxShadow: '0 5px 10px rgba(0,0,0,0.1)',
        opacity: 0,
        transition: 'opacity 0.3s, visibility 0.3s',
    },
    tooltipArrow: {
        position: 'absolute',
        top: '100%', // Adjusted to point downwards from the tooltip
        left: '50%',
        marginLeft: '-5px',
        borderWidth: '5px',
        borderStyle: 'solid',
        borderColor: '#fff transparent transparent transparent',
    },
    authorListItem: {
        position: 'relative',
        '&:hover $tooltip': {
            visibility: 'visible',
            opacity: 1,
        }
    },
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
    const [selectedCommunityTitle, setSelectedCommunityTitle] = useState<string | null>(null);
    const [selectedCommunityID, setSelectedCommunityID] = useState<string | null>(null);
    const [triggerSearch, setTriggerSearch] = useState(false);

    useEffect(() => {
        if (triggerSearch) {
            handleSearch(resultsPage, selectedType, {'communities': selectedCommunityID});
        }
        setTriggerSearch(false);
    }, [triggerSearch, selectedCommunityID]);

    const handleSearch = async (page: number, type: string, kwargs: Record<string, any> = {}) => {
        setIsLoading(true);
        setHasSearched(true);
        try {
            //const response = await searchRecords(searchTerm);
            const response = type === 'records'
            ? await searchRecords(searchTerm, page, kwargs)
            : await searchCommunities(searchTerm, page);
            //const data: SearchResult[] = await response;
            setResults(response[type]);
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

    const handleRecordRowClick = async (recordID: number) => {
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

    const handleCommunityRowClick = async (communityID: string, communityTitle: string) => {
        /* if (selectedCommunityID === communityID) {
            setSelectedCommunityID(null);
            setSelectedCommunityTitle(null);
        } */
        setSelectedCommunityTitle(communityTitle);
        setSelectedCommunityID(communityID);
        setSelectedType('records');
        setResultsPage(1);
        setSearchTerm("");
        //console.log(selectedCommunityID, resultsPage, selectedType);
        //handleSearch(1, 'records', {'communities': communityID});
        //console.log(selectedCommunityID, selectedCommunityTitle);
        setTriggerSearch(true);
        
    }

    const handleNextPageClick = () => {
        const nextPage = resultsPage + 1;
        setResultsPage(nextPage);
        //handleSearch(nextPage, selectedType);
        setTriggerSearch(true);
        if (results.length !> 0) {
            setEndPage(true);
        }
    }

    const handleLastPageClick = () => {
        setEndPage(false);
        const prevPage = resultsPage - 1;
        setResultsPage(prevPage);
        //handleSearch(prevPage, selectedType);
        setTriggerSearch(true);
    }

    const handleSearchClick = () => {
        setEndPage(false);
        setResultsPage(1);
        //setSelectedCommunityTitle(null);
        setTriggerSearch(true);
    }

    const handleClearCommunity = () => {
        setSelectedCommunityID(null);
        setSelectedCommunityTitle(null);
        setResultsPage(1);
        setTriggerSearch(true);
    }

    function getFileNameFromUrl(url: string): string {
        // Parse the URL using the URL constructor
        const parsedUrl = new URL(url);
        
        // Get the pathname from the URL
        let pathname = parsedUrl.pathname;
        
        // Remove the '/content' part if it exists
        if (pathname.endsWith('/content')) {
            pathname = pathname.slice(0, -'/content'.length);
        }
        
        // Extract the file name from the pathname
        const pathSegments = pathname.split('/');
        const fileName = pathSegments[pathSegments.length - 1];
        
        return fileName;
    }

    function cleanUrl(url: string): string {
        // Remove "/api" and "/content" from the URL
        return url
            .replace('/api', '') // Remove "/api"
            .replace('/content', ''); // Remove "/content"
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
                        {selectedCommunityTitle && (
                                <div className={classes.communityTitle}>
                                    <p>Showing Results from "{selectedCommunityTitle}"</p>
                                    <button className={classes.closeButton} onClick={handleClearCommunity}>✖</button>
                                </div>
                            )}
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
                                    <tr className={clsx(classes.row, { [classes.alternateRow]: index % 2 !== 0 })} onClick={() => handleRecordRowClick(result.id)}>
                                        <td className={classes.cell}>{result.title}</td>
                                        <td className={classes.cell}>{result.resource_type}</td>
                                        <td className={classes.cell}>{result.date}</td>
                                    </tr>
                                    {selectedRecordID === result.id && !recordLoading &&(
                                                <tr>
                                                    <td colSpan={3} className={classes.cell}>
                                                        <div>
                                                            <p><strong>Title: <a href={`https://zenodo.org/records/${result.id}`} target='_blank' rel='noopener noreferrer'>{result.title}</a></strong></p>
                                                            {recordInfo.authors && (
                                                                <div>
                                                                    <p><strong>Authors:</strong></p>
                                                                    <ul className={classes.authorList}>
                                                                        {recordInfo.authors.map((author: {'name': string, 'affiliation': string}, index: number) => (
                                                                            <li key={index} className={classes.authorListItem}>
                                                                                {author.name}
                                                                                {author.affiliation && (
                                                                                    <span className={classes.tooltip}>
                                                                                        {author.affiliation}
                                                                                        <span className={classes.tooltipArrow}></span>
                                                                                    </span>
                                                                                )}
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            )}
                                                            {recordInfo.filelist.length > 0 && (
                                                                <div>
                                                                    <p><strong>Files:</strong></p>
                                                                    <ul>
                                                                        {recordInfo.filelist.map((file: string, index: number) => (
                                                                            <li key={index}><a href={cleanUrl(file)} target='_blank' rel='noopener noreferrer'>{getFileNameFromUrl(file)}</a></li>
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
                                    <tr key={result.id} className={clsx(classes.row, { [classes.alternateRow]: index % 2 !== 0 })} onClick={() => handleCommunityRowClick(result.id, result.title)}>
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
                        <div>
                        {selectedCommunityTitle && (
                            <div className={classes.communityTitle}>
                                <p>Showing Results from "{selectedCommunityTitle}"</p>
                                <button className={classes.closeButton} onClick={handleClearCommunity}>✖</button>
                            </div>
                        )}
                        <p>No results found.</p>
                        </div>
                    ) : (
                        <div>
                            {selectedCommunityTitle && (
                            <div className={classes.communityTitle}>
                                <p>Showing Results from "{selectedCommunityTitle}"</p>
                                <button className={classes.closeButton} onClick={handleClearCommunity}>✖</button>
                            </div>
                            )}
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
