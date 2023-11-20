const express = require('express');
const cors = require('cors');

const countriesRouter = require('./routers/countries.router');

const app = express();
const PORT = 8000;

// cors
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

// parse json
app.use(express.json());

// countries routes
app.use('/countries', countriesRouter);

// listen on port 8000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
