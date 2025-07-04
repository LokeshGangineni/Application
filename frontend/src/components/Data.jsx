import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

function Data() {

    const navigate=useNavigate();
    const handleOnClick=()=>
    {
        console.log("came inside function");
        navigate('/dashboard/personalData');
        console.log("exited from function")
    }
  return (

    <div>
        <button onClick={handleOnClick}>Submit</button>
      <h2>this is data page</h2>
      <Outlet />
    </div>
  )
}

export default Data
