const { v4: uuid } = require("uuid");

const generateIds = async (users) => {
  for (let i = 0; i < users.length; i++) {
    users[i].checked = false;
    users[i].id = uuid();
  }
  return users;
};

module.exports = { generateIds };
