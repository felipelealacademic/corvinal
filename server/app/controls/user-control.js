const config = require('../config/config');//Configuracao
const bcrypt = require('bcrypt'); //Criptografia de senha
const jwt = require('jsonwebtoken'); // Gerador token
const DB = require('../config/db');//Configuracao banco

module.exports = class userControl {

  static async get() {
    var senha = bcrypt.hashSync('123', 8);// gera a senha criptografada
    let token = jwt.sign({ id: '1' }, config.secret, { expiresIn: 86400 }); // gera token
    let passwordIsValid = bcrypt.compareSync('123', bcrypt.hashSync('1234', 8)); //valida senha criptografada
    console.log(passwordIsValid);
    console.log(token);
    return await DB.query('Select * from usuario');
  }

  static post() {
    return 'Sucesso';
  }
};
