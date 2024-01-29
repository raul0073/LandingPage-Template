import React from 'react'

function VideoBg() {
  return (
    <video className="w-full h-full object-cover min-h-[100vh]" loop muted autoFocus autoPlay>
    <source src="./intro.mp4" type="video/mp4" />
  </video>
  )
}

export default VideoBg

