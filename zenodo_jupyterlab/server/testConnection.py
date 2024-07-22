from eossr.api.zenodo import ZenodoAPI
import os

#ZenodoHTTPStatus

async def checkZenodoConnection():
    access_token = os.environ['ZENODO_API_KEY']
    z = ZenodoAPI(access_token=access_token)
    try:
        response = z.query_user_deposits()
        return response.status_code
    except:
        return 0