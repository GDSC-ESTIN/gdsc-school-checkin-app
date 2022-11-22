const { sendEmail } = require("./utils/sendEmail");
const { readJsonFile } = require("./utils/readJsonFile");

const sendEmails = async () => {
  try {
    let users = await readJsonFile("data.json");
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

sendEmails();
