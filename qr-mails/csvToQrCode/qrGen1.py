import qrcode
import json



def generate_qrcode(file_path):

    with open(file_path,"r", encoding='latin-1') as jsonf:
        datajson = json.load(jsonf)

        for row in datajson:
            img = qrcode.make(row["id"])
            img.save(row['email']+".png")


def main():
    generate_qrcode("data.json")

    # img = qrcode.make(file_name['id'])
    # img.save('id.png')
if __name__ == "__main__" :
    main()
