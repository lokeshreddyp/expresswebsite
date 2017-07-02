const express = require('express');
const speakersjson = require('./speakersdatajson/data.json');
const reload = require('reload');
/*since all the main functionalities are in express we need
to create an instance of express*/

var app = express();

app.use(require('./routes/index.js'));
app.use(require('./routes/speakers.js'));

//loading view engine
app.set('view engine', 'ejs');

//by default express checks the views in root folder so we need to give our current folder path
app.set('views','app/views');


//this variable can be accessed in all the views
app.locals.siteTitle = 'Express Website';

//setting the default port or any port
const port = process.env.PORT || 3001;

//to be available to any part of  app

app.use(express.static('app/public'));

//to start port 3000
var server = app.listen('3000',function() {

  console.log('listening on port 3000!');
});

//to reload the browswer and add the include script file in res.send too /reload/reload.js eg in speakers.js
reload(server,app);
