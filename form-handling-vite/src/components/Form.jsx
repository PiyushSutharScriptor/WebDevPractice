import React from 'react'

const Form = () => {
  return (
    <div>
      <form onSubmit={(e)=>{
        console.log("Form submitted");
        e.preventDefault()
      }}>
        <input type="text" placeholder='Enter Name Here' />
        <button>Submit Here</button>
      </form>
    </div>
  )
}

export default Form

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

export default Form
*/