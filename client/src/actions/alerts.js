import { SHOW_ALERT, HIDE_ALERT } from './types'

export function showAlert (message) {
  return function (dispatch) {
    setTimeout(() => {
      dispatch(hideAlert())
    }, 1500)
    dispatch({
      type: SHOW_ALERT,
      payload: message
    })
  }
}

export function hideAlert () {
  return {
    type: HIDE_ALERT
  }
}
