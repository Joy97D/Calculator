import React from 'react'
import './outputscreen.css'

export const outputscreen = ({result,first,second}) => {
  return (
    <div className='out'>
        {result===null ? first:result}
    </div>
  )
}
