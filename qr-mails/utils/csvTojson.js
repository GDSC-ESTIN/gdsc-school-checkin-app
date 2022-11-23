const csv = require("csvtojson");
const converter = require("json-2-csv");
const fs = require("fs");

const readCsvFile = async (csvFilePath) => {
  const jsonArray = await csv().fromFile(csvFilePath);
  return jsonArray;
};

const saveJsonToCsvFile = async (json, csvFilePath) => {
  await converter.json2csv(json, (err, csvData) => {
    fs.writeFileSync(csvFilePath, csvData);
  });
};

module.exports = { readCsvFile, saveJsonToCsvFile };
