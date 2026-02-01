import React from 'react'
import Sidebar from './Sidebar'
import MainBody from './MainBody'

function Home() {
  return (
    <>
    <div className='flex row bg-[#f6f6f7]'>
        <div className='w-[20%]'><Sidebar /></div>
        <div className='w-[80%] bg-[#f6f6f7]'><MainBody /></div>
    </div>
    </>
  )
}

export default Home