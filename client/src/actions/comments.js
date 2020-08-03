import api from '../utils/api'
import { SAVE_COMMENT, FETCH_COMMENTS, FETCH_COMMENTS_ERROR } from './types'
import { showAlert } from './alerts'

export function saveComment (comment) {
  return async function (dispatch) {
    try {
      await api.post('/comments', { comment })
      dispatch({
        type: SAVE_COMMENT,
        payload: comment
      })
      dispatch(showAlert('success', 'Comment posted successfully'))
    } catch (error) {
      dispatch(showAlert('danger', error.response.data.error))
    }
  }
}
export function fetchComments () {
  return async function (dispatch) {
    try {
      const comments = await api('/comments')
      dispatch({
        type: FETCH_COMMENTS,
        payload: comments.data
      })
    } catch (error) {
      dispatch({
        type: FETCH_COMMENTS_ERROR
      })
      dispatch(showAlert('danger', error.response.data.error))
    }
  }
}
