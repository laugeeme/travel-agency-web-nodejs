'use strict';
const Trip = require('../models/Trips');
const Testimony = require('../models/Testimonials');

exports.queriesHomepage = async (req, res) => {
  const promises = [];

  const trips = await Trip.findAll({ limit: 3 });

  const testimonials = await Testimony.findAll({ limit: 3 });

  res.render('index', {
    page: 'Próximos Viajes',
    clase: 'home',
    trips,
    testimonials,
  });
};
