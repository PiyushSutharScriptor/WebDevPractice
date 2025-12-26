import React from 'react'
import UseEffect from './components/UseEffect'

const App = () => {

  //you should not do this in react 
  /*const randomFun = ()=>{
    let a = Math.random()
    console.log(a);
  }
  randomFun()
  */

  return (
    <>
      <div>
        <h1>useEffect hook : </h1>
        <UseEffect />
      </div>
    </>
  )
}

export default App
