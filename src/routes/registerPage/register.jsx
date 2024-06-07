import React from 'react'
import "./register.scss"
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className='register'>
      <div className="formContainer">
        <form action="">
          <h1>Create an Account</h1>
          <input type="text" name='username'  placeholder='Username'/>
          <input type="email" name='email' placeholder='Email'/>
          <input type="password" name='password' placeholder='Password' />
          <button>Register</button>
          <Link to="/login">Already have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.jpeg" alt="bg" />
      </div>
      
    </div>
  )
}

export default Register
