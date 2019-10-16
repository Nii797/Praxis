const nodemailer = require("nodemailer")
const sendgridTransport = require("nodemailer-sendgrid-transport")

/**
 * send mail using sendgrid
 * 
 * @param param - ['to', 'subject', 'text', 'html']
 */

 class SendMail {
     constructor(params) {
         this.params = params
     }

     async exec() {
         try{
            const options = {
                auth: {
                    api_user: process.env.EMAIL_USERNAME,
                    api_key: process.env.EMAIL_PASSWORD
                },
                secure: false
            }

            const transport = await nodemailer.createTransport(
                sendgridTransport(options)
            )

            const data = {
                to: this.params.to.toString(),
                from: 'phanteraNii',
                subject: this.params.subject,
                text: this.params.text,
                html: this.params.html
            }

            setTimeout(async () => {
                return await transport.sendMail(data, (error, resp) => {
                    if(error) {
                        console.log(error)
                    }
                })
            }, 600)
         } catch(err) {
            throw err
         }
     }
 }