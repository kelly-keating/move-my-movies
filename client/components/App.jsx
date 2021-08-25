import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'

import Nav from './Nav'

function App () {
    

  return (
    <div className="container" >
      <Nav />
      <div className="content" >
        <h1>Title - Hi :)</h1>
      </div>
    </div>
  )
}

export default App
