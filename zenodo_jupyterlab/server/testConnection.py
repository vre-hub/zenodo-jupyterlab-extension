from eossr.api.zenodo import ZenodoAPI
import os

#ZenodoHTTPStatus

async def checkZenodoConnection(sandbox: bool):
    access_token = os.environ['ZENODO_API_KEY']
    z = ZenodoAPI(access_token=access_token, sandbox = sandbox)
    try:
        response = z.query_user_deposits()
        return response.status_code
    except:
        return 0