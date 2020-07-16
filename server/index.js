'use strict';
//Service configuration file

//Import Express
const express = require('express');

//Configure Express
const app = express();
app.use('/', (req, res) => {
  res.send('Hola Mundo en NodeJS');
});

app.listen(3000); //Port
