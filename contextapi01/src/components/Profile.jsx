'use client'
import { useContext } from "react";
import React from 'react'
import Create_Context from "./Contextapi/CreateContext";
import {user} from '../components/Contextapi/CreateContext'

function Profile() {
    const {user} =useContext(Create_Context)
    if (!user) return (
    <h1> No User Regstered</h1>
  )
  return(<div>
    Welcome {user.username}
  </div>)
}

export default Profile