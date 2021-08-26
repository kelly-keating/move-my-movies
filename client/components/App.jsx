import React, { useEffect, useState } from 'react'

import { getFiles } from './firebase/storage'

import Nav from './Nav'

function App () {

  const [files, setFiles] = useState([])
  
  useEffect(() => {
    getFiles()
      .then(setFiles)
  }, [])

  const clickHandler = (url, name) => {

    var xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.responseType = 'blob'
    xhr.onload = function() {
      var urlCreator = window.URL || window.webkitURL
      var imageUrl = urlCreator.createObjectURL(this.response)
      var tag = document.createElement('a')
      tag.href = imageUrl
      tag.target = '_blank'
      tag.download = name
      document.body.appendChild(tag)
      tag.click()
      document.body.removeChild(tag)
    }
    xhr.onerror = err => {
      alert('Failed to download picture')
    }
    xhr.send()
  }

  return (
    <div className="container" >
      <Nav />
      <div className="content" >
        <h1>Title - Hi :)</h1>
        <ul>
          {files.map(f => <li onClick={() => clickHandler(f.url, f.name)}>{f.name}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default App
