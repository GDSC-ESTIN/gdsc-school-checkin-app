import json
import uuid

def generateId () : 
    with open('./data/data.json','r') as f :
        data = json.loads(f.read())
        for row in data : 
            row['id'] = str(uuid.uuid1())
    with open('./data/data.json', 'w', encoding='utf-8') as jsonf:
            jsonf.write(json.dumps(data, indent=4))