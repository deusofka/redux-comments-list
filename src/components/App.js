import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CommentBox from './CommentBox'
import CommentList from './CommentList'
import Navbar from './Navbar'
import Error from './Error'
import Alerts from './Alerts'
import '../App.css'

function App () {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={CommentList} />
        <Route path='/post' component={CommentBox} />
        <Route component={Error} />
      </Switch>
      <Alerts />
    </>
  )
}

export default App
