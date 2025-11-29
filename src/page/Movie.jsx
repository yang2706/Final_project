import React from 'react'
import Carousel from './Carousel'

function Movie() {
  return (
    <div className='bg-black w-full text-white'>
      <section className="relative opacity-70 bg-cover bg-no-repeat bg-[url('https://i.pinimg.com/1200x/3b/88/8a/3b888ae33caddd009ea0262a6dace304.jpg')] w-full h-[40vh] md:h-[70vh]">
        <img
          src=""
          className="w-full h-full object-cover opacity-70"
        />

        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-transparent flex flex-col justify-center px-10">
          <h1 className="text-xl md:text-5xl font-bold max-w-60 md:max-w-xl leading-tight">
            Watch The Best Movies & Series
          </h1>
          <p className="mt-4 text-md md:text-lg max-w-50 leading-6 md:max-w-md opacity-80">
            Stream unlimited movies and series anytime, anywhere.
          </p>
          <button className="mt-6 bg-red-600 cursor-pointer md:w-[200px] px-4 py-2 w-[140px] rounded-lg text-lg font-semibold hover:bg-red-700 transition">
            Explore Now
          </button>
        </div>
      </section>
      
        
      
    </div>
  )
}

export default Movie