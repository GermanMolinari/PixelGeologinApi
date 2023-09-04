const db = require('../src/db');
class Registro{
    constructor(fechaHora, latitud, longitud, idUsuario){
        this.fechaHora = fechaHora;
        this.latitud = latitud;
        this.longitud = longitud;
        this.idUsuario = idUsuario;
    }

    async guardarRegistroEnDb() {
        const query = `
          INSERT INTO registros
            (
              idUser,
              fechaHora,
              latitud,
              longitud
            )
            VALUES
            (
              '${this.idUsuario}',
              '${this.fechaHora}',
              '${this.latitud}',
              '${this.longitud}'
            );
        `;
        return await db.ejecutar(query);
      }
    static async listar(){
        const query = `select * from registros`;
        return await db.listar(query, true); 
    }

   /* static async listarPorDni(dni){
        const query = `select * from registros where idUser like '%${dni}'`;
        return await db.listar(query, true); 
    }*/
};

module.exports = Registro; 