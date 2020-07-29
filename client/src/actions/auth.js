import api from '../utils/api'
import { showAlert } from './alerts'
import { AUTHORIZE, AUTH_ERROR, SIGN_UP, SIGN_UP_ERROR, LOG_OUT } from './types'

export function authorize () {
  return async function (dispatch) {
    try {
      await api.get('/auth')
      dispatch({
        type: AUTHORIZE
      })
    } catch (error) {
      dispatch({
        type: AUTH_ERROR
      })
      dispatch(showAlert('danger', error.message))
    }
  }
}

export function signUp (email, password) {
  return async function (dispatch) {
    try {
      const response = await api.post('/users', { email, password })
      await dispatch({
        type: SIGN_UP,
        payload: response.data.token
      })
      dispatch(
        showAlert('success', 'Sign up succesful! You can now post a comment!')
      )
    } catch (error) {
      dispatch({
        type: SIGN_UP_ERROR
      })
    }
  }
}

export function logOut () {
  return {
    type: LOG_OUT
  }
}
