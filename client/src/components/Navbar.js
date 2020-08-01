import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logOut } from '../actions/auth'
import { getUser } from '../actions/user'

const Navbar = ({ logOut, getUser, loading, isAuthenticated, user }) => {
  useEffect(() => {
    if (!loading && isAuthenticated) getUser()
  }, [getUser, loading, isAuthenticated])
  return (
    <div id='navbar'>
      <div className='horizontal-box'>
        <div id='navbar_links'>
          <Link to='/'>Home</Link>
          <Link to='/post'>Post</Link>
        </div>
        {user && user.email && <p id='navbar_email'>{user.email}</p>}
        {isAuthenticated && <button onClick={() => logOut()}>Log out</button>}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  loading: state.auth.loading,
  isAuthenticated: state.auth.isAuthenticated,
  user: state.user
})

export default connect(mapStateToProps, { logOut, getUser })(Navbar)
