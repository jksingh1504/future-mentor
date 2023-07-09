const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { sendMail } = require("../../../utilities/sendMail.js");
const user = require("../../../model/user/user.model.js");
require("dotenv").config({ path: "./config/.env" });
const speakeasy = require("speakeasy");
module.exports = { verify, register, login };
const otpgenerator = speakeasy.generateSecret({ length: 6 });
const otpList = {};

//service for user request for signup/register and it's verification
async function verify(req) {
  try {
    const userDetails = req.body;
    const isUserRegistered = await user.findOne({
      $or: [{ email: userDetails.email }, { contact: userDetails.contact }],
    });
    if (isUserRegistered) {
      throw "Account already registered with given details!";
    }
    const secret = process.env.SECRET_KEY;
    const token = jwt.sign({ userDetails }, secret);
    const otp = speakeasy.totp({
      secret: otpgenerator.base32,
      encoding: "base32",
    });
    sendMail(
      userDetails.email,
      "Verification mail for Healthify app",
      `<p style="margin-bottom:24px">Hi ${userDetails.userName},</p>
      <p>We got your sign-up request on our healthify website. please enter this otp on our website to confirm your identity. </p>
      <p>Your otp is : ${otp}</p>
      <p style="margin-bottom:24px">Please do not share this otp with anyone</p>
      <p>Regards,</p>
      <b>Healthify Team.</b>
      `
    );
    otpList[userDetails.contact] = otp;
    setTimeout(() => {
      delete otpList[userDetails.contact];
    }, 123000);
    return { token, expiry: new Date().getTime() + 123000 };
  } catch (error) {
    throw error;
  }
}
//service for user signup/register after successful verification
async function register(req) {
  try {
    //getting data from jwtAuth middleware which is stored in req.auth
    const { userDetails } = req.auth;
    const { password, otp } = req.body;
    if (otpList[userDetails.contact] != otp) throw "Incorrect or Expired otp!";
    if (!password) throw "password field is required!";
    const hash = bcrypt.hashSync(password, 10);
    userDetails.password = hash;
    const newUser = new user(userDetails);
    await newUser.save();
    const secret = process.env.SECRET_KEY;
    const token = jwt.sign({ email: userDetails.email }, secret, {
      expiresIn: "7d",
    });
    return { newUser, token };
  } catch (error) {
    throw error;
  }
}
async function login(userDetails) {
  try {
    const { email_contact, password } = userDetails;
    const registeredUser = await user.findOne({
      $or: [
        { contact: isNaN(email_contact) ? -1 : email_contact },
        { email: email_contact },
      ],
    });
    if (!registeredUser) {
      throw "No user registered with given email or contact number please Sign-up first!";
    }
    const { password: hash } = registeredUser;
    if (bcrypt.compareSync(password, hash)) {
      const secret = process.env.SECRET_KEY;
      const token = jwt.sign({ email_contact }, secret, {
        expiresIn: "7d",
      });
      return { registeredUser, token };
    }
    throw "Incorrect username or password !";
  } catch (error) {
    throw error;
  }
}
