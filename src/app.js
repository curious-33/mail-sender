const http = require('http')
const nodemailer = require('nodemailer')

require('dotenv').config()

const hostname = '127.0.0.1'
const port = 8080

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.MAIL_USERNAME,
    // pass: process.env.MAIL_PASSWORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.MAIL_USERNAME.includes('media')
      ? process.env.OAUTH_REFRESH_TOKEN_2
      : process.env.OAUTH_REFRESH_TOKEN_1,
  },
})

const mailOptions = {
  from: process.env.MAIL_USERNAME,
  to: 'mmprogramming3@gmail.com',
  subject: 'Email sender',
  text: 'Hi, How r u doin?',
}

transporter.sendMail(mailOptions, function (err, data) {
  if (err) {
    console.log('Something went wrong')
  } else {
    console.log('Email sent successfully')
  }
})

http
  .createServer((req, res) => {})
  .listen(port, hostname, () => {
    console.log(`⚡️ Server running at http://${hostname}:${port}`)
  })
