
const express = require('express');

const speakersjson = require('../speakersdatajson/data.json');

//to get all the methods of router from express use the below variable istead of app
const router = express.Router();



//express will take care of mime types ,but in node we need to mention particular mime type
//express has easy routing
//in node we need to specift contenttype : "text/html" to run html
//root route
router.get('/feedback',function(req,res) {



//it will go to views folder and run index.ejs file
  res.render('feedback' , {
    pageTitle: 'Feedback',
    pageID: 'feedback'
  });


});


//inorder for app.js to get all router info we need to use module.exports
module.exports = router;
