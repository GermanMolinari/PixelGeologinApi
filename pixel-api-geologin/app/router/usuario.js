var router = require('express').Router();
var UsuarioController = require('../controller/UsuarioController');

router.get('/', UsuarioController.listarUsuarios);

router.post('/login', UsuarioController.autenticarUsuario);

module.exports = router; 