const app = require('./app');

const PORT = 8999;

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}...`);
});
