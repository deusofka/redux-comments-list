import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { toggleIsAuthenticated } from '../actions'
import CommentList from './CommentList'
import CommentBox from './CommentBox'

const Navbar = ({ toggleIsAuthenticated, isAuthenticated }) => {
  return (
    <div id='navbar'>
      <div class='horizontal-box'>
        <div id='navbar_links'>
          <Link to='/'>Home</Link>
          <Link to='/post'>Post</Link>
        </div>
        <button onClick={() => toggleIsAuthenticated()}>
          Sign {!isAuthenticated ? 'In' : 'Out'}
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.isAuthenticated
})

export default connect(mapStateToProps, { toggleIsAuthenticated })(Navbar)
