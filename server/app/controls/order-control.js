const bcrypt = require('bcrypt'); //Criptografia de senha
const DB = require('../config/db');//Configuracao banco
const Response = require('../config/response');

module.exports = class orderControl {

    static async get() {
        return await DB.query('Select * from order_system');
    }

    static async getById(id) {
        return await DB.query('Select * from order_system where id =' + Number(this.id));
    }

    static async set(orders) {
        let sql;

        for (let i = 0; i < orders.length; i++) {
            const order = orders[i];
            if (i == 0)
                sql = 'insert into order_system (idproduct, amount, coordenacao) values  (' + order.idProduct + ',' + order.amount + ',' + order.coordenacao + ');';
            else
                sql = sql + 'insert into order_system (idproduct, amount, coordenacao) values  (' + order.idProduct + ',' + order.amount + ',' + order.coordenacao + ');';
        }

        var result = await DB.query(sql);

        return result;

    }
};