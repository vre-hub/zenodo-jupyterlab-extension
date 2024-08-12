
async def createDeposit(zAPI):
    response = zAPI.create_new_deposit()
    return response.json()['id']

async def createMetadata(zAPI, recordID, form_data):
    title = form_data.get('title')
    #resource_type = form_data.get('resourceType')
    #creators = form_data.get('creators')
    #doi = form_data.get('doi')
    #description = form_data.get('description')
    #file_paths = form_data.get('filePaths')
    #is_sandbox = form_data.get('isSandbox')
    json_metadata = {
        'title': title,
        #'resource_type': {'title': resource_type},
        #'creators': creators,
        #'description': description,
    }
    """ if doi != '':
        json_metadata['doi'] = doi """
    
    response = zAPI.set_deposit_metadata(recordID, json_metadata)
    return response

async def upload(zAPI, form_data):
    if zAPI == None:
        return None
    try:
        recordID = await createDeposit(zAPI)
        response = await createMetadata(zAPI, str(recordID), form_data)
        if response != None:
            return "Success"
        else:
            return "Adding the metadata returned a None response."
    except:
        return None

