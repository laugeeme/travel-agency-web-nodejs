'use strict';
//Service configuration file

//Import Express
const express = require('express');
const path = require('path');
const routes = require('./routes');

//Configure Express
const app = express();

//Load PUG
app.set('view engine', 'pug');

//Add views
app.set('views', path.join(__dirname, './views'));

//Load PUBLIC (static file)
app.use(express.static('public'));

//Displays the current date
app.use((req, res, next) => {
  //Create new date
  const date = new Date();
  res.locals.dateNow = date.getFullYear(); //res.locals as a global variables
  return next();
});


//Load routes
app.use('/', routes());

app.listen(3000); //Port
