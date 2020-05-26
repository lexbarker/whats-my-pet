var express = require('express');
var app = express();
var db = require('./db');
var PetsController =require('./pets/PetsController');
app.use('/pets', PetsController);
module.exports = app;
