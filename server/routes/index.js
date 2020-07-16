'use strict';
const express = require('express');
const router = express.Router();

//here we can put all the routes form our proyect
module.exports = function () {
  router.get('/', (req, res) => {
    res.render('index');
  });

  router.get('/nosotros', (req, res) => {
    res.render('nosotros');
  });

  return router;
};
