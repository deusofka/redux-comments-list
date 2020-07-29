import {
  AUTHORIZE,
  AUTH_ERROR,
  SIGN_UP,
  SIGN_UP_ERROR,
  LOG_OUT
} from '../actions/types'
const initialState = { isAuthenticated: false, token: null }
export default function (state = initialState, action) {
  switch (action.type) {
    case AUTHORIZE:
      return { ...state, isAuthenticated: true }
    case SIGN_UP:
      localStorage.setItem('token', action.payload)
      return { isAuthenticated: true, token: action.payload }
    case AUTH_ERROR:
      localStorage.removeItem('token')
      return { ...initialState }
    case SIGN_UP_ERROR:
    case LOG_OUT:
      return { ...initialState }
    default:
      return state
  }
}
