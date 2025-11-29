import React from 'react'
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";








function Register() {
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <div className="w-full h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center p-4 bg-[url('https://i.pinimg.com/1200x/b2/88/53/b288539d28e799dd4ab0b1181e75ffaa.jpg')]">
      
      <div className="relative opacity-90 bg-black/20 backdrop-blur-lg backdrop-brightness-75 w-[420px] h-[580px] rounded-2xl p-8 shadow-xl">

        {/* Tabs */}
        <div className="flex gap-6 mb-6">

          <button className="text-white font-semibold cursor-pointer text-[20px] border-b-2 border-[#ff6500] pb-1">
            Sign in
          </button>


          <Link to="/signup">
            <button className="text-gray-400 text-[20px] cursor-pointer hover:text-white pb-1">
              Sign up
            </button>
          </Link>

        </div>

        {/* Inputs */}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Email/Phone"
            className="w-full bg-[#2a2a2a] text-gray-200 p-4 rounded-lg focus:outline-none"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"

              className="w-full bg-[#2a2a2a] text-gray-200 p-4 rounded-lg focus:outline-none"
            />
            <span className="absolute right-4 top-5 text-gray-400 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <IoEye className='text-[20px]'/>
              ) : (
                
                <IoMdEyeOff className='text-[20px]'/>
              )}
            </span>
          </div>
        </div>

        {/* Sign In Button */}
        <button className="w-full bg-[#8a4a1d] text-gray-200 py-4 mt-5 rounded-lg">
          Sign in
        </button>

        {/* Google Button */}
        <button className="w-full bg-amber-900 text-white py-4 mt-3 rounded-lg flex items-center justify-center gap-1">
          <FcGoogle className='text-[20px]' />
          Sign in with Google
        </button>

        {/* Forgot Password */}
        <p className="mt-4 text-[#ff6a00] text-sm cursor-pointer">
          Forgot password?
        </p>

        <p className="text-center text-gray-300 mt-4">More options</p>

        {/* Facebook Icon */}
        <div className="flex justify-center mt-4">
          <FaFacebook className='text-[50px] text-blue-500' />
        </div>
      </div>
    </div>
  );

}

export default Register