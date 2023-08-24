class UsuarioController{
    async getUsuarios(req, res){
        res.json({
            success : true,
            message : 'exito',
            result: [
                {
                    id: 40382057,
                    userName: 'gmolinar',
                    password: 'Canarias.2023'
                }
            ]
        })
    }
}

module.exports = new UsuarioController;