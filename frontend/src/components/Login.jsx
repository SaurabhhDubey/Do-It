import { loginUser } from '../api/authAPI';
import {useDispatch} from "react-redux";
import { loginSuccess } from '../redux/slices/authSlice';

import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");

  const handleChange = async (e)=>{e.preventDefault();
    const result = await loginUser(email , password);
    if(result?.token){dispatch(loginSuccess(result)); // result?.token , this formate is known as optional chaining means result exists then check token
      navigate("/");
    }else{
      alert(result?.message || "login failed")
    }
    
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-sky-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-sky-200/40 to-cyan-200/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-gradient-to-br from-teal-200/30 to-emerald-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute -bottom-20 right-1/3 w-72 h-72 bg-gradient-to-br from-sky-100/50 to-indigo-100/50 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Header */}
      <header className="relative z-10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => navigate("/")}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-sky-200/50 group-hover:shadow-sky-300/50 transition-all duration-300 group-hover:scale-105">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Do<span className="bg-gradient-to-r from-sky-600 to-cyan-500 bg-clip-text text-transparent">-IT</span>
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-80px)] px-4 py-8">
        <div className="w-full max-w-5xl grid lg:grid-cols-2 gap-8 items-center">
          
          {/* Left Side - Illustration & Text */}
          <div className="hidden lg:block text-center lg:text-left">
            <div className="mb-8">
              <h1 className="text-4xl xl:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-800 via-slate-700 to-sky-600 bg-clip-text text-transparent leading-tight">
                Welcome Back!
              </h1>
              <p className="text-slate-600 text-lg max-w-md">
                Login to access your account and manage all your home service bookings in one place.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-200/30 to-cyan-200/30 rounded-3xl blur-2xl" />
              <img
                src="https://res.cloudinary.com/dyjmgpb5p/image/upload/v1766685416/ChatGPT_Image_Dec_25_2025_11_10_10_PM_mvo40m.png"
                alt="Home Services"
                className="relative w-full max-w-sm mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
            <div className="backdrop-blur-xl bg-white/70 border border-white/40 rounded-3xl shadow-xl shadow-slate-200/50 p-8 hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-500">
              {/* Form Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-2xl shadow-lg shadow-sky-200/50 mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold bg-linear-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                  Login to Your Account
                </h2>
                <p className="text-slate-500 mt-2 text-sm">Enter your credentials to continue</p>
              </div>
 

             
              {/* Form Fields */}
              <div className="space-y-4">
                <div className="group">
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <svg className="w-5 h-5 text-slate-400 group-focus-within:text-sky-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <input
                      type="email"
                      name = "email"
                      placeholder="Enter your email"
                      onChange={(e)=>setEmail(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 bg-white/80 border border-slate-200/80 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-400 focus:bg-white transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Password</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <svg className="w-5 h-5 text-slate-400 group-focus-within:text-sky-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <input
                      type="password"
                      name = "password"
                      onChange={(e)=> setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className="w-full pl-12 pr-4 py-3 bg-white/80 border border-slate-200/80 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-400 focus:bg-white transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-sky-500 focus:ring-sky-500/50" />
                    <span className="text-sm text-slate-600">Remember me</span>
                  </label>
                  <a href="#" className="text-sm text-sky-600 hover:text-sky-700 font-medium hover:underline">
                    Forgot Password?
                  </a>
                </div>
              </div>

              {/* Submit Button */}
              <button className="w-full mt-6 bg-gradient-to-r from-sky-500 to-cyan-500 text-white py-3.5 rounded-xl font-semibold shadow-lg shadow-sky-200/50 hover:shadow-xl hover:shadow-sky-300/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300" 
              onClick={handleChange}>
                Sign In
              </button>

              {/* Sign Up Link */}
              <p className="text-center text-slate-600 mt-6">
                Don't have an account?{" "}
                <span 
                  className="text-sky-600 font-semibold cursor-pointer hover:text-sky-700 hover:underline transition-colors"
                  onClick={() => navigate("/register")}
                >
                  Sign up
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
