import React from 'react'
import {FiBell, FiUser} from 'react-icons/fi'
import { useState } from 'react';

const dropDownProfile=[
    {id:"MyAccount",label:"MyAccount"},
    {id:"Profile",label:"Profile"},
    {id:"LogOut",label:"LogOut"}
    
]

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleOnClick = () => {
  setShowDropdown(!showDropdown); 

};
  return (
    <div className='flex justify-between   w-full pl-4  '>
      <label className='text-[40px] text-white ' htmlFor="">Vehicle Tracker </label>
      <div className="flex justify-end p-3 items-center space-x-7 relative">
      <span className="ml-2 text-white text-[20px]"><FiBell /></span>

        <div className=" flex justify-center items-center ">
          <span className="ml-2 text-white text-[20px]" onClick={handleOnClick}>
            <FiUser />
          </span>
          
          {showDropdown && (
            <div className="absolute top-12 right-5 bg-white shadow rounded "style={{backgroundColor:"#1A202C"}}>
              {dropDownProfile.map((field) => (
                <p key={field.id} className="px-4 py-2 transition-transform hover:bg-gray-600 hover:scale-110 cursor-pointer text-white">
                  {field.label}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>

    </div> 
  )
}

export default Navbar
