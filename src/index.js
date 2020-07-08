import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import Root from './Root'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <Root>
      <App />
    </Root>
  </React.StrictMode>,
  document.getElementById('root')
)
