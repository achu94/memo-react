require('dotenv').config();

const config = {
  development: {
    PORT: 5000,
    DB_CONNECTION: process.env.DB_URI,
  },
  production: {
    PORT: 8080,
    DB_CONNECTION: process.env.DB_URI,
  },
};

module.exports = config[process.env.NODE_ENV.trim()];
