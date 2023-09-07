const db = require('../src/db');
class Usuario{
    constructor(id, userName, password){
        this.id = id;
        this.userName = userName;
        this.password = password;
    }


    static async listar(){
        const query = `select * from usuarios`;
        return await db.listar(query, true); 
    }

    static async verificarCredenciales(username, password) {
        try {
          const query = `
            SELECT dni, username FROM usuarios
            WHERE username = '${username}' AND password = '${password}';
          `;
          const resultado = await db.ejecutar(query);

          if (resultado.exito && resultado.resultado.length > 0) {
            return true;
          }

          return false;
        } catch (error) {
          console.error("Error al verificar credenciales:", error);
          throw error;
        }
      }
    
};

module.exports = Usuario;