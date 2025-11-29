import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
function SignUp() {
  const [showPassword1, setShowPassword1] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  /*Normal funtion*/
  /*
  function clicks(){ 
    setShowPassword(!showPassword)
  }
    */

  return (
    <div className="w-full h-screen  flex items-center bg-center bg-cover bg-no-repeat justify-center p-4 bg-[url(https://i.pinimg.com/736x/b8/bc/89/b8bc89451a1d1fa5b2b1448d8470a65e.jpg)]">
      
      <div className=" backdrop-brightness-75 opacity-90 bg-black/20 backdrop-blur-lg w-[420px] h-[580px] rounded-2xl p-8 shadow-xl">



        {/* Tabs */}
        <div className="flex gap-6 mb-6">
          <Link to="/register">
            <button className="text-gray-400 pb-1 text-[20px] cursor-pointer hover:text-white">
              Sign in
            </button>
          </Link>


          <button className="text-white font-semibold text-[20px] cursor-pointer pb-1 border-b-2 border-[#ff6500]">
            Sign up
          </button>
        </div>

        {/* REGION SELECT */}
        <div className="relative mb-4">
          <select className="w-full bg-[#2a2a2a] text-gray-300 p-4 rounded-lg appearance-none focus:outline-none">
            <option>Region</option>
            <option>Cambodia</option>
            <option>Japan</option>
            <option>Vietnam</option>
            <option>Singapore</option>
            <option>Korea</option>
            <option>China</option>
            <option>USA</option>
            <option>Russia</option>
          </select>

          <span className="absolute right-4 top-3.5 text-gray-400">
            ▼
          </span>
        </div>

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="w-full bg-[#2a2a2a] text-gray-200 p-4 rounded-lg mb-4 focus:outline-none"
        />

        {/* Password */}
        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Set password"
            className="w-full bg-[#2a2a2a] text-gray-200 p-4 rounded-lg focus:outline-none"
          />
          <span className="absolute right-4 top-5 text-gray-400 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ?
              (
                <IoEye className='text-[20px]' />
              ) : (
                <IoMdEyeOff className='text-[20px]' />)}
          </span>
        </div>

        {/* Confirm Password */}
        <div className="relative mb-2">
          <input
            type={showPassword1 ? "text" : "password"}
            placeholder="Enter your password again"
            className="w-full bg-[#2a2a2a] text-gray-200 p-4 rounded-lg focus:outline-none"
          />
          <span className="absolute right-4 top-5 text-gray-400 cursor-pointer" onClick={() => setShowPassword1(!showPassword1)}>
            {showPassword1 ? (<IoEye className='text-[20px]' />) : (<IoMdEyeOff className='text-[20px]' />)}
          </span>
        </div>

        {/* Password rules */}
        <p className="text-gray-400 text-sm mb-4 leading-tight">
          Password must be 8–16 characters and include both
          <br /> numbers and letters
        </p>

        {/* Checkbox */}
        <label className="flex items-start gap-2 mt-2 text-gray-300 text-sm">
          <input type="checkbox" className="w-4 h-4 bg-[#333] accent-[#ff6500]" />
          <span>
            I've read and agreed to the Xiaomi Account{" "}
            <a className="text-[#ff6500] underline">User Agreement</a> and{" "}
            <a className="text-[#ff6500] underline">Privacy Policy</a>.
          </span>
        </label>

        {/* NEXT BUTTON */}
        <button className="w-full bg-[#8a4a1d] text-gray-300 py-4 rounded-lg mt-6">
          Next
        </button>
      </div>
    </div>
  )
}

export default SignUp