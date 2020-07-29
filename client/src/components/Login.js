import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const [formData, setFormData] = useState(() => ({
    email: '',
    password: ''
  }))
  const onChange = event =>
    setFormData({ ...formData, [event.target.name]: event.target.value })
  const onSubmit = event => {
    event.preventDefault()
    console.log('submitted')
  }
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
            onChange={onChange}
            autoComplete='off'
          />
        </div>
        <button onClick={onSubmit}>Submit</button>
      </form>
      <p id='sign_up_instead'>
        Don’t have an account yet? <Link to='/signup'>Sign up</Link>
      </p>
    </>
  )
}

export default Login
