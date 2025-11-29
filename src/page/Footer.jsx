import React from 'react'
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";





function Footer() {
    return (
        <footer className="bg-black text-gray-300 py-12 px-6 md:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">

                {/* Logo + Description */}
                <div>
                    <img src="/img/image.png" className='w-[60px]' alt="" />
                    <p className="mt-4 text-sm opacity-80 max-w-xs">
                        Watch unlimited movies, series, and exclusive content anytime,
                        anywhere. Your entertainment, your choice.
                    </p>
                </div>

                {/* Menu */}
                <div>
                    <h2 className="text-lg font-semibold mb-4">Menu</h2>
                    <ul className="space-y-3">
                        <li className="hover:text-red-500 cursor-pointer">Home</li>
                        <li className="hover:text-red-500 cursor-pointer">Movies</li>
                        <li className="hover:text-red-500 cursor-pointer">Series</li>
                        <li className="hover:text-red-500 cursor-pointer">Trending</li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h2 className="text-lg font-semibold mb-4">Support</h2>
                    <ul className="space-y-3">
                        <li className="hover:text-red-500 cursor-pointer">Help Center</li>
                        <li className="hover:text-red-500 cursor-pointer">Terms of Service</li>
                        <li className="hover:text-red-500 cursor-pointer">Privacy Policy</li>
                        <li className="hover:text-red-500 cursor-pointer">Contact Us</li>
                    </ul>
                </div>

                {/* Social */}
                <div>
                    <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
                    <div className='flex gap-[10px] mt-[15px]'>
                        <a href="https://www.facebook.com/share/17sWnVeeUP/" target='blank'><FaFacebookSquare className='text-[30px] rounded-[10px] text-gray-400 hover:text-white cursor-pointer' /></a>
                        <a href="https://youtube.com/@xiaomi?si=je24KOi-LT84twxp" target='blank'><FaYoutubeSquare className='text-[30px] rounded-[10px] text-gray-400 hover:text-white cursor-pointer' /></a>
                        <a href="https://x.com/Xiaomi" target='blank'><FaSquareXTwitter className='text-[30px] rounded-[10px] text-gray-400 hover:text-white cursor-pointer' /></a>
                        <a href="https://www.instagram.com/xiaomi.global/" target='blank'><FaInstagramSquare className='text-[30px] rounded-[10px] text-gray-400 hover:text-white cursor-pointer' /></a>
                       
                    </div>
                </div>
            </div>

            {/* Bottom Line */}
            <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-6">
                © {new Date().getFullYear()} MovieX. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer