import React from 'react'
import { useNavigate } from 'react-router-dom'
import { registerUser } from '../api/authAPI';
import { useState } from 'react';

function Register() {
    const navigate  = useNavigate();
    const [userInput, setUserInput] = useState({
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    })
    const {username, email, password, confirmPassword} = userInput;

    const [user, setUser]= useState({
    })


    const signup = async()=>{
      if(password!=confirmPassword){
        alert("Password mismatch")
        return
      }

     const user = await registerUser(username,email,password)
      setUser(user);
    }


    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        setUserInput((prevUser) => ({
    ...prevUser,
    [name]: value
  }));
    } 


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
          name='username'
          value={username}
          onChange={handleInputChange}
          className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black"
        />
        <input
          type="email"
          placeholder="Email"
          name='email'
          value={email}
          onChange={handleInputChange}
          className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black"
        />
        <input
          type="password"
          placeholder="Password"
          name='password'
          value={password}
          onChange={handleInputChange}
          className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleInputChange}

          className="w-full mb-6 px-4 py-2 border rounded-md  focus:outline-none focus:ring-1 focus:ring-black"
        />
        <button onClick={signup} className="w-full bg-black text-white py-2 rounded-md hover:opacity-90">
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