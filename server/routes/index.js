'use strict';
const express = require('express');
const router = express.Router();

const Trip = require('../models/Trips');

//here we can put all the routes form our proyect
module.exports = function () {
  router.get('/', (req, res) => {
    res.render('index');
  });

  router.get('/nosotros', (req, res) => {
    res.render('nosotros', {
      page: 'Sobre nosotros', //Create new variable to use in nosotros/index.pug
    });
  });

  router.get('/viajes', (req, res) => {
    Trip.findAll()
      .then((trips) =>
        res.render('viajes', {
          page: 'Próximos Viajes',
          trips
        })
      )
      .catch((error) => console.log(error));
  });

  return router;
};
