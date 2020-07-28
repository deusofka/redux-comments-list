import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logOut } from '../actions'

const Navbar = ({ logOut, isAuthenticated }) => {
  return (
    <div id='navbar'>
      <div className='horizontal-box'>
        <div id='navbar_links'>
          <Link to='/'>Home</Link>
          <Link to='/post'>Post</Link>
        </div>
        {isAuthenticated && <button onClick={() => logOut()}>Log out</button>}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.isAuthenticated
})

export default connect(mapStateToProps, { logOut })(Navbar)
