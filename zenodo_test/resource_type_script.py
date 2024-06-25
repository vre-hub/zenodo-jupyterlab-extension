from eossr.api.zenodo import search_records

response = search_records('records', '', communities='ESCAPE2020', type='Software')

print(response[0].title)

count = 0

for record in response:
    count+=1
    print('Title: ' + record.title)

print(count)