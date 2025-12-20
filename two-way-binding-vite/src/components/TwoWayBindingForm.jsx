import React, { useState } from 'react'

const TwoWayBindingForm = () => {

  const [title, setTitle] = useState('');

  return (
    <div>

      <form onSubmit={(e) => {
        console.log("Form submitted");
        e.preventDefault() // to stop the refresh
        setTitle('') //after submit clear the input 
      }}>

        <h1>Input with value and onChange</h1>
        <input type="text" value={'Piyush'} placeholder='Enter Name Here' onChange={(e) => {
          console.log("Value changed...")
          console.log(e)
          console.log(e.target)
          console.log(e.target.value)
        }} />

        <h1>Input with useState value and onChange </h1>
        <input type="text" value={title} placeholder='Enter Name Here' onChange={(e) => {
          setTitle(e.target.value)
          console.log("Value changed...")
          console.log(e)
          console.log(e.target)
          console.log(e.target.value)
        }} />

        <button>Submit Here</button>
      </form>
    </div>
  )
}

export default TwoWayBindingForm

//Method : 02
/* import React from 'react'

const Form = () => {

    const formSubmit = (e)=>{
        console.log('form submitted')
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={(e)=>{
                formSubmit(e)
            }}>
                <input type="text" placeholder='Enter Name Here' />
                <button>Submit Here</button>
            </form>
        </div>
    )
}

export default TwoWayBindingForm
*/