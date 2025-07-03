import React from 'react'
import { useNavigate } from 'react-router-dom';
import {FiFile,FiHome,FiBarChart2, FiBatteryCharging, FiDatabase, FiMap, FiMapPin, FiSettings, FiPlus} from 'react-icons/fi'
import {MdSpeed} from 'react-icons/md';

const mainMenuObject=[

    // { id:"Dashboard",label:"Dashboard"},
    { id: "dashboard",label:"dashboard",symbol:<FiHome/>},
    { id: "Analytics",label:"Analytics",symbol:< FiBarChart2 />},
    { id: "LiveTracking",label:"LiveTracking",symbol:< FiMapPin />},
    { id: "Data",label:"Data",symbol:< MdSpeed  />},
    { id: "RawData",label:"RawData",symbol:< FiDatabase />},
    { id: "BatteryStatus",label:"BatteryStatus",symbol:< FiBatteryCharging />}
];
const managementObject=[
    {id:"Device Management",label:"Device Management",symbol:<FiPlus/>},
    {id:"OTA Updates",label:"OTA Updates",symbol:<FiSettings/>}
]

function Sidebar() {

  const navigate=useNavigate();
  const handleOnClick=(id)=>
  {
    navigate(`/dashboard/${id}`);
  }
  return (
    <div>
      <label className='text-white ' htmlFor="">MAINMENU</label>
       {
        mainMenuObject.map(field=>
        (
          
            <div className=' flex items-center flex-row  m-4 text-start rounded-2xl hover:bg-gray-600 pl-8 pr-8 pt-2 pb-2 hover:translate-0.5 gap-3 cursor-pointer'
                 onClick={()=>handleOnClick(field.label)} >
                  {field.symbol}{field.label}
            </div>
        ))
      }
      <label className='text-red-400' htmlFor="">MANAGEMENT</label>
      {
        managementObject.map(field=>
        (
            <div className=' flex flex-row gap-3 items-center m-4 text-start rounded-2xl pl-6 pr-6 pt-2 pb-2 hover:bg-gray-600  hover:translate-0.5 cursor-pointer '
              onClick={()=>handleOnClick(field.id)}
            >
               <span className='whitespace-nowrap flex flex-row items-center gap-3'> {field.symbol}{field.label} </span>
            </div>
        ))
      }
    </div>
  )
}

export default Sidebar
