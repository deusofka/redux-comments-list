import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <>
      <div id='signup'>
        <h2>Signup</h2>
        <div class='fields'>
          <label htmlFor='email'>Email</label>
          <input id='email' type='text' autocomplete='off' />
          <label htmlFor='password'>Password</label>
          <input id='password' type='password' autocomplete='off' />
        </div>
        <button>Submit</button>
      </div>
      <p id='log_in_instead'>
        Already have an account? <Link to='/login'>Log in</Link>
      </p>
    </>
  )
}

export default Signup
