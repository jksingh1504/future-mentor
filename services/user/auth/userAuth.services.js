const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { sendMail } = require("../../../utilities/sendMail.js");
const user = require("../../../model/user/user.model.js");
require("dotenv").config({ path: "./config/.env" });
module.exports = { verify, register, login };

//service for user request for signup/register and it's verification
async function verify(req) {
  try {
    const userDetails = req.body;
    const secret = process.env.SECRET_KEY;
    const token = jwt.sign({ userDetails }, secret, { expiresIn: "5m" });
    sendMail(
      userDetails.email,
      "verification mail",
      `<b>verify it's you <a style="background-color:blue;color:white;" href="http://localhost:5000/register/${token}">Click here</a></b>`
    );
    return token;
  } catch (error) {
    throw error;
  }
}
//service for user signup/register after successful verification
async function register(req) {
  try {
    //getting data from jwtAuth middleware which is stored in req.auth
    const { userDetails } = req.auth;
    const { password } = req.body;
    if (!password) throw "password field is required!";
    const hash = bcrypt.hashSync(password, 10);
    userDetails.password = hash;
    const newUser = new user(userDetails);
    await newUser.save();
    const secret = process.env.SECRET_KEY;
    const token = jwt.sign({ email: userDetails.email }, secret, {
      expiresIn: "7d",
    });
    newUser._doc.token = token;
    return newUser;
  } catch (error) {
    throw error;
  }
}
async function login(userDetails) {
  try {
    const { email, password } = userDetails;
    const registeredUser = await user.findOne({ email });
    if (!registeredUser) {
      throw "No user registered with given email please Sign-up first!";
    }
    const { password: hash } = registeredUser;
    if (bcrypt.compareSync(password, hash)) {
      const secret = process.env.SECRET_KEY;
      const token = jwt.sign({ email }, secret, {
        expiresIn: "7d",
      });
      registeredUser._doc.token = token;
      return registeredUser;
    }
  } catch (error) {
    throw error;
  }
}
