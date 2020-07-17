'use strict';
const Sequelize = require('sequelize');

//import connection
const db = require('../config/database');

//define model
const Trip = db.define('trip', {
  title: {
    type: Sequelize.STRING,
  },
  price: {
    type: Sequelize.STRING,
  },
  departure_date: {
    type: Sequelize.DATE,
  },
  date_of_return: {
    type: Sequelize.DATE,
  },
  image: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
  available: {
    type: Sequelize.STRING,
  },
});

module.exports = Trip;
