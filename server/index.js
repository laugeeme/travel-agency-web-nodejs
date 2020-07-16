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
app.set.set('views', path.join(__dirname, './views'));

//Load routes
app.use('/', routes());

app.listen(3000); //Port
