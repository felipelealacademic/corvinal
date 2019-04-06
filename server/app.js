
const express = require('express');
const bodyParser = require('body-parser');
const consign = require('consign');
const cors = require('cors');

const app = express();

// CORS middleware
const allowCrossDomain = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
};

app.use(cors());
app.use(allowCrossDomain);
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

consign()
  .include('app/routes')
  .into(app);

app.listen(3000, () => {
  console.log('Servidor on na porta: ', 3000);
});

module.exports = app;

