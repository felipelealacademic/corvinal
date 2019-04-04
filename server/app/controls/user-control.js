const config = require('../config/config');//Configuracao
const bcrypt = require('bcrypt'); //Criptografia de senha
const jwt = require('jsonwebtoken'); // Gerador token
const DB = require('../config/db');//Configuracao banco

module.exports = class userControl {

  static get() {
    return 'Sucesso';
  }

  static post() {
    return 'Sucesso';
  }
};
