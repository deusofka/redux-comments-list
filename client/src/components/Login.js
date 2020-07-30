import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logIn } from '../actions/auth'

const Login = ({ logIn, isAuthenticated, history }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  useEffect(() => {
    if (isAuthenticated) history.push('/post')
    // eslint-disable-next-line
  }, [isAuthenticated])

  const onChange = event =>
    setFormData({ ...formData, [event.target.name]: event.target.value })

  const onSubmit = event => {
    logIn(formData.email, formData.password)
    event.preventDefault()
  }

  return (
    <>
      <form id='login'>
        <h2>Login</h2>
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
      <p id='sign_up_instead'>
        Don’t have an account yet? <Link to='/signup'>Sign up</Link>
      </p>
    </>
  )
}

function mapStateToProps (state) {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps, { logIn })(Login)
