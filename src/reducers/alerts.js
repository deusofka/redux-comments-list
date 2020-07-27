import { SHOW_ALERT, HIDE_ALERT } from '../actions/types'
export default function (state = [], action) {
  switch (action.type) {
    case SHOW_ALERT:
      return [action.payload, ...state]
    case HIDE_ALERT:
      return removeFirstItem(state)
    default:
      return state
  }
}

function removeFirstItem (state) {
  const newState = [...state]
  newState.splice(0, 1)
  return newState
}
