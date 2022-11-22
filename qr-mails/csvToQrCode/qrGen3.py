import qrcode 
from PIL import Image  
import json
def generateQr(file:str):
        with open(file,encoding="UTF-8") as f:
            mails = json.load(f)
        for i in mails :
            mail= i["email"] 
            id = i["id"]    
            qr = qrcode.QRCode(version=1,error_correction=qrcode.constants.ERROR_CORRECT_L,box_size=20,border=2)
            qr.add_data(id)
            img=qr.make_image(fill_color="black",back_color="white")
            # img.save(f'db/images/{mail}.png')
            img.save(f'data/images/{mail}.png')
            print(f"{mail}.png generated")

# generateQr('data/data.json');