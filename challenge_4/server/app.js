const express = require('express');
const path = require('path');

const favicon = require('serve-favicon');
const parser = require('body-parser');
const morgan = require('morgan');

const app = express();

app.use(parser.json());
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../client/public')));
app.use(favicon(path.join(__dirname, '../client/assets/icons/Minesweeper_Icon.png')));

module.exports = app;
