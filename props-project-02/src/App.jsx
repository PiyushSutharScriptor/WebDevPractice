import React from 'react'
import Card from './Components/Card'
import User from './Components/User'
import PropsCard from './Components/PropsCard'

const App = () => {

  let arr = ["Piyush", "Umesh", "Aman", "Harsh"]
  let arr2 = [1, 2, 3, 4, 5, 6]
  let arr3 = [{mname : "Mohith" , age:21},
    {mname : "Nitin" , age:22},
    {mname : "Vinod" , age:23}
  ]

  arr3.forEach((obj)=>{
    console.log(obj)
    console.log(obj.mname)
    console.log(obj.age)
  })

  return (
    <>

      {/* Cards components with props by using another component */}
      <div className="parent">
        <PropsCard />
      </div>

      <hr />
      {/* Map funtion with arr */}
      <div className="oper" style={{color:'white'}}>
        {arr2.map((num)=>{
          return num
        })}

        <div></div>
        {arr2}

        <div></div>
        {arr2.map((num)=>{
          return num*2
        })}

        <div></div>
        {arr2.map((num)=>{
          return num/2
        })}

      </div>

       <hr />

      {/* object */}
      <div style={{color:'white'}}>
        {arr3.map(()=>{
          return 'Pi'
        })}
      </div>

       <hr />

      {/* User component */}
      <div className="user">
        <User name={arr[0]} />
        <User name={arr[1]} />
      </div>

       <hr />
      {/* Card component without props*/}
      <div className='parent'>
        <Card />
        <Card />
        <Card />  
      </div>

    </>
  )
}

export default App
