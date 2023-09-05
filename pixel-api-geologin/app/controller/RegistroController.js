const Registro = require('../model/Registro');


class RegistroController{

    async guardarRegistro(req, res){
        const body = req.body;
        const registro = new Registro(body.fechaHora, body.latitud, body.longitud, body.idUser);
        const res_guardar = await registro.guardarRegistroEnDb();
        res.json(res_guardar);
        
    }

    async listarRegistros(req, res){
        res.json(await Registro.listar());
    }

    async listarRegistrosPorDni(req, res){
        let dni = req.params.dni; //obtengo el dni desde el parametro de la request
        dni = !dni ? '' : dni;
        res.json(await Registro.listar(dni));
    } 
}
module.exports = new RegistroController;