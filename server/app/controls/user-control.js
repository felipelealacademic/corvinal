const config = require('../config/config');//Configuracao
const bcrypt = require('bcrypt'); //Criptografia de senha
const jwt = require('jsonwebtoken'); // Gerador token
const DB = require('../config/db');//Configuracao banco
const Response = require('../config/response');

module.exports = class userControl {

  static async get() {
    return await DB.query('Select * from user_system');
  }

  static async sigIn(usuario) {
    var usuarioDB = await DB.query(`Select * from user_system WHERE user_system.email = '${usuario.email}'`);

    let passwordIsValid = bcrypt.compareSync(usuario.password, usuarioDB.length ? usuarioDB[0].password : ''); //valida senha criptografada

    if (passwordIsValid) {
      Response.retorno(0, usuarioDB);
    } else {
      Response.retorno(0, 'Usuário não encontrado');
    }
  }

  static async post(usuario) {

    var usuarioDB = await DB.query(`Select * from user_system WHERE user_system.email = '${usuario.email}'`);
    if (!usuarioDB.length) {

      // let token = jwt.sign({ id: '1' }, config.secret, { expiresIn: 86400 }); // gera token
      usuario.password = bcrypt.hashSync(usuario.password, 8); // gera a senha criptografada

      var sql = `INSERT INTO user_system (name, lastname, email, password, cod_acad) VALUES ('${usuario.name}', '${usuario.lastname}', '${usuario.email}','${usuario.password}','${usuario.cod_acad}') RETURNING id`;

      var retorno = await DB.query(sql);

      var idUser = retorno[0].id;

      usuario.unepes_selec.forEach(async (unep) => {
        try {
          var sqlUnep = `INSERT INTO unep (name, cod, fk_id_user, fk_id_coordenacao) VALUES ('${unep.name}', ${unep.cod}, ${idUser}, ${1})`;
          retorno = await DB.query(sqlUnep);
        } catch (error) {
          retorno = Response.falhaSalvar();
        }
      });
      return retorno;
    } else {
      return Response.retorno(0, "Email já cadastrado");
    }
  }
};