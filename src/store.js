import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducers'
import thunkMiddleware from 'redux-thunk'
import customMiddleware from './middlewares/async'
const initialState = { comments: ['This is comment #1', 'This is comment #2'] }
const middlewares = applyMiddleware(thunkMiddleware, customMiddleware)

export default createStore(
  reducers,
  initialState,
  composeWithDevTools(middlewares)
)
