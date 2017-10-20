const axios = require("axios");
//const CircularJSON = require('circular-json');
//create object for recipe controller
const bikesController = {};

//controller to find all bikes from citibike api
bikesController.index = (req, res) => {

  axios("https://citibikenyc.com/stations/json")
    .then((results) => {
      res.json({
        message: 'ok',
        data:    results.data,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({
        message: '400',
        err
      });
});
};


module.exports = bikesController;
