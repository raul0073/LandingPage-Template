'use client'
import React from 'react'
import Parallax from 'react-next-parallax'

function VideoBg() {
  return (
     <Parallax className="w-full h-[100vh] lg:w-full">
      <div className="relative w-full object-cover h-full">
        {/* You can add additional elements or styles as needed */}
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover absolute inset-0"
        >
           <source src="./intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </Parallax>
  )
}

export default VideoBg

