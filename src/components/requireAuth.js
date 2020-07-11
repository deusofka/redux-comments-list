import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
function requireAuth (ChildComponent) {
  function ComposedComponent ({ isAuthenticated, ...rest }) {
    return isAuthenticated ? <ChildComponent {...rest} /> : <Redirect to='/' />
  }
  function mapStateToProps (state) {
    return { isAuthenticated: state.isAuthenticated }
  }
  return connect(mapStateToProps)(ComposedComponent)
}

export default requireAuth
