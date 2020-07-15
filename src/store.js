import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducers'
import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from './middlewares/promiseMiddleware'
const initialState = { comments: ['This is comment #1', 'This is comment #2'] }
const middlewares = applyMiddleware(thunkMiddleware, promiseMiddleware)

export default createStore(
  reducers,
  initialState,
  composeWithDevTools(middlewares)
)
