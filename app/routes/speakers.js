const express = require('express');
const speakersjson = require('../speakersdatajson/data.json');
//to get all the methods of router from express use the below variable istead of app
const router = express.Router();


//speakers route gets data from data.json file
router.get('/speakers', function(req,res) {
  // var allspeakers = '';
  // //looping through speakers array and getting name and summary of all speakers using foreach
  // speakersjson.speakers.forEach(function(items) {
  //   //console.log(speakersjson.speakers[0].name);
  // allspeakers += `
  //
  // <h2> ${items.name} </h2>
  //
  // <link rel="stylesheet" type="text/css" href="css/styling.css">
  //
  // <img src= "/images/speakers/${items.shortname}_tn.jpg" alt="speakers" style="height:300px;">
  //
  // <p> ${items.summary} </p>
  //
  // `;
  var artworkempty = [];
var speakersarray = speakersjson.speakers;
  speakersjson.speakers.forEach(function(items) {
    artworkempty = artworkempty.concat(items.artwork);
  });

  //it will go to views folder and run index.ejs file
    res.render('speakers' , {
      pageTitle: 'Speakers',
      artwork: artworkempty,
      speakers: speakersarray,
      pageID: 'speakers'
    });


  // //sending the response to route
  // res.send(`
  //
  // <h1>hey dude here are some speakers getting from json file!!</h1>
  // ${allspeakers}
  //
  // <script src="/reload/reload.js"></script>
  //   `);
});



//route to get specific speaker by id
router.get('/speakers/:speakerid' , function(req,res) {

var specid = speakersjson.speakers[req.params.speakerid];

res.send( `
<h1>Hey this is your requested speaker details!!</h1>

<h2>Name is ${specid.name} </h2>

<link rel="stylesheet" type="text/css" href="css/styling.css">

<img src= "../images/speakers/${specid.shortname}_tn.jpg" alt="speakers id not found" style="height:300px;">



<h3>Tittle is ${specid.title} </h3>
<p> ${specid.summary} </p>


<script src="/reload/reload.js"></script>
`);

});

//inorder for app.js to get all router info we need to use module.exports
module.exports = router;
