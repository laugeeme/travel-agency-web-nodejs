'use strict';
const express = require('express');
const router = express.Router();

//here we can put all the routes form our proyect
module.exports = function () {
  router.get('/', (req, res) => {
    res.render('index');
  });

  router.get('/nosotros', (req, res) => {
    res.render('nosotros', {
      page: 'Sobre nosotros' //Create new variable to use in nosotros/index.pug
    });
  });

  router.get('/viajes', (req, res) => {
    res.render('viajes', {
      page: 'Próximos viajes' //Create new variable to use in nosotros/index.pug
    });
  });

  return router;
};
