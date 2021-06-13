require('dotenv').config();

const config = {
    development: {
        PORT: 5000,
        DB_CONNECTION: process.env.MONGODB_URI
        // SALT_ROUNDS: 10,
        // SECRET: 'navuhodonosor',
        // COOKIE_NAME: 'USER_SESSION',
    },
    production: {
        PORT: 8080,
        DB_CONNECTION: process.env.MONGODB_URI
        // SALT_ROUNDS: 10,
        // SECRET: 'navuhodonosor',
        // COOKIE_NAME: 'USER_SESSION',
    }
};

module.exports = config[process.env.NODE_ENV.trim()]