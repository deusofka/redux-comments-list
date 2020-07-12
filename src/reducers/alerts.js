import { SHOW_ALERT, HIDE_ALERT } from '../actions/types'
export default function (state = [], action) {
  switch (action.type) {
    case SHOW_ALERT:
      return [action.payload, ...state]
    case HIDE_ALERT:
      return state.shift()
    default:
      return state
  }
}
