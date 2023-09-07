const Usuario = require('../model/Usuario');

class UsuarioController{
    async listarUsuarios(req, res){
        res.json(await Usuario.listar());
    }

    async autenticarUsuario(req, res) {
        try {
          const { username, password } = req.body;
          
          const usuario = await Usuario.verificarCredenciales(username, password);
    
          if(usuario) {
            res.json({ exito: true, mensaje: "Autenticación exitosa", dni: usuario.dni });
          } else {
                res.json({ exito: false, mensaje: "Credenciales incorrectas" });
          }
        } catch (error) {
          console.error("Error en la autenticación:", error);
          res.status(500).json({ exito: false, mensaje: "Error en la autenticación" });
        }
      }
    
    
}

module.exports = new UsuarioController;