const Response = require('../config/response');
const orderControl = require('../controls/order-control');


module.exports = application => {

    const EP = '/order';


    application.post(`${EP}/set`, async (req, res) => {
        try {
            const orders = await orderControl.set(req.body.data);
            Response.sendSucesso(res, orders);
        } catch (error) {
            Response.sendErro(res, error);
        }
    });

}