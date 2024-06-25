from eossr.api.zenodo.zenodo import _search as search
from eossr.api.zenodo import ZenodoAPI
import zipfile

response = search('records', '', file_type = 'zip', communities = 'ESCAPE2020')
#print(response[0]['files'])

zenodo = ZenodoAPI()

print(zenodo.record('12345678'))


""" count = 0

for record in response:
    count+=1
    print('Title: ' + record['metadata']['title'] + ', Date Published: ' + record['metadata']['publication_date'])

print(count) """