'use strict';
const express = require('express');
const router = express.Router();

/**Controllers**/
const nosotrosController = require('../controllers/nosotrosController');
const homeController = require('../controllers/homeController');
const viajesController = require('../controllers/viajesController');
const testimoniosController = require('../controllers/testimoniosController');

//here we can put all the routes form our proyect
module.exports = function () {
  router.get('/', homeController.queriesHomepage);
  router.get('/nosotros', nosotrosController.infoNosotros);
  router.get('/viajes', viajesController.showTrips);
  router.get('/viajes/:id', viajesController.showTrip);
  router.get('/testimonios', testimoniosController.showTestimonials);
  //when form is completed
  router.post('/testimonios', testimoniosController.addTestimonials);
  return router;
};
