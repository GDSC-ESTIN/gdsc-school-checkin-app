const { sendEmail } = require("./sendEmail");
const { readJsonFile } = require("./readJsonFile");
const sendEmails = async (users) => {
  try {
    // let users = await readCsvFile("csvdata.csv");
    console.log("===============Start sending emails===============");
    users.map((user) => {
      console.log("Email : ", user.email);
      sendEmail(user);
    });

    console.log("===============Emails Send Successfully===============");
  } catch (err) {
    console.log(err);
  }
};

module.exports = { sendEmails };
