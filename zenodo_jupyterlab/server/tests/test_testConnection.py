import pytest
from unittest.mock import patch, Mock
from eossr.api.zenodo import ZenodoAPI
import os
from zenodo_jupyterlab.server.testConnection import checkZenodoConnection

@pytest.mark.asyncio
async def test_zenodo_connection_success():
    # Mock the ZenodoAPI instance and its method
    """ mock_instance = MockZenodoAPI.return_value
    mock_instance.query_user_deposits = Mock()
    mock_instance.query_user_deposits.return_value.status_code = 200 """

        # Mock the environment variable
    with patch.dict(os.environ, {'ZENODO_API_KEY': os.environ['CI_ZENODO_API_KEY']}):
            with patch.dict(os.environ, {'ZENODO_SANDBOX': "true"}):
                # Call the function to test
                status_code, zAPI = await checkZenodoConnection()

                print(f"Returned status code: {status_code}")

                # Assert the expected status code
                assert status_code == 200
                assert type(zAPI) == ZenodoAPI

@pytest.mark.asyncio
async def test_zenodo_connection_failure():
    # Mock the ZenodoAPI instance to raise an exception
    """ mock_instance = MockZenodoAPI.return_value
    mock_instance.query_user_deposits = Mock()
    mock_instance.query_user_deposits.side_effect = Exception('Failed') """

    # Mock the environment variable
    with patch.dict(os.environ, {'ZENODO_API_KEY': 'fake_false_api_key'}):
        with patch.dict(os.environ, {"ZENODO_SANDBOX": 'true'}):
            # Call the function to test
            status_code, zAPI = await checkZenodoConnection()

            # Assert the expected status code
            assert status_code == 0
            assert zAPI == None