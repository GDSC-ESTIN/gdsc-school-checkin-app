import json

import qrcode


def createQRCode():

  with open('data.json', encoding='latin-1') as f:
    data=json.load(f)
    for line in data:
        img = qrcode.make(line['id'])
        img.save(line['firstname']+".jpg")



createQRCode()