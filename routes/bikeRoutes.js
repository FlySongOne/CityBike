// import express
const express = require('express');
// import bike contoller module
const bikesController = require('../controllers/bikesController');
// invoke bike router
const bikeRoutes = express.Router();
// get request to call bike controller and index method
bikeRoutes.get('/',bikesController.index);

// exporting the router model
module.exports = bikeRoutes;
