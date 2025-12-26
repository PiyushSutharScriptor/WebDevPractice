import React from 'react'
import FetchApi from './components/FetchApi';
import Axios from './components/Axios';
import AxiosOpera from './components/AxiosOpera';

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

      {/* Axios API */}
      <Axios />

      <hr />

      {/* API Operations */}
      <AxiosOpera />

      <hr />



    </>
  )
}

export default App
