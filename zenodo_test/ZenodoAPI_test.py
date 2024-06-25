from eossr.api.zenodo import ZenodoAPI, search_records
from dotenv import load_dotenv
import os
load_dotenv()
ACCESS_TOKEN = os.getenv('ACCESS_TOKEN')

z = ZenodoAPI(ACCESS_TOKEN)

software_resources = search_records(type='Software')
print(len(software_resources))

escape2020_records = search_records(communities='ESCAPE2020')
print(len(escape2020_records))