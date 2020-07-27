import tv4 from 'tv4'
import stateSchema from '../schema/stateSchema'

export default function ({ dispatch, getState }) {
  return function (next) {
    return async function (action) {
      next(action)
      if (!tv4.validate(getState(), stateSchema)) {
        console.warn('State schema validation failed')
      }
    }
  }
}
