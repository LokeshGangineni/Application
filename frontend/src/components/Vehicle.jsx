import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const vehicleRegistrationCommonField = [
  {
    id: "vehicleId",label: "Vehicle Id",type: "text",placeholder: "Enter Vehicle Id"},
  { id: "VehicleName", label: "Vehicle Name", type: "text", placeholder: "Enter vehicle Name" },
  { id: "Speed", label: "Speed", type: "number", placeholder: "Enter speed " ,min:"0" },
  { id: "Status",label: "Status",type: "text",placeholder: "Enter status"}
];
const EvVehicleRegistrationField = [
  { id: "Battery", label: "Battery", type: "number", placeholder: "Enter battery" },
  { id: "ChargingStatus", label: "Charging Status", type: "text", placeholder: "Enter Charging status " },
  
];
const fuelVehicleRegistrationField = [
  { id: "FuelType", label: "Fuel Type", type: "text", placeholder: "Enter Fuel Type" },
  { id: "FuelPercent", label: "Fuel Percent", type: "number", placeholder: "Enter Fuel percent " },
  
];

function Vehicle() {

    const [vehicleType,setVehicleType]=useState("");
    

    const handlePrevent=(e)=>
    {
        e.preventDefault();
    }

    const navigate=useNavigate();
    const [formData,setFormData]=useState({
        vehicleId:"",
        VehicleName:"",
        Battery : "",
        Speed : "",
        Status :""

    })
    const handleChange=(e)=>
    {
        const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    }
    const handleOnclick=()=>
    {
        navigate('/dashboard');
    }
    const handleOnclickForSelection=()=>
    {
        
    }
    
  return (
    <> 
        <div className='flex flex-col items-center justify-center ali min-h-screen bg-white '>
            <div className='flex flex-row text-white  rounded-2xl   mb-6 gap-10' style={{backgroundColor:''}}>
                <button
            onClick={() => setVehicleType("Electric")}
            className={`pl-6 pr-6 py-2 rounded-lg font-semibold transition-all duration-200
                ${vehicleType === "Electric" ? "bg-blue-600 text-white" : "bg-gray-200 text-black hover:bg-blue-300 cursor-pointer"}`}>
            Electric
            </button>

            <button
            onClick={() => setVehicleType("Fuel")}
            className={`pl-6 pr-6 py-2 rounded-lg font-semibold transition-all duration-200
                ${vehicleType === "Fuel" ? "bg-green-600 text-white" : "bg-gray-200 text-black hover:bg-green-300 cursor-pointer"}`}>
            Fuel
            </button>
            </div>
           
            { vehicleType &&  <form onSubmit={handlePrevent} action=" " className='text-white border-1 p-16  bg-blue-950 rounded-4xl  flex-col justify-center'>
                
            <h2 className= 'items-center text-white text-[40px] font-bold block tracking-wide mb-9   '>Vehicle Registration</h2>
            

            {
               vehicleRegistrationCommonField.map((field)=>
                    (
                        <div className='flex items-center gap-3 pb-4 '>

                    <label className=' text-lg  ' htmlFor="">{field.label} : </label>
                    <input  
                    id={field.id}
                    placeholder={field.placeholder}
                    type={field.type}
                    min={field.min}
                    onChange={handleChange}
                    required
                    className=' outline-0  focus:outline-none w-[250px] tracking-widest focus:ring-2 focus:ring-white-400 rounded-2xl pl-2 '
                    />
                    </div>
                ))
            }
            {
               vehicleType=='Electric' && EvVehicleRegistrationField.map((field)=>
                    (
                        <div className='flex items-center gap-3 pb-4 '>

                    <label className=' text-lg  ' htmlFor="">{field.label} : </label>
                    <input  
                    id={field.id}
                    placeholder={field.placeholder}
                    type={field.type}
                    min={field.min}
                    onChange={handleChange}
                    className=' outline-0  focus:outline-none w-[250px] tracking-widest focus:ring-2 focus:ring-white-400 rounded-2xl pl-2 '
                    />
                    </div>
                ))
            }
           

         
            {
                vehicleType=='Fuel' && fuelVehicleRegistrationField.map((field)=>
                    (
                        <div className='flex items-center gap-3 pb-4 '>

                    <label className=' text-lg  ' htmlFor="">{field.label} : </label>
                    <input  
                    id={field.id}
                    placeholder={field.placeholder}
                    type={field.type}
                    min={field.min}
                    onChange={handleChange}
                    className=' outline-0  focus:outline-none w-[250px] tracking-widest focus:ring-2 focus:ring-white-400 rounded-2xl pl-2 '
                    />
                    </div>
                ))
            }
            <button  onClick={handleOnclick} type='button' className='border rounded-2xl  px-2  hover:bg-blue-400 cursor-pointer' >Submit</button>
            </form>
            }
        </div>

        </>
  )
}

export default Vehicle
