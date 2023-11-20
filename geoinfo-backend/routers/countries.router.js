const express = require('express');

const countriesController = require('../controllers/countries.controller');

const countriesRouter = express.Router();

countriesRouter.get('/', countriesController.getAllCountries);

module.exports = countriesRouter;
