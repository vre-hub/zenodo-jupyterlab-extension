
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

async def uploadFiles(zAPI, recordID, fileArray):
    for file in fileArray:
        fileName = file.split('/')[-1]
        try: 
            response = zAPI.upload_file_deposit(recordID, fileName, file)
        except: 
            return None
    return response

async def upload(zAPI, form_data):
    if zAPI == None:
        return None
    try:
        recordID = await createDeposit(zAPI)
        response = await createMetadata(zAPI, str(recordID), form_data)
        if response == None:
            return None
        response = await uploadFiles(zAPI, recordID, form_data.get('filePaths'))
        if response == None:
            return "File failure in checking"
        return "200", recordID
    except:
        return None, ''

