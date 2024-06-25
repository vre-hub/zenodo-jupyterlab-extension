from eossr.api.zenodo.zenodo import _search as query

response = query('records', '', communities='ESCAPE2020')

count = 0

for record in response:
    count+=1
    print('Title: ' + record['metadata']['title'] + ', Date Published: ' + record['metadata']['publication_date'])

print(count)
