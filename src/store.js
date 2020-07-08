import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducers'
const initialState = { comments: ['This is comment #1', 'This is comment #2'] }

export default createStore(reducers, initialState, composeWithDevTools())
