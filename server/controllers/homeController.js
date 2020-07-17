'use strict';
const Trip = require('../models/Trips');
const Testimony = require('../models/Testimonials');

exports.queriesHomepage = (req, res) => {
  const promises = [];

  promises.push(
    Trip.findAll({
      limit: 3,
    })
  );

  promises.push(
    Testimony.findAll({
      limit: 3, 
    })
  );

  //pass promise and execute
  const result = Promise.all(promises);

  result
    .then((result) =>
      res.render('index', {
        page: 'Próximos Viajes',
        clase: 'home',
        trips: result[0],
        testimonials: result[1],
      })
    )
    .catch((error) => console.log(error));
};
