require('dotenv').config();
const express = require('express');

const path = require('path');
const axios = require('axios');

const parser = require('body-parser');
const morgan = require('morgan');

const app = express();
const { PORT } = process.env;

app.use(parser.json());
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, './client/public')));

// CRYPTO DATA REQUESTS
app.post('/cryptoData', (req, res) => {
  const {
    index, currency, start, end,
  } = req.body;
  const query = `index=[${index}]&currency=${currency}&start=${start}&end=${end}`;
  axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?${query}`)
    .then((data) => {
      res.send(data.data);
    });
});

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}...`);
});
