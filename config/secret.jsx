require("dotenv").config();

exports.config = {
  SERVER_URL: process.env.SERVER_URL,
  TOKEN_SECRET: process.env.TOKEN_SECRET,
};
