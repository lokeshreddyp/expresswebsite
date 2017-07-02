const express = require('express');
const speakersjson = require('./speakersdatajson/data.json');
/*since all the main functionalities are in express we need
to create an instance of express*/

var app = express();

app.use(require('./routes/index.js'));
app.use(require('./routes/speakers.js'));

//to be available to any part of  app

app.use(express.static('app/public'));

//to start port 3000
var server = app.listen('3000',function() {

  console.log('listening on port 3000!');
});
