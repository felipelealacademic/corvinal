const config = require('../config/config');//Configuracao
const bcrypt = require('bcrypt'); //Criptografia de senha
const jwt = require('jsonwebtoken'); // Gerador token
const DB = require('../config/db');//Configuracao banco

module.exports = class userControl {

  static async get() {
    return await DB.query('Select * from usuario');
  }

  static async sigIn(usuario) {
    var usuarioDB = await DB.query(`Select * from usuario WHERE usuario.email = '${usuario.email}'`);

    let passwordIsValid = bcrypt.compareSync(usuario.senha, usuarioDB.length ? usuarioDB[0].senha : ''); //valida senha criptografada

    if (passwordIsValid) {
      console.log('Usuário encontrado');
    } else {
      console.log('Usuário não encontrado');
    }
  }

  static async post(usuario) {
    let token = jwt.sign({ id: '1' }, config.secret, { expiresIn: 86400 }); // gera token
    usuario.senha = bcrypt.hashSync(usuario.senha, 8); // gera a senha criptografada

    var sql = `INSERT INTO usuario (nome, sobrenome, email, senha) VALUES ('${usuario.nome}', '${usuario.sobrenome}', '${usuario.email}','${usuario.senha}')`;

    var retorno = await DB.query(sql);

    return retorno;
  }
};