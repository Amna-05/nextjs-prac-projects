'use client'
import React,{useState , useContext } from 'react'
import Create_Context from './Contextapi/CreateContext'

function Login() {
  
  const [username, setusername] = useState('')
  const [pass, setpass] = useState('')


  const {user,setuser} =useContext(Create_Context)
  const handleSubmit= ( (e) => {
      e.preventDefault()
      setuser({username,pass})
      
     })
        return (
     
          <div>
          <h2>Login</h2>
          <input type='text'
          value={username}
          onChange={(e) => setusername(e.target.value) }
          placeholder='username'  />
          {" "}
          <input type='text' 
          value={pass}
          onChange={(e) => setpass(e.target.value) }
          placeholder='password'  />
          <button onClick={handleSubmit}>Submit</button>
      </div>
     )
   }

export default Login