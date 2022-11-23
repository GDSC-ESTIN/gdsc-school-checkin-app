//* put the template here and
//* the user is json {name,email,...}
let acceptedTemplate = (user) => {
  return `<!DOCTYPE html
  PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
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
<div style="
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
    ">
  <table class="logo" style="margin-left: auto; margin-right: auto">
    <tr>
      <td>
        <center>
          <img class="img_logo" src="https://i.ibb.co/s5tBYbQ/logo.png" style="
                margin-top: 30px;
                border: 0;
                width: 60%;
                margin-bottom: 10px;
                min-width: 250px;
              " />
        </center>
      </td>
    </tr>
  </table>

  <center>
    <table class="card" style="
          width: 90%;
          max-height: 90%;
          text-align: center;
          font-size: large;
          font-weight: 300;
          border-radius: 10px;
          background-color: white;
          padding: 15px;
          margin-bottom: 30px;
        ">

      <tr>
        <td>
          <p style="
                margin-bottom: 15px;
                font-family: sans-serif;
                font-size: 20px;
                font-weight: bold;
              ">
            Dear ${user.firstname}
          </p>
        </td>
      </tr>
      <tr>
        <td>
          <p style="
                margin-bottom: 15px;
                font-family: sans-serif;
                font-size: 15px;
              ">
            We are so delighted to announce you the good news, <b>congrats</b> you've
            been <b>accepted</b> to the <b> ${user.domain} workshop </b> at <b><b><span
                  style="color:#4285f4">G</span><span style="color:#db4437">D</span><span
                  style="color:#f4b400">S</span><span style="color:#0f9d58">C</span></b>-SCHOOL.</b>
          </p>
        </td>
      </tr>
      <tr>
        <td>
          <p style="
                margin-bottom: 15px;
                font-family: sans-serif;
                font-size: 15px;
              ">
            Make sure to <b>stay
              active on our social media</b> so you can get updated on the agenda
            Get your pen and notebook ready for the fruitful content you'll be
            getting.
          </p>
        </td>
      </tr>
      <tr>
        <td>
          <p style="
                margin-bottom: 15px;
                font-family: sans-serif;
                font-size: 15px;
              ">
            We can't wait to see you there.
          </p>
        </td>
      </tr>

    </table>
    <div class="footer">
      <span style="
            text-decoration: underline;
            color: rgba(0, 0, 0, 0.76);
            font-family: 'Nunito', sans-serif;
          ">@GDSC-ESTIN</span>
      <div class="socials" style="margin: 30px">
        <a href="https://facebook.com/gdscestin" target="_blank" style="color: #84aef2"><img
            src="https://i.ibb.co/2MxJwzY/facebook.png" alt="facebook" style="margin-right: 15px; width: 35px" /></a>
        <a href="https://www.instagram.com/gdsc_estin/" target="_blank" style="color: #84aef2"><img
            src="https://i.ibb.co/XJrzw50/insta.png" alt="intagram" style="margin-right: 15px; width: 35px" /></a>
        <a href="https://www.linkedin.com/company/gdsc-estin/" target="_blank" style="color: #84aef2"><img
            src="https://i.ibb.co/j4c5qts/in.png" alt="linkedin" style="margin-right: 15px; width: 35px" /></a>
      </div>
      <p style="
            margin-bottom: 50px;
            font-family: sans-serif;
            font-size: 15px;
            padding-bottom: 20px;
          ">
        Best regards !
      </p>
    </div>
  </center>
</div>

</html>`;
};

let accepted3DTemplate = (user) => {
  return `<!DOCTYPE html
  PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
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
<div style="
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
  ">
  <table class="logo" style="margin-left: auto; margin-right: auto">
      <tr>
          <td>
              <center>
                  <img class="img_logo" src="https://i.ibb.co/s5tBYbQ/logo.png" style="
              margin-top: 30px;
              border: 0;
              width: 60%;
              margin-bottom: 10px;
              min-width: 250px;
            " />
              </center>
          </td>
      </tr>
  </table>

  <center>
      <table class="card" style="
        width: 90%;
        max-height: 90%;
        text-align: center;
        font-size: large;
        font-weight: 300;
        border-radius: 10px;
        background-color: white;
        padding: 15px;
        margin-bottom: 30px;
      ">

          <tr>
              <td>
                  <p style="
              margin-bottom: 15px;
              font-family: sans-serif;
              font-size: 20px;
              font-weight: bold;
            ">
                      Dear ${user.firstname}
                  </p>
              </td>
          </tr>
          <tr>
              <td>
                  <p style="
              margin-bottom: 15px;
              font-family: sans-serif;
              font-size: 15px;
            ">
                      We are so delighted to announce you the good news, <b>congrats</b> you've
                      been <b>accepted</b> to <b>the 3D design workshop at <b><span
                                  style="color:#4285f4">G</span><span style="color:#db4437">D</span><span
                                  style="color:#f4b400">S</span><span style="color:#0f9d58">C</span></b>-SCHOOL.</b>
                  </p>
              </td>
          </tr>
          <tr>
              <td>
                  <p style="
              margin-bottom: 15px;
              font-family: sans-serif;
              font-size: 15px;
            ">
                      Make sure to <b>stay
                          active on our social media</b> so you can get updated on the agenda
                      Get your pen and notebook ready for the fruitful content you'll be
                      getting.
                  </p>
              </td>
          </tr>
          <tr>
              <td>
                  <p style="
              margin-bottom: 15px;
              font-family: sans-serif;
              font-size: 15px;
            ">
                      We can't wait to see you there.
                  </p>
              </td>
          </tr>
          <tr>
              <td>
                  <div style="
        margin-bottom: 15px;
        font-family: sans-serif;
        font-size: 15px;">
                      <h4><b style="color:red">Note:</b></h4>
                      It is necessary to
                      install <a href="https://www.blender.org/download/"><b>Blender</b></a> on your computer since it
                      will be a
                      crucial tool that you'll be using to learn
                  </div>
              </td>
          </tr>
      </table>
      <div class="footer">
          <span style="
          text-decoration: underline;
          color: rgba(0, 0, 0, 0.76);
          font-family: 'Nunito', sans-serif;
        ">@GDSC-ESTIN</span>
          <div class="socials" style="margin: 30px">
              <a href="https://facebook.com/gdscestin" target="_blank" style="color: #84aef2"><img
                      src="https://i.ibb.co/2MxJwzY/facebook.png" alt="facebook"
                      style="margin-right: 15px; width: 35px" /></a>
              <a href="https://www.instagram.com/gdsc_estin/" target="_blank" style="color: #84aef2"><img
                      src="https://i.ibb.co/XJrzw50/insta.png" alt="intagram"
                      style="margin-right: 15px; width: 35px" /></a>
              <a href="https://www.linkedin.com/company/gdsc-estin/" target="_blank" style="color: #84aef2"><img
                      src="https://i.ibb.co/j4c5qts/in.png" alt="linkedin"
                      style="margin-right: 15px; width: 35px" /></a>
          </div>
          <p style="
          margin-bottom: 50px;
          font-family: sans-serif;
          font-size: 15px;
          padding-bottom: 20px;
        ">
              Best regards !
          </p>
      </div>
  </center>
</div>

</html>`;
};

let acceptedBackendTemplate = (user) => {
  return `<!DOCTYPE html
  PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
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
<div style="
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
    ">
  <table class="logo" style="margin-left: auto; margin-right: auto">
    <tr>
      <td>
        <center>
          <img class="img_logo" src="https://i.ibb.co/s5tBYbQ/logo.png" style="
                margin-top: 30px;
                border: 0;
                width: 60%;
                margin-bottom: 10px;
                min-width: 250px;
              " />
        </center>
      </td>
    </tr>
  </table>

  <center>
    <table class="card" style="
          width: 90%;
          max-height: 90%;
          text-align: center;
          font-size: large;
          font-weight: 300;
          border-radius: 10px;
          background-color: white;
          padding: 15px;
          margin-bottom: 30px;
        ">

      <td>
        <p style="
                margin-bottom: 15px;
                font-family: sans-serif;
                font-size: 20px;
                font-weight: bold;
              ">
          Dear ${user.firstname}
        </p>
      </td>
      </tr>
      <tr>
        <td>
          <p style="
                margin-bottom: 15px;
                font-family: sans-serif;
                font-size: 15px;
              ">
            We are so delighted to announce you the good news, <b>congrats</b> you've
            been <b>accepted</b> to <b>the Back-end web Development workshop at <b><span
                  style="color:#4285f4">G</span><span style="color:#db4437">D</span><span
                  style="color:#f4b400">S</span><span style="color:#0f9d58">C</span></b>-SCHOOL..
          </p>
        </td>
      </tr>
      <tr>
        <td>
          <p style="
                margin-bottom: 15px;
                font-family: sans-serif;
                font-size: 15px;
              ">
            Make sure
            to <b>stay active on our social media</b> so you can get updated on the
            agenda Get your pen and notebook ready for the fruitful content
            you'll be getting.
          </p>
        </td>
      </tr>
      <tr>
        <td>
          <p style="
                margin-bottom: 15px;
                font-family: sans-serif;
                font-size: 15px;
              ">
            We can't wait to see you there.
          </p>
        </td>
      </tr>
      <tr>
        <td>
          <div style="
          margin-bottom: 15px;
          font-family: sans-serif;
          font-size: 15px;">
            <h4><b style="color:red">Note:</b></h4>
            It is necessary to have both <b>MongoDB</b> and <b>Node.js</b> on your computer.<br />If
            not, make sure to click on the two links below to download them<br /><br />
            <a href="https://nodejs.org/en/download/">Node-js</a><br />
            <a href="https://www.mongodb.com/try/download/compass">Mongodb-Compass</a>
          </div>
        </td>
      </tr>
    </table>
    <div class="footer">
      <span style="
            text-decoration: underline;
            color: rgba(0, 0, 0, 0.76);
            font-family: 'Nunito', sans-serif;
          ">@GDSC-ESTIN</span>
      <div class="socials" style="margin: 30px">
        <a href="https://facebook.com/gdscestin" target="_blank" style="color: #84aef2"><img
            src="https://i.ibb.co/2MxJwzY/facebook.png" alt="facebook" style="margin-right: 15px; width: 35px" /></a>
        <a href="https://www.instagram.com/gdsc_estin/" target="_blank" style="color: #84aef2"><img
            src="https://i.ibb.co/XJrzw50/insta.png" alt="intagram" style="margin-right: 15px; width: 35px" /></a>
        <a href="https://www.linkedin.com/company/gdsc-estin/" target="_blank" style="color: #84aef2"><img
            src="https://i.ibb.co/j4c5qts/in.png" alt="linkedin" style="margin-right: 15px; width: 35px" /></a>
      </div>
      <p style="
            margin-bottom: 50px;
            font-family: sans-serif;
            font-size: 15px;
            padding-bottom: 20px;
          ">
        Best regards !
      </p>
    </div>
  </center>
</div>

</html>`;
};
let acceptedMotionTemplate = (user) => {
  return `<!DOCTYPE html
  PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
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
<div style="
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
    ">
  <table class="logo" style="margin-left: auto; margin-right: auto">
    <tr>
      <td>
        <center>
          <img class="img_logo" src="https://i.ibb.co/s5tBYbQ/logo.png" style="
                margin-top: 30px;
                border: 0;
                width: 60%;
                margin-bottom: 10px;
                min-width: 250px;
              " />
        </center>
      </td>
    </tr>
  </table>

  <center>
    <table class="card" style="
          width: 90%;
          max-height: 90%;
          text-align: center;
          font-size: large;
          font-weight: 300;
          border-radius: 10px;
          background-color: white;
          padding: 15px;
          margin-bottom: 30px;
        ">

      <tr>
        <td>
          <p style="
                margin-bottom: 15px;
                font-family: sans-serif;
                font-size: 20px;
                font-weight: bold;
              ">
            Dear ${user.firstname}
          </p>
        </td>
      </tr>
      <tr>
        <td>
          <p style="
                margin-bottom: 15px;
                font-family: sans-serif;
                font-size: 15px;
              ">
            We are so delighted to announce you the good news, <b>congrats</b> you've
            been <b>accepted</b> to <b>the motion design workshop at <b><span style="color:#4285f4">G</span><span
                  style="color:#db4437">D</span><span style="color:#f4b400">S</span><span
                  style="color:#0f9d58">C</span></b>-SCHOOL.</b>
          </p>
        </td>
      </tr>
      <tr>
        <td>
          <p style="
                margin-bottom: 15px;
                font-family: sans-serif;
                font-size: 15px;
              ">
            Make sure to <b>stay
              active on our social media</b> so you can get updated on the agenda
            Get your pen and notebook ready for the fruitful content you'll be
            getting.
          </p>
        </td>
      </tr>
      <tr>
        <td>
          <p style="
                margin-bottom: 15px;
                font-family: sans-serif;
                font-size: 15px;
              ">
            We can't wait to see you there.
          </p>
        </td>
      </tr>
      <tr>
        <td>
          <div style="
          margin-bottom: 15px;
          font-family: sans-serif;
          font-size: 15px;">
            <h4><b style="color:red">Note:</b></h4>
            It is necessary to
            install <b>Adobe After effects</b> on your computer since it will be a
            crucial tool that you'll be using to learn
          </div>
        </td>
      </tr>
    </table>
    <div class="footer">
      <span style="
            text-decoration: underline;
            color: rgba(0, 0, 0, 0.76);
            font-family: 'Nunito', sans-serif;
          ">@GDSC-ESTIN</span>
      <div class="socials" style="margin: 30px">
        <a href="https://facebook.com/gdscestin" target="_blank" style="color: #84aef2"><img
            src="https://i.ibb.co/2MxJwzY/facebook.png" alt="facebook" style="margin-right: 15px; width: 35px" /></a>
        <a href="https://www.instagram.com/gdsc_estin/" target="_blank" style="color: #84aef2"><img
            src="https://i.ibb.co/XJrzw50/insta.png" alt="intagram" style="margin-right: 15px; width: 35px" /></a>
        <a href="https://www.linkedin.com/company/gdsc-estin/" target="_blank" style="color: #84aef2"><img
            src="https://i.ibb.co/j4c5qts/in.png" alt="linkedin" style="margin-right: 15px; width: 35px" /></a>
      </div>
      <p style="
            margin-bottom: 50px;
            font-family: sans-serif;
            font-size: 15px;
            padding-bottom: 20px;
          ">
        Best regards !
      </p>
    </div>
  </center>
</div>

</html>`;
};
let acceptedGraphicTemplate = (user) => {
  return `<!DOCTYPE html
  PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
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
<div style="
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
  ">
  <table class="logo" style="margin-left: auto; margin-right: auto">
      <tr>
          <td>
              <center>
                  <img class="img_logo" src="https://i.ibb.co/s5tBYbQ/logo.png" style="
              margin-top: 30px;
              border: 0;
              width: 60%;
              margin-bottom: 10px;
              min-width: 250px;
            " />
              </center>
          </td>
      </tr>
  </table>

  <center>
      <table class="card" style="
        width: 90%;
        max-height: 90%;
        text-align: center;
        font-size: large;
        font-weight: 300;
        border-radius: 10px;
        background-color: white;
        padding: 15px;
        margin-bottom: 30px;
      ">

          <tr>
              <td>
                  <p style="
              margin-bottom: 15px;
              font-family: sans-serif;
              font-size: 20px;
              font-weight: bold;
            ">
                      Dear ${user.firstname}
                  </p>
              </td>
          </tr>
          <tr>
              <td>
                  <p style="
              margin-bottom: 15px;
              font-family: sans-serif;
              font-size: 15px;
            ">
                      We are so delighted to announce you the good news, <b>congrats</b> you've
                      been <b>accepted</b> to <b>the Graphic Design workshop at <b><span
                                  style="color:#4285f4">G</span><span style="color:#db4437">D</span><span
                                  style="color:#f4b400">S</span><span style="color:#0f9d58">C</span></b>-SCHOOL.</b>
                  </p>
              </td>
          </tr>
          <tr>
              <td>
                  <p style="
              margin-bottom: 15px;
              font-family: sans-serif;
              font-size: 15px;
            ">
                      Make sure to <b>stay
                          active on our social media</b> so you can get updated on the agenda
                      Get your pen and notebook ready for the fruitful content you'll be
                      getting.
                  </p>
              </td>
          </tr>
          <tr>
              <td>
                  <p style="
              margin-bottom: 15px;
              font-family: sans-serif;
              font-size: 15px;
            ">
                      We can't wait to see you there.
                  </p>
              </td>
          </tr>
          <tr>
              <td>
                  <div style="
        margin-bottom: 15px;
        font-family: sans-serif;
        font-size: 15px;">
                      <h4><b style="color:red">Note:</b></h4>
                      It is necessary to
                      install <b>Adobe illustrator</b> on your computer since it
                      will be a
                      crucial tool that you'll be using to learn
                  </div>
              </td>
          </tr>
      </table>
      <div class="footer">
          <span style="
          text-decoration: underline;
          color: rgba(0, 0, 0, 0.76);
          font-family: 'Nunito', sans-serif;
        ">@GDSC-ESTIN</span>
          <div class="socials" style="margin: 30px">
              <a href="https://facebook.com/gdscestin" target="_blank" style="color: #84aef2"><img
                      src="https://i.ibb.co/2MxJwzY/facebook.png" alt="facebook"
                      style="margin-right: 15px; width: 35px" /></a>
              <a href="https://www.instagram.com/gdsc_estin/" target="_blank" style="color: #84aef2"><img
                      src="https://i.ibb.co/XJrzw50/insta.png" alt="intagram"
                      style="margin-right: 15px; width: 35px" /></a>
              <a href="https://www.linkedin.com/company/gdsc-estin/" target="_blank" style="color: #84aef2"><img
                      src="https://i.ibb.co/j4c5qts/in.png" alt="linkedin"
                      style="margin-right: 15px; width: 35px" /></a>
          </div>
          <p style="
          margin-bottom: 50px;
          font-family: sans-serif;
          font-size: 15px;
          padding-bottom: 20px;
        ">
              Best regards !
          </p>
      </div>
  </center>
</div>

</html>`;
};
let refusedTemplate = (user) => {
  return `<!DOCTYPE html
  PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
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
<div style="
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
    ">
  <table class="logo" style="margin-left: auto; margin-right: auto">
    <tr>
      <td>
        <center>
          <img class="img_logo" src="https://i.ibb.co/s5tBYbQ/logo.png" style="
                margin-top: 30px;
                border: 0;
                width: 60%;
                margin-bottom: 10px;
                min-width: 250px;
              " />
        </center>
      </td>
    </tr>
  </table>

  <center>
    <table class="card" style="
          width: 90%;
          max-height: 90%;
          text-align: center;
          font-size: large;
          font-weight: 300;
          border-radius: 10px;
          background-color: white;
          padding: 15px;
          margin-bottom: 30px;
        ">

      <tr>
        <td>
          <p style="
                margin-bottom: 15px;
                font-family: sans-serif;
                font-size: 20px;
                font-weight: bold;
              ">
            Dear ${user.firstname}
          </p>
        </td>
      </tr>
      <tr>
        <td>
          <p style="
                margin-bottom: 15px;
                font-family: sans-serif;
                font-size: 15px;
              ">
            We appreciate you for investing your time on applying for our
            first <b>set of workshops</b>, but eventually we are afraid to announce
            you that have <b>not been accepted </b> to the <b><b><span style="color:#4285f4">G</span><span
                  style="color:#db4437">D</span><span style="color:#f4b400">S</span><span
                  style="color:#0f9d58">C</span></b> SCHOOL</b> due to the
            unfortunate number of limited seats.
          </p>
        </td>
      </tr>
      <tr>
        <td>
          <p style="
                margin-bottom: 15px;
                font-family: sans-serif;
                font-size: 15px;
              ">
            Still, we would encourage you
            to stay tuned on social media for the next events that will be
            coming your way so you won't miss up on any chance.
          </p>
        </td>
      </tr>
      <tr>
        <td>
          <p style="
                margin-bottom: 15px;
                font-family: sans-serif;
                font-size: 15px;
              ">
            We thank you
            again for your time and effort
          </p>
        </td>
      </tr>

    </table>
    <div class="footer">
      <span style="
            text-decoration: underline;
            color: rgba(0, 0, 0, 0.76);
            font-family: 'Nunito', sans-serif;
          ">@GDSC-ESTIN</span>
      <div class="socials" style="margin: 30px">
        <a href="https://facebook.com/gdscestin" target="_blank" style="color: #84aef2"><img
            src="https://i.ibb.co/2MxJwzY/facebook.png" alt="facebook" style="margin-right: 15px; width: 35px" /></a>
        <a href="https://www.instagram.com/gdsc_estin/" target="_blank" style="color: #84aef2"><img
            src="https://i.ibb.co/XJrzw50/insta.png" alt="intagram" style="margin-right: 15px; width: 35px" /></a>
        <a href="https://www.linkedin.com/company/gdsc-estin/" target="_blank" style="color: #84aef2"><img
            src="https://i.ibb.co/j4c5qts/in.png" alt="linkedin" style="margin-right: 15px; width: 35px" /></a>
      </div>
      <p style="
            margin-bottom: 50px;
            font-family: sans-serif;
            font-size: 15px;
            padding-bottom: 20px;
          ">
        Best regards !
      </p>
    </div>
  </center>
</div>

</html>`;
};

module.exports = {
  acceptedTemplate,
  acceptedBackendTemplate,
  acceptedMotionTemplate,
  refusedTemplate,
  accepted3DTemplate,
  acceptedGraphicTemplate,
};
