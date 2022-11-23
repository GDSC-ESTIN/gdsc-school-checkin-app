const { readJsonFile } = require("./readJsonFile");
const { readCsvFile } = require("../utils/csvTojson");
const sendEmails = async (users) => {
  try {
    let users = await readCsvFile("../data/csvdata.csv");
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

module.exports = { sendEmails };
