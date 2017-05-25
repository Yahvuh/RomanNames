'use strict';

//dependencies
const path = require('path');
const morgan = require('morgan');
const express = require('express');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', '.pug');

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, 'public')));

const index = require('./routes/index');

app.use('/', index);

module.exports = app;
