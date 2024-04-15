import React from 'react'
import Create from './Create'
import { useState } from 'react';


function Home() {
  const [todos, setTodos] = useState([]);
  return (
    <div className='  w-screen min-h-screen bg-gradient-to-r from-violet-500 to-blue-300'>
      <h2 className='flex justify-center pt-14 bold text-4xl'>Muhamamds To-Do List</h2>
      <Create />
      {
        todos.length=== 0?
        <div>
          <h4 className='flex justify-center pt-8 bold text-2xl'>Please Make Your First Item</h4>
        </div> :
        todos.map(todo=>(
          <div>
            {todo}
          </div>
        ))
      }
    </div>
  )
}

export default Home
