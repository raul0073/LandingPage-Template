import React from 'react'

function Logo({className}: {className: string}) {
  return (
<div>
  <h2 className={`text-4xl  font-extrabold ${className} cursor-pointer`}>
  לוגו
  </h2>
</div>
  )
}

export default Logo