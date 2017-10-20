// setting up express
const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();

// setting up port
const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log(`Listening on port ${PORT}`);
});
// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'dist')));
// setting up cors
//app.use(cors());
// setting up logger
app.use(logger('dev'));
// setting up body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



// route to external API axios call
const bikeRoutes = require('./routes/bikeRoutes');
app.use('/bikes', bikeRoutes);

//throw in error 404
app.get('*', function(req, res) {
  res.status(404).send({message: 'Oops! Not found'});
});
