import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { signUp } from '../actions/auth'
const Signup = ({ signUp, isAuthenticated, history }) => {
  const [formData, setFormData] = useState(() => ({
    email: '',
    password: ''
  }))
  useEffect(() => {
    if (isAuthenticated) {
      history.push('/post')
    }
  }, [isAuthenticated])
  const onChange = event =>
    setFormData({ ...formData, [event.target.name]: event.target.value })
  const onSubmit = event => {
    signUp(formData.email, formData.password)
    event.preventDefault()
  }
  return (
    <>
      <form id='signup'>
        <h2>Signup</h2>
        <div className='fields'>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            name='email'
            type='text'
            onChange={onChange}
            autoComplete='off'
          />
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

function mapStateToProps (state) {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps, { signUp })(Signup)
