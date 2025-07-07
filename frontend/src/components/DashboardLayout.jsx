import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import SideBarLayout from './SideBarLayout'

function DashboardLayout() {
  return (
    <div className='flex flex-col w-full  h-full ' style={{backgroundColor:"#2D3748 "}}>

      <div className='flex  w-full h-20 items-center  ' style={{backgroundColor:"#1A202C "}}>
          <Navbar/>
      </div>
      <div className='flex flex-row'> 
        <div className='flex text-white    'style={{backgroundColor:"#1A202C"}} >
          <SideBarLayout/>
        </div>
        <div className="flex-1  p-4 w-full text-white  ">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
