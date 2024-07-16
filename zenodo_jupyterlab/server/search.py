from eossr.api.zenodo import search_records

async def searchRecords(search_field):
    try:
        records = search_records(search=search_field, size= 50)
        response = []
        for record in records:
            response.append({'id': record.id, 'title': record.title, 'date': record.metadata['publication_date'], 'resource_type': record.metadata['resource_type']['title']})
        return response
    except:
        return ["failed"]