import React from 'react'
import { FiBarChart2, FiInstagram, FiUserPlus, FiUsers, FiWifi } from 'react-icons/fi'
import { MdSpaceBar, MdSpeed } from 'react-icons/md'
function Dashboard() {
  return (
    <div className=''>
      <div className='flex flex-row justify-around  'style={{backgroundColor:"#1A202C"}}>
        <div className='border  pr-35 pl-35 pt-15 pb-15 m-1 flex items-center  rounded-2xl  ' style={{borderColor:"#1A203g"}}><FiUsers className='size-7 text-blue-400'/></div>
        <div className='border  pr-35 pl-35 pt-15 pb-15 m-1 flex items-center  rounded-2xl  ' style={{borderColor:"#1A203g"}}><FiWifi className='size-7 text-green-400' /></div>
        <div className='border  pr-35 pl-35 pt-15 pb-15 m-1 flex items-center  rounded-2xl  ' style={{borderColor:"#1A203g"}}><MdSpeed className='size-7 text-orange-400' /></div>
        <div className='border  pr-35 pl-35 pt-15 pb-15 m-1 flex items-center  rounded-2xl  ' style={{borderColor:"#1A203g"}}><FiBarChart2 className='size-7 text-green-400' /></div>
      </div>
    </div>
  )
}

export default Dashboard
