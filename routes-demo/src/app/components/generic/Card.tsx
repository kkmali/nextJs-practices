import React from 'react'

function Card({children}:{
    children:React.ReactNode;
}) {
  return (
    <div className='p-25 m-2.5 border flex justify-center items-center'>{children}</div>
  )
}

export default Card