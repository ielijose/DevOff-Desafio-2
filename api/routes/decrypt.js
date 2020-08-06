const express = require('express');
const algorythm = require('../utils/algorythm');

const router = express.Router();

router.post('/', (req, res) => {
  const { vueltas, mensaje } = req.body;

  const len = mensaje.length;
  const L = vueltas;
  const N = Math.ceil(len / vueltas);

  const decryptedMessage = algorythm(mensaje, L, N);

  res.json({ mensaje: decryptedMessage });
});

module.exports = router;
