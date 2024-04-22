import React from 'react'
import Create from './Create'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BsFillTrashFill } from "react-icons/bs";
import { BsCircle } from "react-icons/bs";
import { BsCheckCircle } from "react-icons/bs";


function Home() {
  const [todos, setTodos] = useState([]);
  useEffect(()=>{
    axios.get('https://to-do-list-back-ten.vercel.app/get')
    .then(result=>setTodos(result.data))
    .catch(err=> console.log(err))
  }, [])

  const handleEdit =(id)=>{
    axios.put('https://to-do-list-back-ten.vercel.app/update/'+id)
    .then(result=>{
      window.location.reload() //to refersh the page every update
    })
    .catch(err=> console.log(err))
  }

  const deleteIcon=(id)=>{
    axios.delete('https://to-do-list-back-ten.vercel.app/delete/'+id)
    .then(result=>{
      window.location.reload() //to refersh the page every update
    })
    .catch(err=> console.log(err))
  }


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
          <div class="flex justify-between items-center border font-bold my-4  px-8 mx-auto w-1/3 h-16 text-xl bg-gradient-to-r from-indigo-400 to-violet-400 border-black rounded-md">

              <div class="flex items-center gap-x-3" onClick={()=>handleEdit(todo._id)}>
                {todo.done ? <BsCheckCircle className='mt-1 cursor-pointer '/> : <BsCircle className='mt-1 cursor-pointer '/>}
                <p className ={todo.done? "line-through" : ""}>{todo.task}</p>
            </div>
            <div>
                <span className='cursor-pointer' onClick={()=>deleteIcon(todo._id)}><BsFillTrashFill /></span>
            </div>
        </div>
        ))
      }
    </div>
  )
}

export default Home;


