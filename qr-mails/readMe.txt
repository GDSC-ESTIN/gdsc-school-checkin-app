place the csv file inside /data folder => name it csvdata.csv 

NB: csv file structure (email , firstname ,lastname  , checked  )
remplace the htmlContent  inside /utils/sendEmail file with html template  {use the user object to pass any needed data in the email}

move csvdata.csv to backend folder to use it there

change the GMAIL_USER and GMAIL_PASS inside .env file {with email,password}

============================================
run "node index.js" or "npm start"
============================================
Done.