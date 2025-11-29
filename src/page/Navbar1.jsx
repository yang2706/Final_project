import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { Link } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";

function Navbar1() {
    const [open, setopen] = useState(false);
    const [search, setsearch] = useState(false);
    

    return (
        <div className='w-full fixed top-0 left-0 z-50 opacity-90  flex justify-between bg-black/90 text-white py-2 px-6'>
            <div className='flex items-center'>
                <img src="/img/image.png" alt="" className='w-[40px] md:w-[60px] rounded-2xl' />
            </div>
            <div className='hidden md:flex items-center text-[17px] gap-2 text-gray-300'>
                <Link to={'/home'}>
                    <p className='cursor-pointer hover:text-white hover:bg-white/15 bg-white/10 backdrop-blur-md border-b border-white/20 px-3 py-1 rounded-2xl hover:scale-105 hover:-translate-y-1.5 transition-transform duration-300'>Home</p>
                </Link>
                <Link to={'/movie'}>
                    <p className='cursor-pointer hover:text-white hover:bg-white/15 bg-white/10 backdrop-blur-md border-b border-white/20 px-3 py-1 rounded-2xl hover:scale-105 hover:-translate-y-1.5 transition-transform duration-300'>Movie</p>
                </Link>
                <Link to={'/trending'}>
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
                <div className=' items-center bg-white/10 flex  backdrop-blur-md px-3 py-1 rounded-full border border-neutral-700' onClick={() => setsearch(!search)}>
                    {search ? <RxCross2 className='text-2xl' /> : <CiSearch className='text-2xl' />}
                    <input
                        type="text"
                        placeholder="Search movies..."
                        className="hidden md:flex bg-transparent outline-none text-sm px-2 py-1"
                       
                    />
                </div>
                <Link to={'/register'}>
                    <FaUser className="cursor-pointer text-2xl hover:text-red-500" />
                </Link>

                <button className="md:hidden text-3xl" onClick={() => setopen(!open)}>{open ? <RxCross2 /> : <IoMdMenu />}</button>

            </div>

            {open && (

                <ul className="absolute top-13 ml-[277px] opacity-90 bg-black/80 leading-8 items-center w-[23%] text-white text-[20px] backdrop-blur-lg z-50 flex flex-col gap-4  md:hidden">
                    <Link to={'/home'}>
                        <li className="">Home</li>
                    </Link>
                    <Link to={'/movie'}>
                        <li className=" cursor-pointer">Movie</li>
                    </Link>

                    <Link to={'/trending'}>
                        <li className=" cursor-pointer">Trending</li>
                    </Link>

                    <Link>
                        <li className=" cursor-pointer">Contact</li>
                    </Link>

                    <Link>
                        <li className=" cursor-pointer">Service</li>
                    </Link>

                </ul>



            )}
            {
                search && (

                    <input
                        type="text"
                        placeholder="Search movies..."
                        className="absolute md:hidden w-full backdrop-blur-lg z-50 top-18 h-[50px] text-white font-bold bg-white/20 opacity-80 text-center left-0 outline-none text-sm px-2 py-1"
                    />
                )
            }







        </div>
    )
}

export default Navbar1