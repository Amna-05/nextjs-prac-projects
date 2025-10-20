import react,{ createContext,useContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            todo:'hello world',
            id:1,
            is_completed :false
        }
    ],

      Add_todo  : (id) => {},
      Update_todo : (id,todo) => {},
      Delete_todo : (id) => {},
      Toggle_complete : (id) => {},


})

export const  useTodo=()=>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider