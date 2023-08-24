const Registro = require()
class RegistroController{

    async guardarRegistro(req, res){
        res.json({
            success: true,
            messege : 'registro guardado'
       });
    }


    async listarRegistros(req, res){
        res.json({
            success : true,
            message : 'exito',
            result:
            [
                {
                    id: 1,
                    fechaHora: '24/12/97 , 14:00',
                    latitud: -35.51366313,
                    longitud : -23.1235123,
                    idUser : 40382057
                }
            ]
        })
    }
}
module.exports = new RegistroController;