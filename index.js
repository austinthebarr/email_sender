

'use strict';

const nodeMailer = require('nodemailer');
const credentials = require('./variables')


console.log()
let transporter = nodeMailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,  //true for 465 port, false for other ports
  auth: {
      user: credentials.username(),
      pass: credentials.password()
  }
});

let mailOptions = {
  from: '"Austin Barr" <organicaustin@gmail.com>', // sender address
  to: 'austinbarr@protonmail.com, nichellereyes@gmail.com', // list of receivers
  subject: 'Hello ✔', // Subject line
  text: 'Hello world?', // plain text body
  html: '<b>Hello world?</b>' // html body
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
      console.log(error);
      res.status(400).send({success: false})
  } else {
       console.log(info);
      res.status(200).send({success: true});
  }
});