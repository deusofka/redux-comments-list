import axios from 'axios'
import {
  SAVE_COMMENT,
  FETCH_COMMENTS,
  TOGGLE_IS_AUTHENTICATED,
  SHOW_ALERT,
  HIDE_ALERT
} from './types'
export function saveComment (comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment
  }
}
export function fetchComments () {
  const response = axios('https://jsonplaceholder.typicode.com/comments')
  return {
    type: FETCH_COMMENTS,
    payload: response
  }
}

export function toggleIsAuthenticated () {
  return {
    type: TOGGLE_IS_AUTHENTICATED
  }
}

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
