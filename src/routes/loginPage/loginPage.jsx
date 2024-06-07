import React from 'react'
import { Link } from 'react-router-dom'
import "./loginPage.scss"

function LoginPage() {
  return (
    <div className="login">
      <div className="formContainer">
        <form>
          <h1>Welcome back</h1>
          <input name="username" type="text" placeholder="Username" />
          <input name="password" type="password" placeholder="Password" />
          <button>Login</button>
          <Link to="/register">No account? Sign up.</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.jpeg" alt="" />
      </div>
    </div>
  )
}

export default LoginPage
