const express = require('express');
const bodyParser = require('body-parser');
const encrypt = require('./routes/encrypt');
const decrypt = require('./routes/decrypt');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send({ message: 'Escítala API' });
});

app.use('/encrypt', encrypt);
app.use('/decrypt', decrypt);

module.exports = app;
