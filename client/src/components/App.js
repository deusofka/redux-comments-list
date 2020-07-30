import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import store from '../store'
import setAuthHeader from '../utils/setAuthHeader'
import { authorize } from '../actions/auth'
import CommentBox from './CommentBox'
import CommentList from './CommentList'
import Login from './Login'
import Signup from './Signup'
import Navbar from './Navbar'
import Error from './Error'
import Alerts from './Alerts'
import '../App.css'

function App () {
  useEffect(() => {
    if (localStorage.token) {
      setAuthHeader(localStorage.token)
      store.dispatch(authorize(localStorage.token))
    }
  }, [])
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={CommentList} />
        <Route path='/post' component={CommentBox} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route component={Error} />
      </Switch>
      <Alerts />
    </>
  )
}

export default App
