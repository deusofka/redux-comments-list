import { combineReducers } from 'redux'
import commentReducer from './comments'
import authReducer from './auth'
import alertReducer from './alerts'

export default combineReducers({
  comments: commentReducer,
  isAuthenticated: authReducer,
  alerts: alertReducer
})
