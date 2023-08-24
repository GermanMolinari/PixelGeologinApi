var router = require('express').Router();
var RegistroController = require('../controller/RegistroController');

router.get('/registros', RegistroController.listarRegistros);
router.post('/registros', RegistroController.guardarRegistro);

module.exports = router; 