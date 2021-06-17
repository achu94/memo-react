require('dotenv').config();

const config = {
    development: {
        PORT: 5000,
        DB_CONNECTION: process.env.MONGODB_URI,
        SALT_ROUNDS: process.env.SALT_ROUNDS,
        SECRET: process.env.SECRET,
        COOKIE_NAME: process.env.COOKIE_NAME,
    },
    production: {
        PORT: 8080,
        DB_CONNECTION: process.env.MONGODB_URI,
        SALT_ROUNDS: process.env.SALT_ROUNDS,
        SECRET: process.env.SECRET,
        COOKIE_NAME: process.env.COOKIE_NAME,
    }
};

module.exports = config[process.env.NODE_ENV.trim()]