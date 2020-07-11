import React from 'react'
import { Route } from 'react-router-dom'
import CommentBox from './CommentBox'
import CommentList from './CommentList'
import '../App.css'

function App () {
  return (
    <>
      <Route exact path='/' component={CommentList} />
      <Route path='/post' component={CommentBox} />
    </>
  )
}

export default App
