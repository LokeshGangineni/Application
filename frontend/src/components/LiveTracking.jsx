import React from 'react'

function LiveTracking() {
  return (
    <div>
      <div className='flex flex-row   'style={{display:"inline"}}>
        <span className='border border-none pl-4 pr-4 hover:bg-amber-500 cursor-pointer'>current Location</span>
        <span className='border border-none pl-4 pr-4 hover:bg-amber-500 cursor-pointer'>Live Location</span>
        <span className='border border-none pl-4 pr-4 hover:bg-amber-500 cursor-pointer'> Destination</span>
      </div>
      <h2 className='text-[40px]'>This is live tracking page</h2>
    </div>
  )
}

export default LiveTracking
