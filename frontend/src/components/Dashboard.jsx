import React from 'react'
import { FiBarChart2, FiInstagram, FiUserPlus, FiUsers, FiWifi } from 'react-icons/fi'
import { MdSpaceBar, MdSpeed } from 'react-icons/md'
function Dashboard() {
  return (
    <div className=''>
      <div className='flex flex-row justify-around cursor-pointer p-9 'style={{backgroundColor:"#1A202C"}}>
        <div className='border   flex items-center flex-wrap  rounded-2xl  ' style={{borderColor:"#1A203g"}}> <div className='bg-blue-900  rounded-2xl' > <FiUsers className='size-7 text-blue-400'/></div></div>
        <div className='border   flex items-center flex-wrap  rounded-2xl  ' style={{borderColor:"#1A203g"}}> <div className='bg-green-900  rounded-2xl' > <FiWifi className='size-7 text-green-400' /></div></div>
        <div className='border   flex items-center flex-wrap  rounded-2xl  ' style={{borderColor:"#1A203g"}}> <div className='bg-orange-900  rounded-2xl' > <MdSpeed className='size-7 text-orange-400' /></div></div>
        <div className='border   flex items-center flex-wrap  rounded-2xl  ' style={{borderColor:"#1A203g"}}> <div className='bg-green-900  rounded-2xl' > <FiBarChart2 className='size-7 text-green-400' /></div></div>
      </div>
    </div>
  )
}

export default Dashboard
