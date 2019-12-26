require('dotenv').config()

const express = require('express')
const app = express()
const logger = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// TODO: Add routes for app.use
PORT = process.env.PORT || 3001, 
routes = require("./routes"); 

mongoose.createConnection(process.env.MONGODB_URI || "mongodb://localhost/creeksideRace");


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
  }
  
  // Add routes, both API and view
  app.use(routes);
  
console.log(routes); 

app.use(express.static(`${__dirname}/client/build`))
app.use(logger('dev'))
app.use(bodyParser.json())



app.listen(PORT, (err) => {
	console.log(err || `Server running on port ${PORT}.`)
})