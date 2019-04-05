const { Pool } = require('pg');
const types = require('pg').types;

types.setTypeParser(20, function (val) {
  return parseInt(val);
});

types.setTypeParser(1700, function (val) {
  return parseFloat(val);
});

module.exports = class DataBase {

  static getClient() {
    if (!global.postgresConn) {
      global.postgresConn = new Pool({
        user: process.env.DATABASE_USER || 'postgres',
        host: process.env.DATABASE_HOST || 'localhost',
        database: process.env.DATABASE_NAME || 'corvinal',
        password: process.env.DATABASE_PASSWORD || 'postgres',
        port: 5432,
      });
    }
    return global.postgresConn;
  };

  static query(sql, values) {
    return new Promise((sucesso, falha) => {
      const client = DataBase.getClient();
      client.query(sql, values)
        .then(result => {
          return sucesso(result.rows);
        })
        .catch(e => {
          return falha("ERRO", e);
        });
    });
  }
};