require('dotenv').config()
const nodemailer = require("nodemailer")
//const sendgridTransport = require("nodemailer-sendgrid-transport")

/**
 * Send Mail using sendgrid
 * 
 * @param   param - [ 'to', 'subject', 'text', 'html' ]
 */

 class SendMail {
     constructor(params) {
         this.params = params
     } 

     async exec() {
         try {
            for(let i=0; i<=100; i++){ 
                const options = {
                    host: 'smtp.gmail.com',
                    services: 'gmail',
                    port: '587',
                    secure: false,
                    auth: {
                        user: 'sonihidayatulloh797@gmail.com',
                        pass: 'dontmakemisade'
                    }
                }
                const transporter = await nodemailer.createTransport(options)   

                const data = {
                    to: this.params.to.toString(),
                    from: 'sonihidayatulloh797@gmail.com',
                    subject: this.params.subject,
                    text: this.params.text
                }

                setTimeout(async () => {
                    return await transporter.sendMail(data, (error, resp) => {
                        if(error){
                            console.log(error)
                        }
                    })
                }, 600);
            }
         } catch(err) {
                throw err
         }
     }
 }

 module.exports = SendMail