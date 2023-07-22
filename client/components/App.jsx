import React, { useEffect, useState } from 'react'

import { getFiles } from './firebase/storage'

import Nav from './Nav'
import File from './File'

function App () {

  const [files, setFiles] = useState([])
  
  useEffect(() => {
    getFiles()
      .then(setFiles)
  }, [])

  return (
    <div className="container" >
      <Nav />
      <div className="content" >
        <h1>Hi :)</h1>
        <ul>
          {files.map((f, idx) => <File {...f} key={idx} />)}
        </ul>
      </div>
    </div>
  )
}

export default App
