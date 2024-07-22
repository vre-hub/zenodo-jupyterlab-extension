from unittest.mock import Mock, patch, AsyncMock
from eossr.api.zenodo import search_records, search_communities, get_record
import pytest
from zenodo_jupyterlab.server.search import searchRecords, searchCommunities, recordInformation  # Replace `your_module` with the actual module name

@pytest.mark.asyncio
@patch('zenodo_jupyterlab.server.search.search_records')
async def test_searchRecords_success(mock_search_records):
    mock_search_records.return_value = [
        Mock(id='1', title='Record One', metadata={'publication_date': '2022-01-01', 'resource_type': {'title': 'Dataset'}}),
        Mock(id='2', title='Record Two', metadata={'publication_date': '2023-01-01', 'resource_type': {'title': 'Article'}})
    ]

    response = await searchRecords('', 1)
    expected_response = [
        {'id': '1', 'title': 'Record One', 'date': '2022-01-01', 'resource_type': 'Dataset'},
        {'id': '2', 'title': 'Record Two', 'date': '2023-01-01', 'resource_type': 'Article'}
    ]

    assert response == expected_response

@pytest.mark.asyncio
@patch('zenodo_jupyterlab.server.search.search_records')
async def test_searchRecords_failure(mock_search_records):
    mock_search_records.side_effect = Exception('API Error')

    response = await searchRecords('test', 1)
    assert response == ["failed"]

@pytest.mark.asyncio
@patch('zenodo_jupyterlab.server.search.search_communities')
async def test_searchCommunities_success(mock_search_communities):
    mock_search_communities.return_value = [
        {'id': '1', 'metadata': {'title': 'Community One'}, 'created': '2022-01-01T00:00:00Z'},
        {'id': '2', 'metadata': {'title': 'Community Two'}, 'created': '2023-01-01T00:00:00Z'}
    ]

    response = await searchCommunities('test', 1)
    expected_response = [
        {'id': '1', 'title': 'Community One', 'date': '2022-01-01'},
        {'id': '2', 'title': 'Community Two', 'date': '2023-01-01'}
    ]
    assert response == expected_response

@pytest.mark.asyncio
@patch('zenodo_jupyterlab.server.search.search_communities')
async def test_searchCommunities_failure(mock_search_communities):
    mock_search_communities.side_effect = Exception('API Error')

    response = await searchCommunities('test', 1)
    assert response == ["failed"]

@pytest.mark.asyncio
@patch('zenodo_jupyterlab.server.search.get_record')
async def test_recordInformation_success(mock_get_record):
    mock_get_record.return_value = AsyncMock(
        metadata={'creators': [{'name': 'Author One'}, {'name': 'Author Two'}]},
        filelist=['file1.pdf', 'file2.pdf']
    )

    response = await recordInformation('12345')
    expected_response = {
        'authors': [{'name': 'Author One'}, {'name': 'Author Two'}],
        'filelist': ['file1.pdf', 'file2.pdf']
    }
    assert response == expected_response

@pytest.mark.asyncio
@patch('zenodo_jupyterlab.server.search.get_record')
async def test_recordInformation_failure(mock_get_record):
    mock_get_record.side_effect = Exception('API Error')

    response = await recordInformation('12345')
    assert response == {'status': 'failed'}