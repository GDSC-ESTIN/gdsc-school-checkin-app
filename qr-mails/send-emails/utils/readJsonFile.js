const fs = require("fs").promises;
const path = require("path");
const readJsonFile = async (jsonFileName) => {
  let users = [];

  const data = await fs.readFile(
    path.join(__dirname, "..", "data", jsonFileName),
    "utf-8"
  );
  users = JSON.parse(data);

  return users;
};

module.exports = { readJsonFile };
