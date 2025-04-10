"use client";
import React from 'react'

function ErrorPage() {
  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='text-2xl text-red-500'>
        Error while fetching users data
        </div>
    </div>
  )
}

export default ErrorPage