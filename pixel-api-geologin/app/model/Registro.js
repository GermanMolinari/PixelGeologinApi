const db = require('../src/db');
class Registro{
    constructor(fechaHora, latitud, longitud, idUser, zona){
        this.fechaHora = fechaHora;
        this.latitud = latitud;
        this.longitud = longitud;
        this.idUser = idUser;
        this.zona = zona;
    }

    async guardarRegistroEnDb() {
      console.log('Entrando en guardarRegistroEnDb');
        const query = `
          INSERT INTO registros
            (
              idUser,
              fechaHora,
              latitud,
              longitud,
              zona
            )
            VALUES
            (
              '${this.idUser}',
              '${this.fechaHora}',
              '${this.latitud}',
              '${this.longitud}',
              '${this.zona}'
            );
        `;
        return await db.ejecutar(query);
      }


    static async listar(){
      console.log('Entrando en listar registros');
        const query = `select * from registros`;
        return await db.listar(query, true); 
    }

    static async listarPorDni(dni){
        const query = `select * from registros where idUser like '%${dni}'`;
        return await db.listar(query, true); 
    }
};

module.exports = Registro; 