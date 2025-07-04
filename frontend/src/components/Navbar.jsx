import React from 'react'
import {FiBell, FiUser} from 'react-icons/fi'

function Navbar() {
  return (
    <div className='flex justify-between   w-full pl-4  '>
      <label className='text-[40px] text-white ' htmlFor="">Vehicle Tracker </label>
      <div className='flex justify-end p-3  items-center space-x-7'>

        <span className='ml-2 '> {<FiBell />}   </span>
        <span className='ml-2'> {<FiUser />}   </span>
      </div>
    </div> 
  )
}

export default Navbar
