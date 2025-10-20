'use client'
import { useTodo } from '@/contexts/Context'
import React ,{useState}  from 'react'

function Todo_form() {
  const [todo, settodo] = useState("")
  const {Add_todo}  =  useTodo()
   
  const add =(e)=>{
   e.preventDefault()

   if(!todo) return
   Add_todo({todo , completed:false})

   settodo('')
  }

  return (
    <div>
      <form  className="flex"  onSubmit={add} >
            <input
                type="text"
                value={todo}
                onChange={(e)=>settodo(e.target.value)}
                placeholder="Write Todo..."
                className="w-full border border-black/10  rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1  bg-orange-600 text-white shrink-0">
                Add
            </button>
        </form>
    </div>
  )
}

export default Todo_form