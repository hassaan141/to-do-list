const express  = require('express'); //web app framwork for node.js for web apps and API's
const mongoose = require('mongoose'); //Object data modeling library for MongoDB and node.js 
const cors = require('cors'); 
const TodoModel = require('./Models/Todo');

const app = express(); //creates instance for a new express application 

app.use(express.json()); //puts a parse data in req.body
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/test') //This is where the data for the application will be stored and managed.


app.post('/add', (req, res) =>{ //api endpoint that accepts post requests
  const task = req.body.task;
  TodoModel.create({
    task:task
  }).then(result=> res.json(result))
  .catch(err => res.json(err))

})
app.listen(3001, ()=>{ //listens for incoming connections
  console.log("Server Running")
})