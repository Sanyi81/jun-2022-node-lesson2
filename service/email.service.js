const nodemailer = require('nodemailer');
const { NO_REPLY_EMAIL, NO_REPLY_EMAIL_PASSWORD } = require('../config/config')

const sendEmail = (receiverMail) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: NO_REPLY_EMAIL,
            pass: NO_REPLY_EMAIL_PASSWORD
        }
    });

    transporter.sendMail({
        from: 'No reply',
        to: receiverMail,
        subject: 'Letter theme',
        html: '<h2>Hello chat</h2>'
    });
}

module.exports = {
    sendEmail
}