const nodemailer = require('nodemailer');

class Email {

    constructor(oConfig) {
        this.createTransport = nodemailer.createTransport(oConfig);
    }

    enviarCorreo(oEmail) {
        try {
            this.createTransport.sendMail(oEmail, function(error, info) {
                if (error) {
                    console.log("Error al enviar email");
                } else {
                    console.log("Correo enviado satisfactoriamente");
                }
                this.createTransport.close();
            })
        } catch (x) {
            console.log("Email.enviarcorreo -- Error-- " + x);
        }
    }
}
module.exports = Email;