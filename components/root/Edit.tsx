import React, { Dispatch, SetStateAction } from 'react'
import { Button } from '../ui/button'

type PropsEdit = {
    onClick: Dispatch<SetStateAction<boolean>>
}
function Edit({onClick}: PropsEdit) {
  return (
    <div className='fixed top-5 left-[50%] translate-x-[-50%] z-20'>
        <Button>
        Edit
        </Button>
    </div>
  )
}

export default Edit