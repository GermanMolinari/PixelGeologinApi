var router = require('express').Router();
var UsuarioController = require('../controller/UsuarioController');

router.get('/', UsuarioController.listarUsuarios);

module.exports = router; 