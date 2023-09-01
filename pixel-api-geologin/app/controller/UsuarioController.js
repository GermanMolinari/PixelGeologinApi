const Usuario = require('../model/Usuario');

class UsuarioController{
    async listarUsuarios(req, res){
        res.json(await Usuario.listar());
    }
}

module.exports = new UsuarioController;