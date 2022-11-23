const { sendEmails } = require("./utils/sendEmails");
const { readCsvFile, saveJsonToCsvFile } = require("./utils/csvTojson.js");
const { generateIds } = require("./utils/generateId");
const { generateQrs } = require("./utils/genrateQrs");

const main = async () => {
  try {
    const csvFilePath = "./data/csvdata.csv";
    let users = await readCsvFile(csvFilePath);
    users = await generateIds(users);
    generateQrs(users);
    // sendEmails(users);
    await saveJsonToCsvFile(users, csvFilePath);
  } catch (err) {
    console.log(err);
  }
};

main();
