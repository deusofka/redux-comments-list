import React from 'react'

const Login = () => {
  return (
    <>
      <div id='login'>
        <h2>Login</h2>
        <div class='fields'>
          <label htmlFor='email'>Email</label>
          <input id='email' type='text' autocomplete='off' />
          <label htmlFor='password'>Password</label>
          <input id='password' type='password' autocomplete='off' />
        </div>
        <button>Submit</button>
      </div>
    </>
  )
}

export default Login
