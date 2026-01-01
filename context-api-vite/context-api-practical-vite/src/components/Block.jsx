import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeProvider'

const Block = () => {

    const [color,setColor] = useContext(ThemeContext);
    console.log(color);

  return (
    <div>
        <h2 className={`box ${color==='dark' ? 'dark' : 'light'}` }>Theme : {color}</h2>
        <button onClick={()=>{
            setColor(color==='light' ? 'dark' : 'light')
        }}>Change Theme</button>
    </div>
  )
}

export default Block