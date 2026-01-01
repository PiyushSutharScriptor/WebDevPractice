import React, { createContext, useState } from 'react'

const ThemeContext = createContext();

const ThemeProvider = ({children}) => {

    const [color,setColor] = useState('dark')
    console.log(color)
  return (
    <ThemeContext.Provider value={[color,setColor]}>
        {children}
    </ThemeContext.Provider>
  )
}

export {ThemeContext}
export default ThemeProvider