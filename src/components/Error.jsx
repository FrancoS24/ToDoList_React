import React from 'react'

const Error = ({mensaje}) => {
  return (
    <div className='bg-red-700 text-white text-center p-3 uppercase font-bold p-3 mt-5 rounded-lg'>
        <p>{mensaje}</p>
    </div>
  )
}

export default Error