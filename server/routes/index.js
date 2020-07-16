'use strict';
const express = require();
const router = express.Router();

//here we can put all the routes form our proyect
module.exports = function () {
  router.get('/', (req, res) => {
    res.send('Hola Mundo en NodeJS');
  });

  router.get('/nosotros', (req, res) => {
    res.send('Nosotros');
  });

  return router;
};
