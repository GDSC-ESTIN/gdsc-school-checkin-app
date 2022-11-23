const { readJsonFile } = require("./readJsonFile");
const { readCsvFile } = require("../utils/csvTojson");
const { sendAccepted3DEmail } = require("./sendEmail");
const sendEmails = async (users) => {
  try {
    let users = await readCsvFile("../data/csvdata.csv");
    console.log("===============Start sending emails===============");
    users.map((user) => {
      console.log("Email : ", user.email);
      sendRefusedEmail(user);
      if (user.domain == "MOTION DESIGNE") {
        sendAcceptedMotionEmail(user);
      } else if (user.domain == `NODE\\EXPRESS JS`) {
        sendAcceptedBackendEmail(user);
      } else if (user.domain == "3D DESIGN") {
        sendAccepted3DEmail(user);
      } else if (user.domain == "GRAPHIC DESIGN") {
      } else {
        sendAcceptedEmail(user);
      }
    });

    console.log("===============Emails Send Successfully===============");
  } catch (err) {
    console.log(err);
  }
};

module.exports = { sendEmails };
