import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
      <form id='login'>
        <h2>Login</h2>
        <div className='fields'>
          <label htmlFor='email'>Email</label>
          <input id='email' name='email' type='text' autoComplete='off' />
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            name='password'
            type='password'
            autoComplete='off'
          />
        </div>
        <button>Submit</button>
      </form>
      <p id='sign_up_instead'>
        Don’t have an account yet? <Link to='/signup'>Sign up</Link>
      </p>
    </>
  )
}

export default Login
