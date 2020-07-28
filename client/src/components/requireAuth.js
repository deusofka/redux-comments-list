import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { showAlert } from '../actions'
function requireAuth (ChildComponent) {
  function ComposedComponent ({ showAlert, isAuthenticated, ...rest }) {
    useEffect(() => {
      if (!isAuthenticated) {
        showAlert({
          type: 'warn',
          message: 'Please sign in to access this page!'
        })
      }
      // eslint-disable-next-line
    }, [])
    return isAuthenticated ? (
      <ChildComponent {...rest} />
    ) : (
      <Redirect to='/login' />
    )
  }
  function mapStateToProps (state) {
    return { isAuthenticated: state.isAuthenticated }
  }
  return connect(mapStateToProps, { showAlert })(ComposedComponent)
}

export default requireAuth
