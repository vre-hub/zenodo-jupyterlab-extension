from eossr.api.zenodo import search_records, search_communities, get_record

async def searchRecords(search_field, page):
    try:
        records = search_records(search=search_field, size= 25, page = page)
        response = []
        for record in records:
            response.append({'id': record.id, 'title': record.title, 'date': record.metadata['publication_date'], 'resource_type': record.metadata['resource_type']['title']})
        return response
    except:
        return ["failed"]

async def searchCommunities(search_field, page):
    try:
        communities = search_communities(search=search_field, size= 25, page=page)
        response = []
        for community in communities:
            response.append({'id': community['id'], 'title': community['metadata']['title'], 'date': community['created'].split('T')[0]})
        return response
    except:
        return ["failed"]

async def recordInformation(recordID):
    try:
        response = get_record(recordID)
        record = {'authors': response.metadata['creators'], 'filelist': response.filelist}
        return record
    except:
        return {'status': 'failed'}