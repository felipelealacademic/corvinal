
module.exports = class Response {
  constructor(status, message) {
    this.status = status;
    this.message = message;
  }
  static sendErro(res, err) {
    if (err && err instanceof Response) {
      res.json(err);
    } else {
      res.json(Response.falhaSalvar(err));
    }
  }
  static sendSucesso(res, sucesso) {
    res.json(Response.sucesso(sucesso));
  }
  static retorno(status, message) {
    return new Response(status, message);
  }
  static sucesso(message) {
    return this.retorno(0, message);
  }
};
