const express  = require('express'); //web app framwork for node.js for web apps and API's
const mongoose = require('mongoose'); //Object data modeling library for MongoDB and node.js 
const cors = require('cors'); 
const TodoModel = require('../Models/Todo');

const app = express(); //creates instance for a new express application 

app.use(express.json()); //puts a parse data in req.body
app.use(cors());

//mongoose.connect('mongodb://127.0.0.1:27017/test') //This is where the data for the application will be stored and managed.
mongoose.connect('mongodb+srv://hassaanfarooqi2000:nmRYBkQvPA9Cyhoq@to-do-list.uk2iswt.mongodb.net/')

app.get('/', (req, res)=> res.status(200).json({message: 'Hell0'}))

app.get('/get', (req, res)=>{
  TodoModel.find()
  .then(result=>{
    res.json(result)
    console.log("debug"+result)
  } )
  .catch(err=> res.json(err))
  
})

app.put('/update/:id', (req ,res)=>{
  const {id} = req.params;
  console.log(id)
  TodoModel.findByIdAndUpdate({_id: id}, {done: true})
  .then(result => res.json(result))
  .catch(err => console.log(err))
})

app.delete('/delete/:id', (req, res)=>{
  const {id} = req.params;
    TodoModel.findByIdAndDelete({_id:id})
    .then(result => res.json(result))
    .catch(err => console.log(err))
})

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