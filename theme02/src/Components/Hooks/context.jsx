'use client'
import react,{ createContext ,useContext} from "react";

 const themeContext = createContext({
        themeMode:'light',
        LightTheme:()=>{},
        DarkTheme :()=>{}
    }
 )

 const ThemeProvider = themeContext.Provider

 export  function useTheme(){
    return useContext(themeContext)
 }
 
 export default  ThemeProvider