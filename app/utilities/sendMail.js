const nodemailer = require("nodemailer")
require("dotenv").config({path:"./app/config/.env"}) 

exports.sendMail = async function (mailTo, subject, mailBody) {
    try {
      const {
        NOREPLY_MAIL_ID: sender,
        NOREPLY_MAIL_ID_PASSWORD: password,
      } = process.env;
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: sender ,
          pass: password ,
        },
      });
      let mailOptions = {
        from: sender ,
        to: mailTo,
        subject,
        html: mailBody,
      };
      return await transporter.sendMail(mailOptions);
    } catch (error) {
      console.log(error)
      throw error;
    }
  };