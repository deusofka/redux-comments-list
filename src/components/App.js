import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CommentBox from './CommentBox'
import CommentList from './CommentList'
import Error from './Error'
import '../App.css'

function App () {
  return (
    <Switch>
      <Route exact path='/' component={CommentList} />
      <Route path='/post' component={CommentBox} />
      <Route component={Error} />
    </Switch>
  )
}

export default App
