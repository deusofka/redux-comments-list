import { SHOW_ALERT, HIDE_ALERT } from './types'

export function showAlert (type, message) {
  return function (dispatch) {
    setTimeout(() => {
      dispatch(hideAlert())
    }, 1500)
    dispatch({
      type: SHOW_ALERT,
      payload: { type, message }
    })
  }
}

export function hideAlert () {
  return {
    type: HIDE_ALERT
  }
}
