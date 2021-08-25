import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

// eslint-disable-next-line no-unused-vars
import initializeFirebase from './components/firebase'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  render()
})

function render () {
  ReactDOM.render(
    <Router>
      <App />
    </Router>,
    document.getElementById('app')
  )
}
