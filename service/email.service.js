const nodemailer = require('nodemailer');
const EmailTemplates = require('email-templates');
const path = require('path');
const { NO_REPLY_EMAIL, NO_REPLY_EMAIL_PASSWORD } = require('../config/config');
const emailTemplates = require('../email-templates');
const ErrorAPI = require("../error/errorAPI");


const sendEmail = async (receiverMail, emailAction, locals = {}) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: NO_REPLY_EMAIL,
            pass: NO_REPLY_EMAIL_PASSWORD
        }
    });

    const templateInfo = emailTemplates[emailAction];

    if (!templateInfo) {
        throw new ErrorAPI('Wrong template', 500)
    }

    const templateRenderer = new EmailTemplates({
        views: {
            root: path.join(process.cwd(), 'email-templates')
        }
    });

    Object.assign(locals || {}, { frontendURL: 'google.com' })

    const html = await templateRenderer.render(templateInfo.templateName, locals);

    return transporter.sendMail({
        from: 'No reply',
        to: receiverMail,
        subject: templateInfo.subject,
        html
    });
}

module.exports = {
    sendEmail
}