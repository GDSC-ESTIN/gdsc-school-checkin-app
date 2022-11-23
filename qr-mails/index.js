const { readCsvFile, saveJsonToCsvFile } = require("./utils/csvTojson.js");
const { sendAcceptedEmail, sendRefusedEmail } = require("./utils/sendEmail");
const { generateIds } = require("./utils/generateId");
const { generateQrs } = require("./utils/genrateQrs");

const sendEmails = async (users) => {
  try {
    // let users = await readCsvFile("./data/csvdata.csv");
    console.log("===============Start sending emails===============");
    users.map((user) => {
      console.log("Email : ", user.email);
      // sendAcceptedEmail(user);
      sendRefusedEmail(user);
    });

    console.log("===============Emails Send Successfully===============");
  } catch (err) {
    console.log(err);
  }
};
const main = async () => {
  try {
    const csvFilePath = "./data/csvdata.csv";
    let users = await readCsvFile(csvFilePath);
    // users = await generateIds(users);
    // generateQrs(users);
    sendEmails(users);
    await saveJsonToCsvFile(users, csvFilePath);
    //save csvdata.csv file in the backend folder to use in the checking
    await saveJsonToCsvFile(users, "../backend/csvdata.csv");
  } catch (err) {
    console.log(err);
  }
};

main();
