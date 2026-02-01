import React from 'react'
import Sidebar from './Sidebar'
import Hero from './Hero'
import NoVideos from './NoVideos'

function EmptyPage() {
  return (
    <div className='flex row bg-[#F6F6F7]'>
        <div className='w-[20%]'><Sidebar /></div>

     <div className='w-[80%] bg-[#F6F6F7]'>
      <div className="flex items-center gap-2 mb-6 mt-5">
        <img src="/images/lock.png" alt="Vidify" className="w-6 h-6" />
        <span className="text-sm font-medium text-gray-800">Vidify</span>
      </div>
       <h1 className="text-2xl font-semibold text-gray-900 mb-5">
     Video Generation
      </h1>
       <Hero />
       <NoVideos />
      </div>

      </div>
  )
}

export default EmptyPage