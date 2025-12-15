import React, { useState } from 'react'
import DirectAccess from './components/First'
import UseStateAccess from './components/UseStateAccess'

const App = () => {

  return (
    <div>
      <h1>Direct Access : </h1>
      <DirectAccess />

      <h1 className="line"></h1>

      <h1>useState Access : </h1>
      <UseStateAccess />

      <h1 className="line"></h1>
      

    </div>
  )
}

export default App
