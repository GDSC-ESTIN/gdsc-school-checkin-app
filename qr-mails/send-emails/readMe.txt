place the json file inside /data folder => name it users.json
place the qrcode image inside /data/images => every user have a qr code named <email>.png

remplace the htmlContent  inside /utils/sendEmail file with html template  {use the user object to pass any needed data in the email}

change the GMAIL_USER and GMAIL_PASS inside .env file {with email,password}

============================================
run "node index.js"
============================================
Done.