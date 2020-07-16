'use strict';
//Service configuration file

//Import Express
const express = require('express');
const routes = require('./routes');

//Configure Express
const app = express();

//Load routes
app.use('/', routes());

app.listen(3000); //Port
