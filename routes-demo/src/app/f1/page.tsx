import Link from 'next/link'
import React from 'react'

function F1() {
  return (
    <>
      <h1>f1 page</h1>
      <div>
        <Link className='border p-1 ml-3 rounded-xl mt-2 inline-block' href="/f1/f2">Go to f2</Link>
      </div>
    </>
  )
}

export default F1