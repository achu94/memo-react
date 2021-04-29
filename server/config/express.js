const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

function setupExpress(app){
    dotenv.config();
    
    app.use(bodyParser.json());
    
    app.use(express.static(path.resolve('build')));

    app.use(express.urlencoded({
        extended: true
    }));
    
}

module.exports = setupExpress;