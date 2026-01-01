import React from 'react'
import Navbar from './components/Navbar'
import { useState } from 'react'

const App = () => {

  const[theme, setTheme] = useState('light')

  return (
    <div>
      <Navbar theme={theme}>
        <h2>This is first line</h2>
        <h3>This is second line</h3>
      </Navbar>
    </div>
  )
}

export default App