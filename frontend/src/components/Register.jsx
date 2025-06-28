import React from "react";
import Login from "./Login";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const formFields = [
  {
    id: "name",
    label: "Full Name",
    type: "text",
    placeholder: "Enter Full Name",
  },
  { id: "email", label: "Email", type: "email", placeholder: "Enter Email" },
  { id: "phone", label: "Phone", type: "text", placeholder: "Enter Phone" },
  { id: "gender", label: "Gender", type: "text", placeholder: "Enter Gender" },
  {
    id: "password",
    label: "Password",
    type: "text",
    placeholder: "Enter Password",
  },
];

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    console.log("clicked");

    e.preventDefault();
    // navigate("/login")
    axios
      .post("http://localhost:5000/register", formData)
      .then((res) => {
        console.log(res.data), navigate("/login");
      })
      .catch((err) => console.log(err));
  };
  return (
    // <div className="flex justify-center items-center h-screen bg-gray-200">
    //   <form className="flex flex-col gap-4 bg-white p-6 rounded-xl shadow-md w-full max-w-sm">

    //     <label htmlFor="" className='text-2xl mb-4'>RegisterForm</label>

    //     <label htmlFor="name" className="text-gray-700 font-semibold">Full Name</label>
    //     <input
    //       type="text"
    //       id="name"
    //       placeholder='Enter fullName'
    //       className="border border-gray-300  px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300 rounded-2xl"
    //     />

    //     <label htmlFor="email" className="text-gray-700 font-semibold">Email</label>
    //     <input
    //       type="email"
    //       id="email"
    //       placeholder='Enter Email '
    //       className="border border-gray-300  px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300 rounded-2xl"
    //     />
    //     <label  htmlFor="phone">Phone</label>
    //     <input
    //       id="phone"
    //       type='text'
    //       placeholder='Enter Phone'
    //       className=' border border-gray-300 px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300 rounded-2xl'/>

    //     <label htmlFor="gender">Gender</label>
    //     <input
    //       type="text"
    //       id='gender'
    //       placeholder='Enter Gender'
    //       className='border border-gray-300 focus:ring-blue-300 focus:outline-none px-3 py-2 rounded-2xl' />

    //     <button
    //       type="submit"
    //       className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
    //     >
    //       Submit
    //     </button>

    //     <h5>Alreay registered?<Link className='text-blue-600 underline' to="/login"> login</Link>  </h5>
    //   </form>
    // </div>
    <div className=" flex flex-col justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-white p-6 rounded-xl shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-center">Register Form</h2>
        {formFields.map((field) => (
          <div
            key={field.id}
            className="flex flex-col justify-center items-center  gap-4   "
          >
            <label className="">{field.label}</label>
            <input
              type={field.type}
              id={field.id}
              placeholder={field.placeholder}
              value={formData[field.id]}
              onChange={handleChange}
              className="border border-gray-300 px-6 py-2 rounded-2xl focus:outline-none focus:ring focus:ring-blue-300 w-full "
              required
            />
          </div>
        ))}
        <button className="bg-blue-500 text-white py-2 px-0 rounded hover:bg-blue-600 transition duration-300 ">
          Submit
        </button>
        <h4>
          Already Registered? {"  "}
          <Link className="text-blue-300 underline" to="/login">
            login
          </Link>
        </h4>
      </form>
    </div>
  );
}

export default Register;
