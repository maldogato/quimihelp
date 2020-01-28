const express = require('express');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackConfig = require('../webpack.config');
const path = require('path');
var badyParser = require("body-parser");
const email = require("./servidor/email")

const app = express();
app.set('port', 4000);
app.use(badyParser.json());
app.use(badyParser.urlencoded({ extended: true }));
app.use('/static', express.static('dist'));
app.set('views', path.join(__dirname, 'views'))
app.use(webpackDevMiddleware(webpack(webpackConfig)))
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

const oEmail = new email({
    "host": "smtp.gmail.com",
    "port": "465",
    "secure": true,
    "auth": {
        "type": "login",
        "user": "sodiocarbonohdriogeno@gmail.com",
        "pass": "nachotemeroso"
    }

});


//RUTAS
app.use(require('./Routes/rutas'));
app.post('/api/contacto', (req, res) => {
    let email = {
        from: "alejandromaldo29@gmail.com",
        to: "sodiocarbonohdriogeno@gmail.com",
        subject: "Nuevo mensaje de usuario",
        html: `
            <div>
            <p>Correo: ${req.body.c}</p>
            <p>Nombre: ${req.body.n}</p>
            <p>Mensaje: ${req.body.m}</p>
            </div>
            `

    };

    oEmail.enviarCorreo(email);
    res.send("ok");

});

//Escuchando

app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
})