const mongoose = require('mongoose');
const { DB_CONNECTION } = require('./index');

const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    userCreateIndex: true,
    userFindAndModify: false
}

mongoose.connect(DB_CONNECTION, dbOptions);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', console.log.bind(console, 'Db connected!'));

module.exports = db;