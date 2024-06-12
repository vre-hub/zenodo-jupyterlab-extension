print("Please enter your access token:")
ACCESS_TOKEN = input()
COMMUNITY_ID = 'escape2020'

import requests;

morePages = True
page = 1
ALL_RECORDS = []
while (morePages):
    base_url = 'https://zenodo.org/'
    response = requests.get(url=base_url+'api/records', params = {'access_token': ACCESS_TOKEN, 'communities':COMMUNITY_ID, 'page':page})
    count=0
    for record in response.json()['hits']['hits']:
        ALL_RECORDS.append(record)
        #print(record['metadata']['title'])
        count+=1
    if count == 0:
        morePages=False
        break
    page += 1
print('All ' + str(len(ALL_RECORDS)) + ' records are now collected: \n')
for record in ALL_RECORDS:
    print('Title: ' + record['metadata']['title'] + ', Date Published: ' + record['metadata']['publication_date'])