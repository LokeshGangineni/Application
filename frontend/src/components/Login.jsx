import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import home from './Home'

const loginFields = [
  { id: "userName", label: "UserName", type: "text", placeholder: "Enter UserName" },
  { id: "password", label: "Password", type: "password", placeholder: "Enter Password" },
];

function Login() {
    const [formData,setFormData]=useState({
            userName:'',
            password:''
        }
    );
    const [msg,setMsg]=useState("");
    const navigate=useNavigate();
    const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };
    const handleSubmit=(e)=>
    {
        console.log("started at login page");
        e.preventDefault();
        axios.post("http://localhost:5000/login",formData)
        .then((res)=>
        {
            console.log(res.data),
            console.log("msg returned to frontend")
            console.log(res.data);
           
            navigate('/vehicleRegistration')
            console.log("navigation completed")
        })
        .catch((err)=>
        {
            console.log("error is : ",err)

             setMsg(err.response.data.message);
        })
    }
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-gray-400' >
        
        <form onSubmit={handleSubmit} className='bg-white flex flex-col justify-center items-center gap-4 shadow-md p-6  max-w-sm rounded-2xl w-full   '>
            <h1 className='text-3xl text-center font-bold'>Login </h1>
            
            {
                loginFields.map(field=>
                    (
                    <div key={field.id}  className='flex flex-col justify-center items-center gap-4'>
                        <label className='px-3 ' htmlFor="">{field.label}</label>
                        <input 
                        id={field.id}
                        type={field.type}
                        placeholder={field.placeholder} 
                        onChange={handleChange}
                        className='border border-gray-600 px-3 py-1 focus:outline-none focus:ring focus:ring-blue-300 rounded-2xl'
                        />
                    </div>
                    
                ))
            }
            <button  className='border border-black-300 hover:bg-blue-400 px-3 py-0.5 rounded-2xl'>Submit</button>
            <h2 className='text-black' >{msg} </h2>
        </form>
    </div>
  )
}

export default Login

