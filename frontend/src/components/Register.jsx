import React from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {
    const navigate  = useNavigate();
  return (
    <div>
        <div className='min-h-screen flex items-center justify-center bg-purple-200'>
            <div className='w-full max-w-md bg-white p-8 rounded-xl shadow-lg'>
             <h2 className="text-2xl font-semibold mb-6 text-center">
          Create Account
        </h2>
        <input
          type="text"
          placeholder="Full Name"
          className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full mb-6 px-4 py-2 border rounded-md  focus:outline-none focus:ring-1 focus:ring-black"
        />
        <button className="w-full bg-black text-white py-2 rounded-md hover:opacity-90">
          Sign Up
        </button>
        <p className="text-sm text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <span className="text-black font-medium cursor-pointer hover:underline" onClick={()=>navigate("/login")}>
            Login
          </span>
        </p>
            </div>

        </div>
    </div>
  )
}

export default Register