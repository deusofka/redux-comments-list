import React from 'react'
import { Link } from 'react-router-dom'
import CommentList from './CommentList'
import CommentBox from './CommentBox'
const Navbar = () => {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/post'>Post</Link>
      <button>Sign In</button>
    </div>
  )
}

export default Navbar
