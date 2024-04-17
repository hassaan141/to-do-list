import React from 'react'
import Create from './Create'
import { useState, useEffect } from 'react';
import axios from 'axios';
import BsFillTrashFill from ''


function Home() {
  const [todos, setTodos] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:3001/get')
    .then(result=>setTodos(result.data))
    .catch(err=> console.log(err))
  }, [])


  return (
    <div className='  w-screen min-h-screen bg-gradient-to-r from-violet-500 to-blue-300'>
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
          <div className='flex justify-center'>
            <div className='border font-bold my-8 py-4 mx-auto my-0 w-1/3 h-auto pl-28 text-xl bg-gradient-to-r from-violet-400 to-blue-300 border-black'>
            <BsCircleFill/>
            {todo.task}
            </div>
            <div>
              <span><BsFillTrashFill/></span>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Home;


