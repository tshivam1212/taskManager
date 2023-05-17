const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  dburl: process.env.DB_URL,
  port: process.env.PORT
};