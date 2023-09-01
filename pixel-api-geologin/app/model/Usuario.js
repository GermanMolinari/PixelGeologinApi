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
};

module.exports = Usuario;