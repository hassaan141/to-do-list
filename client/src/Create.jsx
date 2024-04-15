import React from 'react'
import axios from 'axios'

function Create() {
  const [task, setTask] = useState();
  const handleAdd=()=>{
    axios.post('http://localhost:3001/add', {task:task})
    .then(result => console.log(result))
    .catch(result => console.log(error))
  } 
  return (
    <div className='flex justify-center pt-4' >
      <input className='rounded-lg w-1/6 h-8' placeholder='Enter Task' onChange={(e)=> setTask(e.target.value)}></input>
      <button className='rounded-lg bg-violet-700 w-16' type='button' onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Create
