const express = require('express');
const algorythm = require('../utils/algorythm');

const router = express.Router();

router.post('/', (req, res) => {
  const { vueltas, mensaje } = req.body;

  const len = mensaje.length;
  const L = vueltas;
  const N = Math.ceil(len / vueltas);

  const encryptedMessage = algorythm(mensaje, N, L);

  res.json({ mensaje: encryptedMessage });
});

module.exports = router;
