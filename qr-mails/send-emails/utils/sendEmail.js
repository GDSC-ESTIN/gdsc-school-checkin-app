const nodemailer = require("nodemailer");
const { GMAIL_USER, GMAIL_PASS } = require("../config");
const path = require("path");

let mailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_PASS,
  },
});

const sendEmail = (user) => {
  let emailContent = {
    from: GMAIL_USER,
    to: user.email,
    subject: "Signup succeeded",
    html: htmlContent(user),
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

//* put the template here and
//* the user is json {name,email,...}
let htmlContent = (user) => {
  // return `<p style= "color : red">Welcome in our family ${user.firstname}</p>`;
  return `<style type="text/css">
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;700&display=swap');
</style>
<div style='margin:0;background-color:#F0F0F0;background-image:url("https://i.ibb.co/Bf3sPq5/background.png");background-repeat:repeat-y;background-size:cover;width:100%;max-height:fit-content;'>
<center>
  <table class="logo">
    <tr>
      <td>
        <center>
          <img class="img_logo" src="https://i.ibb.co/s5tBYbQ/logo.png" style="margin-top:20px;border:0;width:60%;margin-bottom:30px;min-width:250px;"/>
        </center>
      </td>
    </tr>
  </table>
</center>
<center>
  <table class="card" style="width:90%;max-height:90%;text-align:center;font-size:large;font-weight:300;border-radius:10px;background-color:white;padding:30px 50px 30px 50px;margin-bottom:30px;">
    <tr>
      <td>
        <h2 style="font-family:'Nunito', sans-serif;margin-bottom:50px;font-family:'sans-serif';font-style:normal;font-weight:700;">Welcome</h2>
      </td>
    </tr>
    <tr>
      <td>
        <p style="margin-bottom:35px;font-family:sans-serif;font-size:15px;">Sed eleifend pharetra finibus. Sed quis dolor tellus. In quis lacinia enim. Mauris eget sagittis ex, sit amet vulputate metus. </p>
      </td>
    </tr>
    <tr>
      <td>
        <p style="margin-bottom:50px;font-family:sans-serif;font-size:15px;">Sed eleifend pharetra finibus. Sed quis dolor tellus. In quis lacinia enim. Mauris eget sagittis ex, sit amet vulputate metus. </p>
      </td>
    </tr>
    <tr>
      <td><a href="#" style="color:#84AEF2;"><img class="btn" src="https://i.ibb.co/znKyc6K/btn.png" alt="fill_form" style="min-width:142px;width:160px;"></a></td>
    </tr>
    <tr>
      <td>
        <div class="questions_span" style="font-weight:700;font-family:sans-serif;padding-top:50px;text-align:start;">
          <span><h3>Have any questions ?</h3></span>
          <p style="margin-bottom:50px;font-family:sans-serif;font-size:15px;font-weight:300;margin-bottom:-20px;">Sed eleifend pharetra finibus. Sed quis dolor tellus. In quis lacinia enim. Mauris eget sagittis ex, <a href="#" style="color:#84AEF2;"> sit amet vulputate metus.</a> </p>
        </div>
      </td>
    </tr>
  </table>
  <div class="footer">
    <span style="text-decoration:underline;color:rgba(0, 0, 0, 0.76);font-family:'Nunito', sans-serif;">Lorem ipsum dolor sit amet.</span>
    <div class="socials" style="margin:30px;">
      <a href="https://facebook.com/gdscestin" target="_blank" style="color:#84AEF2;"><img src="https://i.ibb.co/Q8rMfq9/facebook.png" alt="facebook" style="margin-right:15px;"></a>
      <a href="https://www.instagram.com/gdsc_estin/" target="_blank" style="color:#84AEF2;"><img src="https://i.ibb.co/5cpj8pK/insta.png" alt="intagram" style="margin-right:15px;"></a>
      <a href="https://www.linkedin.com/company/gdsc-estin/" target="_blank" style="color:#84AEF2;"><img src="https://i.ibb.co/jbqqVGf/linkedin.png" alt="linkedin" style="margin-right:15px;"></a>
    </div>
    <p style="margin-bottom:50px;font-family:sans-serif;font-size:15px;padding-bottom:10px;">
      Sed eleifend pharetra finibus. Sed quis dolor tellus. In quis lacinia enim. 
    </p>
  </div>
</center>
</div>`;
};
module.exports = { sendEmail };
