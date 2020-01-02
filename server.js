require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = 3000

// loads routes to b
const routes = require("./routes/index.js"); 

// added based on the walkthrough https://dev.to/dwipr/example-rest-api-with-express-js-mongoose-and-babel-2483  
mongoose.Promise = global.Promise

//connecting mongoDB (via mongoose)

mongoose.connect(process.env.MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: true, useCreateIndex: true } );

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {
  console.log(`+ you connected to the DB`); 
})

//initializing middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// use the routes from index.js when you hit the endpoint '/'
app.use('/', routes);

app.get('/somethingnew', (req, res) => res.send('this is something new here'))

app.listen(port, () => console.log(`Yo shit is served up on ${port}!`))
  
// app.use(express.static(`${__dirname}/client/build`))

