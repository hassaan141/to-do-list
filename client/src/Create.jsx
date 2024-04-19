import React, { useState } from 'react'
import axios from 'axios' //library for making http reuquests, and it is used to send data to a server

function Create() {

  const [task, setTask] = useState();

  const handleAdd=()=>{ //axios post request to localhost when add button is clicked
    axios.post('http://localhost:3001/add', {task:task}) //Only the code within the .then/.catch waits for the api call, otherwise everything is run chronologically
    .then(result => {
      window.location.reload()
    }) 
    .catch(error => console.log(error)) //if error is thrown, it logs the error
  } 
  return (
    <div className='flex justify-center pt-4' >
      <input className='rounded-lg w-1/6 h-8 pl-2' placeholder='Enter Task' onChange={(e)=> setTask(e.target.value)}></input>
      <button className='ml-1 rounded-lg bg-violet-700 w-16' type='button' onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Create;