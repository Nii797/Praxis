require('dotenv').config();

const nodemailer = require('nodemailer');

// tahap 1 
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'sonihidayatulloh797@gmail.com',
        pass: 'dontmakemisade'
    }
});


// tahap 2
let mailOptions = {
    from: 'sonihidayatulloh797@gmail.com',
    to: 'tosikin2@gmail.com',
    subject: 'BABI LU !!',
    text: 'BABI LU !!'
}


// tahap 3
transporter.sendMail(mailOptions, function(err, data) {
    if(err) {
        console.log('Error ', err);
    } else {
        console.log('Email Terkirim !!');
    }
})
