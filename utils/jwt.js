//import jwt
const jwt = require("jsonwebtoken");

//import env
require("dotenv").config();

//make function generate token
function generateToken(payload) {
  return jwt.sign(payload, process.env.JWT_SECRET_KEY);
}

//make function decode token
function decodeToken(token) {
  return jwt.verify(token, process.env.JWT_SECRET_KEY);
}

module.exports = {
  generateToken,
  decodeToken,
};
