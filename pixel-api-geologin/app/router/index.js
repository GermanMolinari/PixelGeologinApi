var router = require('express').Router();

var router_usuario = require('./usuario');
var router_registro = require('./registro');

router.use('/usuario', router_usuario);
router.use('/registro', router_registro);

module.exports = router;