'use client '
import React from 'react'
import { useState } from 'react'
import Create_Context from './CreateContext'


function ContextProvider( {children}) {
    const [user, setuser] = useState('')
  return (

   <Create_Context.Provider value ={{user,setuser}}>
    {children}
   </Create_Context.Provider>
  )
}

export default ContextProvider