import { GET_USER, GET_USER_ERROR } from '../actions/types'

export default function (state = null, action) {
  switch (action.type) {
    case GET_USER:
      return action.payload
    case GET_USER_ERROR:
      localStorage.removeItem('token')
      return null
    default:
      return state
  }
}
