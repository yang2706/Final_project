import React from 'react'
import { FaStar } from "react-icons/fa6";


function Home() {
  const card = [
    {
      title: 'Use Force',
      img: 'https://m.media-amazon.com/images/M/MV5BNTgzMjg0NGYtZTI0OC00OWViLWJjOWYtNDVhMjUxMGZhNTgzXkEyXkFqcGc@._V1_.jpg',
      rating: 8.2
    },
    {
      title: 'Tom Hardy',
      img: 'https://www.projectorreviews.com/wp-content/uploads/2025/04/Havoc.jpg',
      rating: 9.8
    },
    {
      title: 'In Your Dreams',
      img: 'https://www.projectorreviews.com/wp-content/uploads/2025/11/In-Your-Dreams-610x903.jpg',
      rating: 7.6
    },
    {
      title: 'Monster Island Movie',
      img: 'https://www.projectorreviews.com/wp-content/uploads/2025/07/Monster-Island-Movie-610x893.jpg',
      rating: 9.1
    },
    {
      title: 'Frankenstein',
      img: 'https://www.projectorreviews.com/wp-content/uploads/2025/11/Frankenstein.jpg',
      rating: 6.9
    },
     {
      title: 'Osiris',
      img: 'https://www.projectorreviews.com/wp-content/uploads/2025/11/Osiris-610x813.jpg',
      rating: 7.9
    },
    {
      title: 'Train Dreams',
      img: 'https://www.projectorreviews.com/wp-content/uploads/2025/11/Train-Dreams.jpg',
      rating: 8.2
    },
    {
      title: 'A House of Dynamite',
      img: 'https://www.projectorreviews.com/wp-content/uploads/2025/10/A-House-of-Dynamite.jpg',
      rating: 8.9
    },
    {
      title: 'Welcome to Derry',
      img: 'https://www.projectorreviews.com/wp-content/uploads/2025/10/IT-Welcome-to-Derry.jpg',
      rating: 9.7
    },
    {
      title: 'The Lost Bus',
      img: 'https://www.projectorreviews.com/wp-content/uploads/2025/10/The-Lost-Bus.jpg',
      rating: 8.8
    },
    {
      title: 'Samurai Fury',
      img: 'https://www.projectorreviews.com/wp-content/uploads/2025/10/Samurai-Fury.jpg',
      rating: 8.2
    },
    {
      title: 'Steve',
      img: 'https://www.projectorreviews.com/wp-content/uploads/2025/10/Steve.jpg',
      rating: 9.8
    },
    {
      title: 'The Toxic Avenger',
      img: 'https://www.projectorreviews.com/wp-content/uploads/2025/09/The-Toxic-Avenger-Movie-Poster-1-610x897.jpg',
      rating: 7.6
    },
    {
      title: 'Eden',
      img: 'https://www.projectorreviews.com/wp-content/uploads/2025/09/Eden-Movie-Poster-610x904.jpg',
      rating: 9.1
    },
    {
      title: 'Clash of Empires',
      img: 'https://www.projectorreviews.com/wp-content/uploads/2025/09/Aztec-Batman-Movie-Poster-1-610x865.jpg',
      rating: 6.9
    },
     {
      title: 'Americana',
      img: 'https://www.projectorreviews.com/wp-content/uploads/2025/09/Americana-Movie-Poster-610x763.jpg',
      rating: 7.9
    },
    {
      title: 'Honey Dont',
      img: 'https://www.projectorreviews.com/wp-content/uploads/2025/09/Honey-Dont-Movie-Poster-610x904.jpg',
      rating: 8.2
    },
    {
      title: 'Final Destination: Bloodlines',
      img: 'https://www.projectorreviews.com/wp-content/uploads/2025/06/Final-Destination-Movie-Poster-610x763.jpg',
      rating: 8.9
    },
    {
        title: 'Impossible - The Final Reckoning',
      img: 'https://www.projectorreviews.com/wp-content/uploads/2025/08/Mission-Impossible-the-Final-Reckoning-610x904.jpg',
      rating: 9.7
    },
    {
      title: 'Star People',
      img: 'https://www.projectorreviews.com/wp-content/uploads/2025/08/Star-People.jpg',
      rating: 8.8
    },

  ];
  return (
    <div className="w-full bg-black text-white">


      <section className="relative bg-cover bg-no-repeat opacity-70 bg-[url('https://i.pinimg.com/1200x/3b/88/8a/3b888ae33caddd009ea0262a6dace304.jpg')] w-full h-[70vh]">
        <img
          src=""
          className="w-full h-full object-cover opacity-70"
        />

        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-transparent flex flex-col justify-center px-10">
          <h1 className="text-2xl md:text-5xl font-bold max-w-xl leading-tight">
            Watch The Best Movies & Series
          </h1>
          <p className="mt-4 text-lg max-w-md opacity-80">
            Stream unlimited movies and series anytime, anywhere.
          </p>
          <button className="mt-6 bg-red-600 cursor-pointer md:w-[200px] px-4 py-2 w-[140px] rounded-lg text-lg font-semibold hover:bg-red-700 transition">
            Explore Now
          </button>
        </div>
      </section>
      <div className='flex justify-center text-[20px] md:text-[40px] font-bold mt-5 '>
        <h1>New Movies</h1>
      </div>
      <div className='grid grid-cols-2 gap-5 mt-5 px-4 md:grid-cols-5'>
        {
          card.map(item => (
            <div className='hover:-translate-y-2 cursor-pointer trtransition-all duration-300 object-cover'>

              <div className=''>
                <img src={item.img} alt="" className='h-[200px] w-[300px] rounded-t-2xl md:h-[300px] md:w-[300px]' />
              </div>
              <div>
                <h1 className='text-[17px]'>{item.title}</h1> 
                
                <p className='flex items-center gap-1'>{item.rating}<FaStar className='text-amber-400'/></p>
              </div>


            </div>
          ))
        }
      </div>

    </div>
  )
}

export default Home