import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

function DashboardLayout() {
  return (
    <div className='flex flex-col w-full  h-full ' style={{backgroundColor:"#1A202C "}}>

      <div className='flex  w-full h-12' style={{backgroundColor:"#1A202C "}}>
          <Navbar/>
      </div>
      <div className='flex flex-row'>
        <div className='flex text-white mt-16 ml-0 bg-green-500' >
          <Sidebar/>
        </div>
        <div className="p-4 w-full text-white bg-red-700">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
