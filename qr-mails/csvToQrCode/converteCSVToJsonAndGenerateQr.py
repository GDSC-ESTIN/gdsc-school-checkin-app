from csvToJson import make_json
from qrGen3 import generateQr
from idGen import generateId

# csv to json
# 
def converteCSVToJsonAndGenerateQr  () :
    make_json('./csvdata.csv','./data/data.json');
    generateId();
    generateQr('data/data.json');


converteCSVToJsonAndGenerateQr();

