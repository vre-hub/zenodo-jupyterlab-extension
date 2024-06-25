from eossr.api.zenodo import search_records

response = search_records(communities='ESCAPE2020')

count = 0

for record in response:
    count+=1
    print('Title: ' + record.title)

print(count)