'use strict';

const Testimony = require('../models/Testimonials');

exports.showTestimonials = (req, res) => {
  Testimony.findAll().then((testimonials) =>
    res.render('testimonios', {
      page: 'Testimonios',
      testimonials,
    })
  );
};

exports.addTestimonials = (req, res) => {
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
      .catch((error) => console.log(error));
  }
};
