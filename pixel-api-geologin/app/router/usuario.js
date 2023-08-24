var router = require('express').Router();
var UsuarioController = require('../controller/UsuarioController');

router.get('/usuarios', UsuarioController.getUsuarios);

module.exports = router; 