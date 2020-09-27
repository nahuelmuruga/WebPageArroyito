var nodemailer = require('nodemailer'); // email sender function 

exports.sendEmail = function(req, res){
    // nodemailer stuff will go here

        var transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'example@gmail.com',
                pass: 'password'
            }
        });

        var mailOptions = {
            from: 'Remitente',
            to: 'destinatario@gmail.com',
            subject: 'Motivo de Oracion',
            text: 'Mensaje'
        };

 // Enviamos el email
transporter.sendMail(mailOptions, function(error, info){
    if (error){
        console.log(error);
        res.send(500, err.message);
    } else {
        console.log("Email sent");
        res.status(200).jsonp(req.body);
    }
});

};