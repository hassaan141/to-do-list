import React from 'react'
import Create from './Create'
import { useState, useEffect } from 'react';
import axios from 'axios';
// import BsFillTrashFill from ''
import trashCan from './assests/trash.png'


function Home() {
  const [todos, setTodos] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:3001/get')
    .then(result=>setTodos(result.data))
    .catch(err=> console.log(err))
  }, [])


  return (
    <div className='  w-screen min-h-screen bg-gradient-to-r from-violet-600 to-indigo-600'>
      <h2 className='flex justify-center pt-14 bold text-4xl'>Muhamamds To-Do List</h2>
      <Create />
      {
        todos.length=== 0
        ?
        <div>
          <h4 className='flex justify-center pt-8 bold text-2xl'>Please Make Your First Item</h4>
        </div> 
        :
        todos.map(todo=>(
          <div className='flex justify-center border font-bold my-8 py-2 pt-4 mx-auto w-1/3 h-16 text-xl bg-gradient-to-r from-indigo-400 to-violet-400 border-black'>
            <div>
                {todo.task}
            </div>
            <div>
                <img src={trashCan} className='w-4 h-4 mt-1 ml-80' alt="Description of the image" /> {/* Added left margin here */}
            </div>
        </div>
        ))
      }
    </div>
  )
}

export default Home;


