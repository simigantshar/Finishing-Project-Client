require("dotenv").config();

exports.config = {
  WEBSITE_URL: process.env.WEBSITE_URL,
  TOKEN_SECRET: process.env.TOKEN_SECRET,
};
