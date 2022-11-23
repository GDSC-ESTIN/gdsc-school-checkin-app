// Uint8ClampedArray example
const QRCode = require("qrcode");

const generateQrs = async (users) => {
  for (let i = 0; i < users.length; i++) {
    let id = users[i].id;
    QRCode.toFile(`data/images/${users[i].email}.png`, id, {
      scale: 10,
      margin: 2,
      // color: {
      //   dark: "#DD3D1B",
      //   light: "#ffffff",
      // },
    });
  }
};

module.exports = { generateQrs };
