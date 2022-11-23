//* put the template here and
//* the user is json {name,email,...}
let acceptedTemplate = (user) => {
  return ``;
};

let acceptedBackendTemplate = (user) => {
  return ``;
};
let acceptedMotionTemplate = (user) => {
  return ``;
};
let refusedTemplate = (user) => {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Apparel HTML Email Template</title>
      <style type="text/css">
        @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Nunito:wght@300;700&display=swap");
        /*.btn a{
            text-align: none;
            text-decoration: none;
            color: rgb(255, 255, 255);
            width: 100%;
        }
        */
      </style>
    </head>
    <div
      style="
        min-height: 500px;
        opacity: 1;
        margin: 0;
        background-color: #f0f0f0;
        width: 100%;
        max-height: fit-content;
        box-sizing: content-box;
        background-image: url('https://i.ibb.co/DK1XVxf/img1.png'),
          url('https://i.ibb.co/r0MFRHb/img2.png');
        background-repeat: repeat-y, repeat-y;
        background-size: contain, contain;
        background-position: top left, top right;
      "
    >
      <table class="logo" style="margin-left: auto; margin-right: auto">
        <tr>
          <td>
            <center>
              <img
                class="img_logo"
                src="https://i.ibb.co/s5tBYbQ/logo.png"
                style="
                  margin-top: 30px;
                  border: 0;
                  width: 60%;
                  margin-bottom: 10px;
                  min-width: 250px;
                "
              />
            </center>
          </td>
        </tr>
      </table>
  
      <center>
        <table
          class="card"
          style="
            width: 90%;
            max-height: 90%;
            text-align: center;
            font-size: large;
            font-weight: 300;
            border-radius: 10px;
            background-color: white;
            padding: 15px;
            margin-bottom: 30px;
          "
        >
          <tr>
            <td>
              <h2
                style="
                  margin-top: 15px;
                  font-family: sans-serif;
                  margin-bottom: 35px;
                  font-style: normal;
                  font-weight: 700;
                  font-size: 25px;
                "
              >
                Welcome
              </h2>
            </td>
          </tr>
          <tr>
            <td>
              <p
                style="
                  margin-bottom: 35px;
                  font-family: sans-serif;
                  font-size: 15px;
                  font-size: 15px;
                "
              >
                Dear ${user.firstname}
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p
                style="
                  margin-bottom: 50px;
                  font-family: sans-serif;
                  font-size: 15px;
                "
              >
                We appreciate you for investing your time on applying for our
                first set of workshops, but eventually we are afraid to announce
                you that have not been accepted to the GDSC SCHOOL due to the
                unfortunate number of limited seats. Still, we would encourage you
                to stay tuned on social media for the next events that will be
                coming your way so you won't miss up on any chance. We thank you
                again for your time and effort
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="questions_span"
                style="
                  font-weight: 600;
                  font-family: sans-serif;
                  padding-top: 25px;
                  padding-bottom: 10px;
                  text-align: start;
                "
              ></div>
            </td>
          </tr>
        </table>
        <div class="footer">
          <!-- <span
            style="
              text-decoration: underline;
              color: rgba(0, 0, 0, 0.76);
              font-family: 'Nunito', sans-serif;
            "
            >Lorem ipsum dolor sit amet.</span
          > -->
          <div class="socials" style="margin: 30px">
            <a
              href="https://facebook.com/gdscestin"
              target="_blank"
              style="color: #84aef2"
              ><img
                src="https://i.ibb.co/2MxJwzY/facebook.png"
                alt="facebook"
                style="margin-right: 15px; width: 35px"
            /></a>
            <a
              href="https://www.instagram.com/gdsc_estin/"
              target="_blank"
              style="color: #84aef2"
              ><img
                src="https://i.ibb.co/XJrzw50/insta.png"
                alt="intagram"
                style="margin-right: 15px; width: 35px"
            /></a>
            <a
              href="https://www.linkedin.com/company/gdsc-estin/"
              target="_blank"
              style="color: #84aef2"
              ><img
                src="https://i.ibb.co/j4c5qts/in.png"
                alt="linkedin"
                style="margin-right: 15px; width: 35px"
            /></a>
          </div>
          <p
            style="
              margin-bottom: 50px;
              font-family: sans-serif;
              font-size: 15px;
              padding-bottom: 20px;
            "
          >
            GDSC FOR ONCE GDSC FOREVER
          </p>
        </div>
      </center>
    </div>
  </html>
  `;
};

module.exports = {
  acceptedTemplate,
  acceptedBackendTemplate,
  acceptedMotionTemplate,
  refusedTemplate,
};