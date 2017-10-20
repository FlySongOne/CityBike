const express = require('express');
const bikesController = require('../controllers/bikesController');

const bikeRoutes = express.Router();

bikeRoutes.get('/',bikesController.index);

module.exports = bikeRoutes;
