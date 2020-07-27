import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducers'
import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from './middlewares/promiseMiddleware'
import stateValidationMiddleware from './middlewares/stateValidationMiddleware'

const initialState = { comments: ['This is comment #1', 'This is comment #2'] }
const middlewares = applyMiddleware(
  thunkMiddleware,
  promiseMiddleware,
  stateValidationMiddleware
)

export default createStore(
  reducers,
  initialState,
  composeWithDevTools(middlewares)
)
