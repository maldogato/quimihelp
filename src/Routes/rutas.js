const express = require('express');
const router = express.Router();


//routes
router.get('/', (req, res) => {
    res.render('d://quimihard/src/cliente/views/index.html');
});
router.get('/contacto', (req, res) => {
    res.render('d://quimihard/src/cliente/views/contacto.html', { title: 'QuimiHelp-Contacto' });
});
router.get('/clases', (req, res) => {
    res.render('d://quimihard/src/cliente/views/index.html', { title: 'QuimiHelp/Clases' });
});

module.exports = router;