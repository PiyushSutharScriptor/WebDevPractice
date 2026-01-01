import React from 'react'
import { createContext } from 'react'

const  ThemeDataContext = createContext()

const ThemeContext = (props) => {
  return (
    <div>
        <ThemeDataContext.Provider value='Piyush' >
            {props.children}
        </ThemeDataContext.Provider>
    </div>
  )
}

export { ThemeDataContext }
export default ThemeContext