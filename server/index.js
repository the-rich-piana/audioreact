const mongoose = require('mongoose')
const url = require('./config/connection.js')

//importing express
const express = require('express'); 
//creating the global server variable(making our server)
const app = express(); 
//creating the listening port-- either where its deployed, or local host 5000
const port = process.env.PORT || 5001; 

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); 

// create a GET route
app.get('/test', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED' }); 
}); 

app.get('/about', (req, res) => {
  res.send({ express: 'about' }); 
}); 

app.get('/music', (req, res) => {
  res.send({ express: 'test' }); 
  console.log(req)
}); 

const connectionParams={
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true 
}

//connection and params are passed in on the method and sent to the db
//if the connection works we get a response else we get an error
mongoose.connect(url,connectionParams)
  .then( () => {
      console.log('Connected to database ')
      // testData()
  })
  .catch( (err) => {
      console.error(`Error connecting to the database. \n${err}`);
  })



