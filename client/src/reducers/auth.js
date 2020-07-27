import { TOGGLE_IS_AUTHENTICATED } from '../actions/types'
export default function (state = false, action) {
  switch (action.type) {
    case TOGGLE_IS_AUTHENTICATED:
      return !state
    default:
      return state
  }
}
