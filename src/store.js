import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducers'
import thunk from 'redux-thunk'
const initialState = { comments: ['This is comment #1', 'This is comment #2'] }
const middlewares = applyMiddleware(thunk)

export default createStore(
  reducers,
  initialState,
  composeWithDevTools(middlewares)
)
