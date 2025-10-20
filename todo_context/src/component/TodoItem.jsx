 'use client'
import React,{useState} from 'react'
import {useTodo} from '../contexts/Context'
function TodoItem({ todo }) {
    
    const [isTodoEditable, setisTodoEditable] = useState(false)
    const [TodoMsg, setTodoMsg] = useState(todo.todo)
    const {Update_todo, Delete_todo ,Toggle_complete} = useTodo()

   const ToogleCompleted =()=>{
    Toggle_complete(todo.id)
   }
    
   const edit_todo=()=>{
    Update_todo(todo.id , {...todo,todo:TodoMsg})
    setisTodoEditable(false)
   } 
  
  return (
      <div
          className= {`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
              todo.is_completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
          }`}  
      >
          <input
              type="checkbox"
              className="cursor-pointer"
              checked={todo.is_completed}
              onChange={ToogleCompleted}
          />
          <input
              type="text"
              className={`border outline-none w-full bg-transparent rounded-lg ${
                  isTodoEditable ? "border-black/10 px-2" : "border-transparent"
              } ${todo.is_completed ? "line-through" : ""}`}
              value={TodoMsg}
              onChange={(e) => setTodoMsg(e.target.value)}
              readOnly={!isTodoEditable}
          />

          <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
              onClick={() => {
                  if (todo.is_completed ) return;

                  if (isTodoEditable) {
                      edit_todo();
                  } else setisTodoEditable((prev) => !prev);
              }}
              disabled={todo.is_completed}
          >
              {isTodoEditable ? "📁" : "✏️"}
          </button>
          
          <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
              onClick={() => Delete_todo(todo.id)}
          >
              ❌
          </button>
      </div>
  );
}

export default TodoItem;
