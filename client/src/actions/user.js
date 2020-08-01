import api from '../utils/api'
import { showAlert } from './alerts'
import { GET_USER, GET_USER_ERROR } from './types'

export function getUser (token) {
  return async function (dispatch) {
    try {
      const user = await api.get('/users/current')
      console.log({ user })
      dispatch({
        type: GET_USER,
        payload: user.data
      })
    } catch (error) {
      dispatch({
        type: GET_USER_ERROR
      })
      dispatch(showAlert('danger', error.response.data.error))
    }
  }
}
