//! import .env
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

module.exports = {
  GMAIL_USER: process.env.GMAIL_USER,
  GMAIL_PASS: process.env.GMAIL_PASS,
  NODE_ENV: process.env.NODE_ENV,
};
