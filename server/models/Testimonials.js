'use strict';
const Sequelize = require('sequelize');

//import conexion
const db = require('../config/database');

const Testimony = db.define('testimonials', {
  name: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  message: {
    type: Sequelize.STRING,
  },
});

module.exports = Testimony;