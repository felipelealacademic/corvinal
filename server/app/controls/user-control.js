const config = require('../config/config');//Configuracao
const bcrypt = require('bcrypt'); //Criptografia de senha
const jwt = require('jsonwebtoken'); // Gerador token
const DB = require('../config/db');//Configuracao banco

module.exports = class userControl {

  static async get() {
    return await DB.query('Select * from usuario');
  }

  static post() {
    return 'Sucesso';
  }
};
