
const Response = require('../config/response');
const userControl = require('../controls/user-control');

module.exports = application => {

  const EP = '/user';

  application.get(`${EP}/get`, async (req, res) => {
    try {
      const user = await userControl.get();
      Response.sendSucesso(res, user);
    } catch (error) {
      Response.sendErro(res, error);
    }
  });

  application.post(`${EP}/post`, async (req, res) => {
    try {
      // console.log('AQUI', req.body);
      const user = userControl.post(req.body);
      Response.sendSucesso(res, user);
    } catch (error) {
      Response.sendErro(res, error);
    }
  });
}
