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
  return async function (dispatch) {
    const result = await axios('https://jsonplaceholder.typicode.com/comments')
    dispatch({
      type: FETCH_COMMENTS,
      payload: result.data.map(comment => comment.name)
    })
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
    }, 1000)
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
