import { LOG_OUT } from '../actions/types'
export default function (state = false, action) {
  switch (action.type) {
    case LOG_OUT:
      return false
    default:
      return state
  }
}
