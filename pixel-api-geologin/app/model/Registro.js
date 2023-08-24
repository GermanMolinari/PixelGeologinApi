const db = require('../src/db');
class Registro{
    constructor(fechaHora, latitud, longitud, idUsuario){
        this.fechaHora = fechaHora;
        this.latitud = latitud;
        this.longitud = longitud;
        this.idUsuario = idUsuario;
    }

    async guardarRegistroEnDb(){
        const query = `
        INSERT INTO registroubicaciones
            (
            fechaHora,
            latitud,
            longitud
            )
            VALUES
            (
            '${this.fechaHora}',
            '${this.latitud}',
            '${this.longitud}'
            );
         `;
         return await db.ejecutar(query);
    }
};

module.exports = Registro; 