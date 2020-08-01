import { combineReducers } from 'redux'
import commentReducer from './comments'
import authReducer from './auth'
import userReducer from './user'
import alertReducer from './alerts'

export default combineReducers({
  comments: commentReducer,
  auth: authReducer,
  user: userReducer,
  alerts: alertReducer
})
