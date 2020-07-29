import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
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
      <form id='signup'>
        <h2>Signup</h2>
        <div className='fields'>
          <label htmlFor='email'>Email</label>
          <input id='email' name='password' type='text' autoComplete='off' />
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
      <p id='log_in_instead'>
        Already have an account? <Link to='/login'>Log in</Link>
      </p>
    </>
  )
}

export default Signup
