import {
  AUTHORIZE,
  AUTH_ERROR,
  LOG_IN,
  LOG_IN_ERROR,
  SIGN_UP,
  SIGN_UP_ERROR,
  COMPLETE_LOADING,
  LOG_OUT
} from '../actions/types'
const initialState = { isAuthenticated: false, token: null, loading: true }
export default function (state = initialState, action) {
  switch (action.type) {
    case AUTHORIZE:
      return { isAuthenticated: true, token: action.payload, loading: false }
    case LOG_IN:
    case SIGN_UP:
      return { isAuthenticated: true, token: action.payload, loading: false }
    case COMPLETE_LOADING:
      return { ...state, loading: false }
    case AUTH_ERROR:
    case LOG_OUT:
      return { ...initialState, loading: false }
    case LOG_IN_ERROR:
    case SIGN_UP_ERROR:
      return { ...initialState, loading: false }
    default:
      return state
  }
}
