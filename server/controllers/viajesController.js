'use strict';

const Trip = require('../models/Trips');

exports.showTrips = async (req, res) => {
  const trips = await Trip.findAll();
  res.render('viajes', {
    page: 'Próximos Viajes',
    trips,
  });
};

exports.showTrip = async (req, res) => {
  const trip = await Trip.findByPk(req.params.id); //findByPk = findById
  res.render('viaje', {
    trip,
  });
};
