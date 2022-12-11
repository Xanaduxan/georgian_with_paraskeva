
const express = require('express');

const nodemailer= require('nodemailer');
const config = require('./serverConfig');
require('dotenv').config();
const app = express();
config(app);



app.get('/', ()=>{
  resizeBy.send('welcome')
})

app.post('/api/form', (req, res)=>{
  const data = req.body;
  const smtpTransport=nodemailer.createTransport({
    host: 'smtp.yandex.ru',
    port: 465,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  const mailOptions=({
    from: process.env.EMAIL_USER,
    to: process.env.DATA_EMAIL,
    subject:`Message from ${data.fullname}`,
    html:`
    <h3>Новая заявка</h3>
    <ul>
      <li>fullname: ${data.fullname}</li>
      <li>phone: ${data.phone}</li>
      <li>email: ${data.email}</li>
    </ul>
    `
  });
smtpTransport.sendMail(mailOptions, (error, response)=>{
if(error){
  res.send(error)
} else{
  res.send("Success")
}
})

smtpTransport.close();

})

const PORT = 3001

app.listen(PORT, ()=>{
  console.log(`Server started at ${PORT}`)
})