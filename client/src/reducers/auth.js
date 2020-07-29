import { SIGN_UP, SIGN_UP_ERROR, LOG_OUT } from '../actions/types'
const initialState = { isAuthenticated: false, token: null }
export default function (state = initialState, action) {
  switch (action.type) {
    case SIGN_UP:
      return { isAuthenticated: true, token: action.payload }
    case SIGN_UP_ERROR:
    case LOG_OUT:
      return { ...initialState }
    default:
      return state
  }
}
