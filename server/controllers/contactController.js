const mailService = require('../services/mailService');

const { Router } = require('express');
const path = require('path');

const router = Router();

router.post('/mail', (req, res) => {
    const {name, tel, email, message} = req.body;
    
    mailService.main(name, tel, email, message)
        .then( (err) => {
            res.send( {response: 'succes'})
        })
        .catch(err => {
            console.log(err);
            res.send( {response: error})
        });
});

module.exports = router;