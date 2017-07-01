const express = require('express');
const speakersjson = require('./speakersdatajson/data.json');
/*since all the main functionalities are in express we need
to create an instance of express*/

var app = express();
//express will take care of mime types ,but in node we need to mention particular mime type
//express has easy routing
//in node we need to specift contenttype : "text/html" to run html


//root route
app.get('/',function(req,res) {



res.send(`

  <h1> Welcome to my website!!! </h1>

  <p> Opps !! This page is under construction :( </p>

`);
});

//speakers route gets data from data.json file
app.get('/speakers', function(req,res) {
  var allspeakers = '';
  //looping through speakers array and getting name and summary of all speakers using foreach
  speakersjson.speakers.forEach(function(items) {
    //console.log(speakersjson.speakers[0].name);
  allspeakers += `

  <h2> ${items.name} </h2>
  <p> ${items.summary} </p>

  `;
  });

  //sending the response to route
  res.send(`

  <h1>hey dude here are some speakers getting from json file!!</h1>
  ${allspeakers}

    `);
});



//route to get specific speaker by id
app.get('/speakers/:speakerid' , function(req,res) {

var specid = speakersjson.speakers[req.params.speakerid];

res.send( `
<h1>Hey this is your requested speaker details!!</h1>

<h2>Name is ${specid.name} </h2>
<h3>Tittle is ${specid.title} </h3>
<p> ${specid.summary} </p>

`);

});

//to start port 3000
var server = app.listen('3000',function() {

  console.log('listening on port 3000!');
});
