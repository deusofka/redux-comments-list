import { LOG_OUT } from '../actions/types'
const initialState = { isAuthenticated: false, token: null }
export default function (state = initialState, action) {
  switch (action.type) {
    case LOG_OUT:
      return { ...initialState }
    default:
      return state
  }
}
