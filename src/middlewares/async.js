export default function ({ dispatch }) {
  return function (next) {
    return async function (action) {
      if (!action.payload || !action.payload.then) {
        return next(action)
      }
      action.payload.then(function (response) {
        dispatch({ ...action, payload: response })
      })
    }
  }
}
