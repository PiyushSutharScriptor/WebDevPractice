import React from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {
  const [theme, setTheme] = useState('light')
  return (
    <div>
      <Navbar theme={theme} setTheme={setTheme} />
      <h1>The theme is {theme}</h1>
    </div>
  )
}

export default App