
const express = require('express');

//to get all the methods of router from express use the below variable istead of app
const router = express.Router();



//express will take care of mime types ,but in node we need to mention particular mime type
//express has easy routing
//in node we need to specift contenttype : "text/html" to run html
//root route
router.get('/',function(req,res) {
res.send(`

  <h1> Welcome to my website!!! </h1>

  <p> Opps !! This page is under construction :( </p>

`);
});


//inorder for app.js to get all router info we need to use module.exports
module.exports = router;
