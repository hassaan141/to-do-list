const express  = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/test')


app.post('/add', (req, res =>{
  const task = req.body.task;

}))
app.listen(3001, ()=>{
  console.log("Server Running")
})