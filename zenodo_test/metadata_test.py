from eossr.api.zenodo import ZenodoAPI, search_records, Record
import zipfile
from remotezip import RemoteZip

file_type = 'codemeta.json'

contains_file_type = []
all_records = search_records(communities = 'ESCAPE2020')
for record in all_records:
    for file in record.filelist:
        if file.endswith(file_type+'/content'):
            contains_file_type.append(record)
            break

returns = search_records(file_type = 'zip', communities = 'ESCAPE2020')

""" for record in returns:
    for exclusion in contains_file_type:
        if record.id == exclusion.id:
            returns.remove(record)
returns = [record for record in returns if record not in contains_file_type] """


def check_file_type_in_remote_zip(zip_url, file_type):
    try:
        # Open the remote zip file using RemoteZip
        with RemoteZip(zip_url) as zip_ref:
            # Get list of files in the zip archive
            file_list = zip_ref.namelist()

            # Check if there is any file with the desired file type
            for filename in file_list:
                if filename.lower().endswith(f'{file_type.lower()}'):
                    return True
        return False
    except Exception as e:
        print(f"Error accessing or processing the remote zip file: {e}")
        return False
    #file.lower.endswith(f'.{file_type.lower()}') and 
def check_files_in_record(record: Record):
    for file in record.filelist:
        if file.lower().endswith(f'.zip/content') and check_file_type_in_remote_zip(file, file_type):
            zipped_records.append(record)

zipped_records = []

for record in returns:
    check_files_in_record(record)

print(str(len(zipped_records)) + f" records contain {file_type} files in zipped directories.")
print(str(len(contains_file_type)) + f" records contain {file_type} files in their base directory.")