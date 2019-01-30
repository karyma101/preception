import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './components/App'
import './styles/css/main.css'
import registerServiceWorker from './registerServiceWorker'


ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)

registerServiceWorker()