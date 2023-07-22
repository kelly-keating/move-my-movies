import React, { useState } from 'react'

import { Line } from 'rc-progress'


function File ({name, url}) {
  const [downloading, setDownloading] = useState(false)
  const [progress, setProgress] = useState(0)

  const updateProgress = evt => {
    if (evt.lengthComputable) {
      const percent = (evt.loaded / evt.total) * 100
      setProgress(percent)
      // if (percent === 100) setDownloading(false)
    }
  }

  const download = () => {
    setDownloading(true)

    const xhr = new XMLHttpRequest()
    xhr.onprogress = updateProgress
    xhr.open('GET', url, true)
    xhr.responseType = 'blob'
    xhr.onload = () => {
      const urlCreator = window.URL || window.webkitURL
      const imageUrl = urlCreator.createObjectURL(xhr.response)

      const tag = document.createElement('a')
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

  const renderProgress = () => <Line percent={progress} strokeWidth='4' strokeColor='#008020' />

  return (
    <div className="file-container" onClick={download} >
      <p>{name}</p>
      {downloading && renderProgress()}
    </div>
  )
}

export default File
