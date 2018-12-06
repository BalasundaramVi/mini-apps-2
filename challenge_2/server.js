require('dotenv').config();
const express = require('express');

const path = require('path');

const parser = require('body-parser');
const morgan = require('morgan');

const app = express();
const { PORT } = process.env;

app.use(parser.json());
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, './client/public')));


app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}...`);
});
