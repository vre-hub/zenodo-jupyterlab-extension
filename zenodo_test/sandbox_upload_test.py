print("Please enter your access token:")
ACCESS_TOKEN = input()

#BTW I use input because it's faster for debugging and testing purposes than making an .env file, though I figure that's what we will use later

base_url = 'https://sandbox.zenodo.org/api/deposit/depositions'

import requests
import json

#Since these request methods are usually silent, I'd rather just check this now
r = requests.get(base_url, params={'access_token': ACCESS_TOKEN})
if r.status_code == '403' or r.status_code!=200:
    print("That code is incorrect.")
    quit()


print("Generating a directory entry.")
headers = {"Content-Type": "application/json"}
params = {'access_token': ACCESS_TOKEN}
r = requests.post(base_url, params=params, json={}, headers=headers)
id=r.json()['id']

#At this point, the directory is generated and empty. Those adding the metadata could be done in the same step, I wanted the update practice.

print('Please enter a title for the directory:')
title = input()
print("Please enter the author's name in the form (Last Name, First Name):")
author = input()
print("Please enter the author's institution:")
institution=input()

data = {
    'metadata': {
        'title': title,
        'creators': [
            {'name': author, 'affiliation':institution}
        ]
    }
}

url = base_url + '/' + str(id)
r = requests.put(url, data = json.dumps(data), headers=headers, params = params)

#File Upload
print("Please enter the path to the file you wish to upload:")
path = input()
print("Please enter your file name for upload:")
filename = input()
data = {'name': filename}
files = {'file':open(path+filename, 'rb')}
r = requests.post('https://sandbox.zenodo.org/api/deposit/depositions/%s/files' % id, params = params, data=data,files=files)