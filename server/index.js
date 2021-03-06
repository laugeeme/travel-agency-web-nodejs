'use strict';
//Service configuration file

//Import Express
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes');
const configs = require('./config');

require('dotenv').config({ path: 'variables.env' });

//Test connection to database
/* const db =require('./config/database');
 db.authenticate()
  .then(() => console.log('DB conectada'))
  .catch((error) => console.log(error)); */

//Configure Express
const app = express();

//Load PUG
app.set('view engine', 'pug');

//Add views
app.set('views', path.join(__dirname, './views'));

//Load PUBLIC (static file)
app.use(express.static('public'));

//Validate if we are in development or production
const config = configs[app.get('env')];

//Create variable for site web
app.locals.title = config.websiteName;

//Displays the current date and generate the route
app.use((req, res, next) => {
  //Create new date
  const date = new Date();
  res.locals.dateNow = date.getFullYear(); //We use res.locals to do global variables
  res.locals.route = req.path;
  return next();
});

//execute bodyParser
app.use(bodyParser.urlencoded({ extended: true }));

//Load routes
app.use('/', routes());

/**Port and host for the app */
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

app.listen(port, host, () => {
  console.log('El servidor está funcionando');
}); //Port
