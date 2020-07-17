'use strict';
const express = require('express');
const router = express.Router();

const Trip = require('../models/Trips');
const Testimony = require('../models/Testimonials');


//Controllers
const nosotrosController = require('../controllers/nosotrosController');
const homeController = require('../controllers/homeController');


//here we can put all the routes form our proyect
module.exports = function () {
  router.get('/', homeController.queriesHomepage);
  router.get('/nosotros', nosotrosController.infoNosotros);

  router.get('/viajes', (req, res) => {
    Trip.findAll()
      .then((trips) =>
        res.render('viajes', {
          page: 'Próximos Viajes',
          trips,
        })
      )
      .catch((error) => console.log(error));
  });

  router.get('/viajes/:id', async (req, res) => {
    await Trip.findByPk(req.params.id) //findByPk = findById
      .then((trip) =>
        res.render('viaje', {
          trip,
        })
      )
      .cath((error) => console.log(error));
  });

  router.get('/testimonios', (req, res) => {
    Testimony.findAll()
    .then(testimonials =>     res.render('testimonios', {
      page: 'Testimonios',
      testimonials
    }))
  });

  //when form is completed
  router.post('/testimonios', (req, res) => {
    //validate all fields are completed
    let { name, email, message } = req.body;

    let errors = [];
    if (!name) {
      errors.push({ message: 'Añade tu Nombre' });
    }
    if (!email) {
      errors.push({ message: 'Añade tu Email' });
    }
    if (!message) {
      errors.push({ message: 'Añade tu Mensaje' });
    }

    //check errors
    if (errors.length > 0) {
      //show view with errors
      res.render('testimonios', {
        errors,
        name,
        email,
        message,
      });
    } else {
      //save in database
      Testimony.create({
        name,
        email,
        message,
      })
        .then((testimony) => res.redirect('/testimonios'))
        .catch(error => console.log(error));
    }
  });

  return router;
};
