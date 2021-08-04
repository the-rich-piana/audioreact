//importing express
const express = require('express'); 
//creating the global server variable(making our server)
const app = express(); 
//creating the listening port-- either where its deployed, or local host 5000
const port = process.env.PORT || 5000; 

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


