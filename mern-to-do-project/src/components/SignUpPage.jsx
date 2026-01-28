import React from 'react'

const SignUpPage = () => {
  return (
    <>
        <form>
            <h1>SignUp</h1>
            <h1>Sign up to continue</h1>
            <input type="text" placeholder='Enter Username' />
            <input type="email" placeholder='Enter Email' />
            <input type="password" placeholder='Enter Password'/>
            <button>Sign up</button>
        </form>

        <h1>Already have an account <a href="/login">Login</a></h1>
    </>
  )
}

export default SignUpPage