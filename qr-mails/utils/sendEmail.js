const nodemailer = require("nodemailer");
const { GMAIL_USER, GMAIL_PASS } = require("../config");
const path = require("path");
const emailTemplates = require("./emailTemplates");

let mailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_PASS,
  },
});

const sendAcceptedEmail = (user) => {
  let emailContent = {
    from: GMAIL_USER,
    to: user.email,
    subject: "[GDSC-SCHOOL workshop]",
    html: emailTemplates.acceptedTemplate(user),
    attachments: [
      {
        filename: `${user.email}.png`,
        path: path.join(__dirname, "..", "data", "images", `${user.email}.png`),
      },
    ],
  };
  mailTransporter.sendMail(emailContent, (err) => {
    if (err) {
      console.log("Sending Email error:", err);
    } else {
      console.log(`successfully send email to ${userEmail}`);
    }
  });
};
const sendAcceptedMotionEmail = (user) => {
  let emailContent = {
    from: GMAIL_USER,
    to: user.email,
    subject: "[GDSC-SCHOOL workshop]",
    html: emailTemplates.acceptedMotionTemplate(user),
    attachments: [
      {
        filename: `${user.email}.png`,
        path: path.join(__dirname, "..", "data", "images", `${user.email}.png`),
      },
    ],
  };
  mailTransporter.sendMail(emailContent, (err) => {
    if (err) {
      console.log("Sending Email error:", err);
    } else {
      console.log(`successfully send email to ${userEmail}`);
    }
  });
};

const sendAcceptedBackendEmail = (user) => {
  let emailContent = {
    from: GMAIL_USER,
    to: user.email,
    subject: "[GDSC-SCHOOL workshop]",
    html: emailTemplates.acceptedBackendTemplate(user),
    attachments: [
      {
        filename: `${user.email}.png`,
        path: path.join(__dirname, "..", "data", "images", `${user.email}.png`),
      },
    ],
  };
  mailTransporter.sendMail(emailContent, (err) => {
    if (err) {
      console.log("Sending Email error:", err);
    } else {
      console.log(`successfully send email to ${userEmail}`);
    }
  });
};

const sendRefusedEmail = (user) => {
  let emailContent = {
    from: GMAIL_USER,
    to: user.email,
    subject: "[GDSC-SCHOOL workshop]",
    html: emailTemplates.refusedTemplate(user),
  };
  mailTransporter.sendMail(emailContent, (err) => {
    if (err) {
      console.log("Sending Email error:", err);
    } else {
      console.log(`successfully send email to ${userEmail}`);
    }
  });
};

module.exports = {
  sendAcceptedEmail,
  sendRefusedEmail,
  sendAcceptedMotionEmail,
  sendAcceptedBackendEmail,
};
