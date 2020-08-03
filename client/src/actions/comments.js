import api from '../utils/api'
import { SAVE_COMMENT } from './types'
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
