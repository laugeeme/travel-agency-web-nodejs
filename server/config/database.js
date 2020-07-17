'use strict';
const Sequelize = require('sequelize');
require('dotenv').config({ path: 'variables.env' });



module.exports = new Sequelize(process.env.BD_NAME, process.env.BD_USER, '', {
  host: process.env.HOST,
  port: process.env.PORT,
  dialect: 'mysql',
  define: {
    timestamps: false,
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  operatorsAliases: false,
});
