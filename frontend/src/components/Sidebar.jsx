// import React from 'react'
// import { useNavigate } from 'react-router-dom';
// import {FiFile,FiHome,FiBarChart2, FiBatteryCharging, FiDatabase, FiMap, FiMapPin, FiSettings, FiPlus, FiWifi,FiMenu} from 'react-icons/fi'
// import {MdPalette, MdSpeed} from 'react-icons/md';
// import { useState } from 'react';
// import Hamburger from './Hamburger';

// const mainMenuObject=[

//     // { id:"Dashboard",label:"Dashboard"},
//     { id: "dashboard",label:"dashboard",symbol:<FiHome/>},
//     { id: "Analytics",label:"Analytics",symbol:< FiBarChart2 />},
//     { id: "LiveTracking",label:"LiveTracking",symbol:< FiMapPin />},
//     { id: "Data",label:"Data",symbol:< MdSpeed  />},
//     { id: "RawData",label:"RawData",symbol:< FiDatabase />},
//     { id: "BatteryStatus",label:"BatteryStatus",symbol:< FiBatteryCharging />}
// ];
// const managementObject=[
//     {id:"Device Management",label:"Device Management",symbol:<FiPlus/>},
//     {id:"OTA Updates",label:"OTA Updates",symbol:<FiSettings/>}
// ]
// const configurationObject=[
//   {id:"General Settings",label:"General Settings",symbol:<FiSettings />},
//   {id:"Theme Settings",label:"Theme Settings",symbol:<MdPalette />},
//   {id:"MQTT config",label:"MQTT config",symbol:<FiWifi/>}
// ]

// function Sidebar() {
//   const navigate = useNavigate();
//   const [open,setOpen]=useState(true);

//   const handleOnClick = (id) => {
//     navigate(`/dashboard/${id}`);
//   };
//   return (
//     <>
//         <div className='sm:hidden'>
          
//           {open && <Hamburger onClick={ ()=>setOpen(!open) } />}
//         </div>
//     <div className=' hidden sm:block'>
       

//       <label className='text-white block text-start ml-5  mt-2' htmlFor="">MAIN MENU</label>
//        {
//         mainMenuObject.map(field=>
//         (
          
//             <div className=' flex items-center flex-row  m-2 text-start rounded-2xl hover:bg-gray-600 pl-8 pr-8 pt-2 pb-2 hover:translate-0.5 gap-3 cursor-pointer'
//                  onClick={()=>handleOnClick(field.label)} >
//                   {field.symbol}{field.label}
//             </div>
//         ))
//       }
//       <label className='text-start block ml-5' htmlFor="">MANAGEMENT</label>
//       {
//         managementObject.map(field=>
//         (
//             <div className=' flex flex-row gap-3 items-center m-2 text-start rounded-2xl pl-8 pr-8 pt-2 pb-2 hover:bg-gray-600  hover:translate-0.5 cursor-pointer '
//               onClick={()=>handleOnClick(field.id)}
//             >
//                <span className='whitespace-nowrap flex flex-row items-center gap-3'> {field.symbol}{field.label} </span>
//             </div>
//         ))
//       }
//       <label className='text-start block ml-5' htmlFor="">CONFIGURATION</label>
//       {
//         configurationObject.map(field=>
//         (
//             <div className=' flex flex-row gap-3 items-center m-2 text-start rounded-2xl pl-8 pr-8 pt-2 pb-2 hover:bg-gray-600  hover:translate-0.5 cursor-pointer '
//               onClick={()=>handleOnClick(field.id)}
//             >
//                <span className='whitespace-nowrap flex flex-row items-center gap-3'> {field.symbol}{field.label} </span>
//             </div>
//         ))
//       }
//     </div>

//   </>
//   )
// }

// export default Sidebar


import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FiHome, FiBarChart2, FiMapPin, FiDatabase, FiBatteryCharging,
  FiPlus, FiSettings, FiWifi
} from 'react-icons/fi';
import { MdPalette, MdSpeed } from 'react-icons/md';

const mainMenuObject = [
  { id: "dashboard", label: "dashboard", symbol: <FiHome /> },
  { id: "Analytics", label: "Analytics", symbol: <FiBarChart2 /> },
  { id: "LiveTracking", label: "LiveTracking", symbol: <FiMapPin /> },
  { id: "Data", label: "Data", symbol: <MdSpeed /> },
  { id: "RawData", label: "RawData", symbol: <FiDatabase /> },
  { id: "BatteryStatus", label: "BatteryStatus", symbol: <FiBatteryCharging /> }
];

const managementObject = [
  { id: "Device Management", label: "Device Management", symbol: <FiPlus /> },
  { id: "OTA Updates", label: "OTA Updates", symbol: <FiSettings /> }
];

const configurationObject = [
  { id: "General Settings", label: "General Settings", symbol: <FiSettings /> },
  { id: "Theme Settings", label: "Theme Settings", symbol: <MdPalette /> },
  { id: "MQTT config", label: "MQTT config", symbol: <FiWifi /> }
];

function Sidebar({ onClose }) {
  const navigate = useNavigate();

  const handleOnClick = (id) => {
    navigate(`/dashboard/${id}`);
    if (onClose) onClose(); // closes sidebar on mobile
  };

  return (
    <div className='bg-[#1A202C] text-white p-4 h-full'>
      {onClose && (
        <button onClick={onClose} className="text-xl text-white float-right mb-4 mr-4">
          ✖
        </button>
      )}

      <label className='block ml-5 mt-2'>MAIN MENU</label>
      {mainMenuObject.map(field => (
        <div key={field.id}
             onClick={() => handleOnClick(field.label)}
             className='flex items-center m-2 rounded-2xl p-2 hover:bg-gray-600 gap-3 cursor-pointer'>
          {field.symbol}{field.label}
        </div>
      ))}

      <label className='block ml-5 mt-4'>MANAGEMENT</label>
      {managementObject.map(field => (
        <div key={field.id}
             onClick={() => handleOnClick(field.id)}
             className='flex items-center m-2 rounded-2xl p-2 hover:bg-gray-600 gap-3 cursor-pointer'>
          {field.symbol}{field.label}
        </div>
      ))}

      <label className='block ml-5 mt-4'>CONFIGURATION</label>
      {configurationObject.map(field => (
        <div key={field.id}
             onClick={() => handleOnClick(field.id)}
             className='flex items-center m-2 rounded-2xl p-2 hover:bg-gray-600 gap-3 cursor-pointer'>
          {field.symbol}{field.label}
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
