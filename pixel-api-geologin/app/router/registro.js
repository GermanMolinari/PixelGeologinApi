var router = require('express').Router();
var RegistroController = require('../controller/RegistroController');

router.get('/:dni', RegistroController.listarRegistrosPorDni);
router.get('/', RegistroController.listarRegistros);
router.post('/', RegistroController.guardarRegistro);

module.exports = router; 