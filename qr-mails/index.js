const { readCsvFile, saveJsonToCsvFile } = require("./utils/csvTojson.js");
const {
  sendAcceptedEmail,
  sendRefusedEmail,
  sendAccepted3DEmail,
  sendAcceptedMotionEmail,
  sendAcceptedBackendEmail,
  sendAcceptedGraphicEmail,
} = require("./utils/sendEmail");
const { generateIds } = require("./utils/generateId");
const { generateQrs } = require("./utils/genrateQrs");

const sendEmails = async (users) => {
  try {
    console.log("===============Start sending emails===============");
    users.map((user) => {
      // sendRefusedEmail(user);
      // if (user.domain == "MOTION DESIGNE") {
      //   sendAcceptedMotionEmail(user);
      // } else if (user.domain == `NODE\\EXPRESS JS`) {
      //   sendAcceptedBackendEmail(user);
      // } else if (user.domain == "3D DESIGN") {
      //   sendAccepted3DEmail(user);
      // } else if (user.domain == "GRAPHIC DESIGN") {
      //   sendAcceptedGraphicEmail(user);
      // } else {
      //   sendAcceptedEmail(user);
      // }
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
    // // users = await generateIds(users);
    // // generateQrs(users);
    // sendEmails(users);
    await saveJsonToCsvFile(users, csvFilePath);
    //save csvdata.csv file in the backend folder to use in the checking
    await saveJsonToCsvFile(users, "../backend/csvdata.csv");
  } catch (err) {
    console.log(err);
  }
};

// main();
