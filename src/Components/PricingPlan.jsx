import React from 'react'
import Sidebar from './Sidebar'
import PpBody from './PpBody'

function PricingPlan() {
  return (
    <>
    <div className='flex row bg-[#f6f6f7]'>
        <div className='w-[20%]'><Sidebar /></div>
        <div className='w-[80%] bg-[#f6f6f7]'><PpBody /></div>
    </div>
    </>
  )
}

export default PricingPlan