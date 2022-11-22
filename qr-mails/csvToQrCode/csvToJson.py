import csv
import json
def make_json(csvFilePath, jsonFilePath):
	data = []
	with open(csvFilePath, encoding='utf-8-sig') as csvf:
		csvReader = csv.DictReader(csvf)
		for rows in csvReader:
			print(rows);
			data.append(rows)
	with open(jsonFilePath, 'w', encoding='utf-8') as jsonf:
		jsonf.write(json.dumps(data, indent=4))
# make_json('./csvdata.csv','./data/data.json')