import pytest
from unittest.mock import patch, AsyncMock
from eossr.api.zenodo import ZenodoAPI
import os
from zenodo_jupyterlab.server.testConnection import checkZenodoConnection

@pytest.mark.asyncio
@patch('zenodo_jupyterlab.server.testConnection.ZenodoAPI')
async def test_zenodo_connection_success(MockZenodoAPI):
    # Mock the ZenodoAPI instance and its method
    mock_instance = MockZenodoAPI.return_value
    mock_instance.query_user_deposits = AsyncMock()
    mock_instance.query_user_deposits.return_value.status_code = 200

        # Mock the environment variable
    with patch.dict(os.environ, {'ZENODO_API_KEY': 'fake_correct_api_key'}):
            # Call the function to test
            status_code = await checkZenodoConnection()

            print(f"Returned status code: {status_code}")

            # Assert the expected status code
            assert status_code == 200

@pytest.mark.asyncio
@patch('zenodo_jupyterlab.server.testConnection.ZenodoAPI')
async def test_zenodo_connection_failure(MockZenodoAPI):
    # Mock the ZenodoAPI instance to raise an exception
    mock_instance = MockZenodoAPI.return_value
    mock_instance.query_user_deposits = AsyncMock()
    mock_instance.query_user_deposits.side_effect = Exception('Failed')

    # Mock the environment variable
    with patch.dict('os.environ', {'ZENODO_API_KEY': 'fake_false_api_key'}):
        # Call the function to test
        status_code = await checkZenodoConnection()

        # Assert the expected status code
        assert status_code == 0