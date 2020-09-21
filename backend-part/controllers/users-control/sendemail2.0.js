var nodemailer = require('nodemailer');

const sendEmail = async (req, res, next) => {
    const email = req.body.email

    try {

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: 'andorid.imap.mail.yahoo.com',
            port: 993,
            secure: false, // true for 465, false for other ports
            auth: {
                user: 'testsmartbox6@gmail.com', // generated ethereal user
                pass: 'smarttest112', // generated ethereal password
            },
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: 'testsmartbox6@gmail.com', // sender address
            to: email, // list of receivers
            subject: "SAo ✔", // Subject line
            text: "HAUAHAH?", // plain text body
            html: "<b>Hello world?</b>", // html body
        });

        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    } catch (err) {
        return res.json(err)
    }
    return res.json('Succes')
}

module.exports = sendEmail