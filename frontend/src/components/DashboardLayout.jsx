import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

function DashboardLayout() {
  return (
    <div className='flex flex-col w-full  h-full ' style={{backgroundColor:"#2D3748 "}}>

      <div className='flex  w-full h-20 items-center ' style={{backgroundColor:"#1A202C "}}>
          <Navbar/>
      </div>
      <div className='flex flex-row'>
        <div className='flex text-white  ml-0  'style={{backgroundColor:"#1A202C"}} >
          <Sidebar/>
        </div>
        <div className="p-4 w-full text-white  mt-16">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
