import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { Link } from 'react-router-dom';
function Navbar1() {
    return (
        <div className='w-full flex justify-between bg-black text-white py-2 px-6'>
            <div className='flex items-center'>
                <img src="/img/image.png" alt="" className='w-[60px]' />
            </div>
            <div className='hidden md:flex items-center text-[17px] gap-2 text-gray-300'>
                <Link to={'/home'}>
                    <p className='cursor-pointer hover:text-white hover:bg-white/15 bg-white/10 backdrop-blur-md border-b border-white/20 px-3 py-1 rounded-2xl hover:scale-105 hover:-translate-y-1.5 transition-transform duration-300'>Home</p>
                </Link>
                <Link to={'/movie'}>
                    <p className='cursor-pointer hover:text-white hover:bg-white/15 bg-white/10 backdrop-blur-md border-b border-white/20 px-3 py-1 rounded-2xl hover:scale-105 hover:-translate-y-1.5 transition-transform duration-300'>Movie</p>
                </Link>
                <Link>
                    <p className='cursor-pointer hover:text-white hover:bg-white/15 bg-white/10 backdrop-blur-md border-b border-white/20 px-3 py-1 rounded-2xl hover:scale-105 hover:-translate-y-1.5 transition-transform duration-300'>Trending</p>
                </Link>
                <Link>
                    <p className='cursor-pointer hover:text-white hover:bg-white/15 bg-white/10 backdrop-blur-md border-b border-white/20 px-3 py-1 rounded-2xl hover:scale-105 hover:-translate-y-1.5 transition-transform duration-300'>Contact</p>
                </Link>
                <Link>
                    <p className='cursor-pointer hover:text-white hover:bg-white/15 bg-white/10 backdrop-blur-md border-b border-white/20 px-3 py-1 rounded-2xl hover:scale-105 hover:-translate-y-1.5 transition-transform duration-300'>Service</p>
                </Link>

            </div>
            <div className='flex items-center gap-4'>
                <div className=' items-center  bg-white/10 flex backdrop-blur-md px-3 py-1 rounded-full border border-neutral-700'>
                    <CiSearch className='text-2xl' />
                    <input
                        type="text"
                        placeholder="Search movies..."
                        className="hidden md:flex lg:flex lg-hidden bg-transparent outline-none text-sm px-2 py-1"
                    />
                </div>
                <Link to={'/register'}>
                    <FaUser className="cursor-pointer text-2xl hover:text-red-500" />
                </Link>

                <button className="md:hidden text-3xl"><IoMdMenu /></button>

            </div>
        </div>
    )
}

export default Navbar1