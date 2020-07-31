import api from '../utils/api'
import { showAlert } from './alerts'
import {
  AUTHORIZE,
  AUTH_ERROR,
  LOG_IN,
  LOG_IN_ERROR,
  SIGN_UP,
  SIGN_UP_ERROR,
  COMPLETE_LOADING,
  LOG_OUT
} from './types'

export function authorize (token) {
  return async function (dispatch) {
    try {
      await api.get('/auth')
      dispatch({
        type: AUTHORIZE,
        payload: token
      })
    } catch (error) {
      dispatch({
        type: AUTH_ERROR
      })
      dispatch(showAlert('danger', error.message))
    }
  }
}

export function logIn (email, password) {
  return async function (dispatch) {
    try {
      const response = await api.post('/login', { email, password })
      dispatch({ type: LOG_IN, payload: response.data.token })
      dispatch(showAlert('success', 'Log in succesful!'))
      setTimeout(() => {
        dispatch(showAlert('success', 'You can now post a comment!'))
      }, 2500)
    } catch (error) {
      dispatch({ type: LOG_IN_ERROR, payload: error.message })
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
      dispatch(showAlert('success', 'Sign up succesful!'))
      setTimeout(() => {
        dispatch(showAlert('success', 'You can now post a comment!'))
      }, 2500)
    } catch (error) {
      dispatch({
        type: SIGN_UP_ERROR
      })
      dispatch(showAlert('danger', error.message))
    }
  }
}

export function completeLoading () {
  return {
    type: COMPLETE_LOADING
  }
}

export function logOut () {
  return {
    type: LOG_OUT
  }
}
