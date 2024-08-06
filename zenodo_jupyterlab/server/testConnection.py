from eossr.api.zenodo import ZenodoAPI
import os

async def checkZenodoConnection():
    try:
        access_token = os.environ['ZENODO_API_KEY']
        env_sandbox = os.environ['ZENODO_SANDBOX']
        if (env_sandbox == 'true'):
            sandbox = True
        else:
            sandbox = False
        zAPI = ZenodoAPI(access_token=access_token, sandbox = sandbox)
        response = zAPI.query_user_deposits()
        return response.status_code, zAPI
    except:
        return 0, None