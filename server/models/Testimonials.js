'use strict';
const Sequelize = require('sequelize');

//import connection to database
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
