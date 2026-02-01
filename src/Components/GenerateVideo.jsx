import React from 'react'
import Sidebar from './Sidebar'
import TableData from './TableData'

function GenerateVideo() {
  return (
    <>
    <div className='flex row bg-[#f6f6f7]'>
        <div className='w-[20%]'><Sidebar /></div>
        <div className='w-[80%] bg-[#f6f6f7]'><TableData /></div>
    </div>
    </>
  )
}

export default GenerateVideo