'use client'
import React,{useState,useEffect} from 'react'
import ThemeProvider from './Hooks/context'
export default function Providers({children } ) {
 
  const[themeMode,setthemeMode] = useState('light')

  const LightTheme =()=>{
    setthemeMode("light")
    console.log("Switching to light theme"); 

  }

 const DarkTheme=()=>{
    setthemeMode("dark")
    console.log("Switching to dark theme"); 
  }
  
  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode.toLowerCase())
   
  
  }, [themeMode])
  



  return (
    <div>
      <ThemeProvider value={{themeMode ,LightTheme,DarkTheme}}>
        <div  key={themeMode.toString()}>
        {children}
        </div>
        </ThemeProvider>
        </div>
  )
}
