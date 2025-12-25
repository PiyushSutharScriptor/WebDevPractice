import React from 'react'
import FetchApi from './components/FetchApi';

const App = () => {

  const getData = ()=>{
    console.log("Function Data");
  }

  

  return (
    <>

      {/* function calls */}
      <h1>Function Calls : </h1>
      <div>
      <button onClick={getData}>Function Data</button>
      <button onClick={()=>{
        console.log("Direct Data")
      }}>Direct Data</button>
      </div>

      <hr />

      {/* Fetch API */}
      <FetchApi />

      <hr />


    </>
  )
}

export default App
