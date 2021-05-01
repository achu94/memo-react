"use strict";
const nodemailer = require("nodemailer");
const hbs = require('nodemailer-express-handlebars');

// async..await is not allowed in global scope, must use a wrapper
async function main(senderName, senderTel, senderEmail, senderMessage) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  // create reusable transporter object using the default SMTP transport


  let transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.MAIL_USER, // generated ethereal user
      pass: process.env.MAIL_PASS, // generated ethereal password
    },
  });

  transporter.use('compile', hbs({
    viewEngine : 'express-handlebars',
    viewPath: './'
  }));

  let mailOptions = {
    from : process.env.MAIL_FROM,
    to   : process.env.MAIL_USER,
    subject: ' mh-trockenbau Neue Anfrage.',
    text: senderMessage,
    name: senderName,
    tel: senderTel,
    mail: senderEmail,
    template: 'main',
    context: {
      text: senderMessage,
      name: senderName,
      tel: senderTel,
      mail: senderEmail
    }
  }

  // send mail with defined transport object
  return await transporter.sendMail(mailOptions, (err, info) => {
    if(err) { return console.log('Error. ', err)}

    return info;
  });
}

module.exports = {
    main,
}