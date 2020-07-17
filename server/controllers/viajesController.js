'use strict';

const Trip = require('../models/Trips');

exports.showTrips = (req, res) => {
  Trip.findAll()
    .then((trips) =>
      res.render('viajes', {
        page: 'Próximos Viajes',
        trips,
      })
    )
    .catch((error) => console.log(error));
};

exports.showTrip = async (req, res) => {
  await Trip.findByPk(req.params.id) //findByPk = findById
    .then((trip) =>
      res.render('viaje', {
        trip,
      })
    )
    .cath((error) => console.log(error));
};
