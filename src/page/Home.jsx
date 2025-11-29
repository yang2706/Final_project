import React from 'react'
import { FaStar } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Carousel from './Carousel';


function Home() {
  const card = [
    {
      id: 1,
      title: 'Nika',
      img: '/img/photo_2025-11-27_21-47-41.jpg',
      rating: 'She is so cute'
    },
    {
      id: 2,
      title: 'Nika',
      img: '/img/photo_2025-11-27_21-47-55.jpg',
      rating: 'I love her'
    },
    {
      id: 3,
      title: 'In Your Dreams',
      img: 'https://www.projectorreviews.com/wp-content/uploads/2025/11/In-Your-Dreams-610x903.jpg',
      rating: 7.6
    },
    {
      id: 4,
      title: 'Monster Island Movie',
      img: 'https://www.projectorreviews.com/wp-content/uploads/2025/07/Monster-Island-Movie-610x893.jpg',
      rating: 9.1
    },
    {
      id: 5,
      title: 'Frankenstein',
      img: 'https://www.projectorreviews.com/wp-content/uploads/2025/11/Frankenstein.jpg',
      rating: 6.9
    },
    {
      id: 6,
      title: 'Osiris',
      img: 'https://www.projectorreviews.com/wp-content/uploads/2025/11/Osiris-610x813.jpg',
      rating: 7.9
    },
    {
      id: 7,
      title: 'Train Dreams',
      img: 'https://www.projectorreviews.com/wp-content/uploads/2025/11/Train-Dreams.jpg',
      rating: 8.2
    },
    {
      id: 8,
      title: 'A House of Dynamite',
      img: 'https://www.projectorreviews.com/wp-content/uploads/2025/10/A-House-of-Dynamite.jpg',
      rating: 8.9
    },
    {
      id: 9,
      title: 'Welcome to Derry',
      img: 'https://www.projectorreviews.com/wp-content/uploads/2025/10/IT-Welcome-to-Derry.jpg',
      rating: 9.7
    },
    {
      id: 10,
      title: 'The Lost Bus',
      img: 'https://www.projectorreviews.com/wp-content/uploads/2025/10/The-Lost-Bus.jpg',
      rating: 8.8
    },
    {
      id: 11,
      title: 'Samurai Fury',
      img: 'https://www.projectorreviews.com/wp-content/uploads/2025/10/Samurai-Fury.jpg',
      rating: 8.2
    },
    {
      id: 12,
      title: 'Steve',
      img: 'https://www.projectorreviews.com/wp-content/uploads/2025/10/Steve.jpg',
      rating: 9.8
    },
    {
      id: 13,
      title: 'The Toxic Avenger',
      img: 'https://www.projectorreviews.com/wp-content/uploads/2025/09/The-Toxic-Avenger-Movie-Poster-1-610x897.jpg',
      rating: 7.6
    },
    {
      id: 14,
      title: 'Eden',
      img: 'https://www.projectorreviews.com/wp-content/uploads/2025/09/Eden-Movie-Poster-610x904.jpg',
      rating: 9.1
    },
    {
      id: 15,
      title: 'Clash of Empires',
      img: 'https://www.projectorreviews.com/wp-content/uploads/2025/09/Aztec-Batman-Movie-Poster-1-610x865.jpg',
      rating: 6.9
    },
    {
      id: 16,
      title: 'Americana',
      img: 'https://www.projectorreviews.com/wp-content/uploads/2025/09/Americana-Movie-Poster-610x763.jpg',
      rating: 7.9
    },
    {
      id: 17,
      title: 'Honey Dont',
      img: 'https://www.projectorreviews.com/wp-content/uploads/2025/09/Honey-Dont-Movie-Poster-610x904.jpg',
      rating: 8.2
    },
    {
      id: 18,
      title: 'Bloodlines',
      img: 'https://www.projectorreviews.com/wp-content/uploads/2025/06/Final-Destination-Movie-Poster-610x763.jpg',
      rating: 8.9
    },
    {
      id: 19,
      title: 'The Final Reckoning',
      img: 'https://www.projectorreviews.com/wp-content/uploads/2025/08/Mission-Impossible-the-Final-Reckoning-610x904.jpg',
      rating: 9.7
    },
    {
      id: 20,
      title: 'Star People',
      img: 'https://www.projectorreviews.com/wp-content/uploads/2025/08/Star-People.jpg',
      rating: 8.8
    },
    {
      id: 21,
      title: 'Black Phone 2',
      img: 'https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster--dark-mode.png/0/images/masterrepository/Fandango/240922/BP2_Teaser1Sheet6_RGB_1.jpg',
      rating: 8.2
    },
    {
      id: 22,
      title: 'The Conjuring',
      img: 'https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster--dark-mode.png/0/images/masterrepository/Fandango/240617/CJRLR_VERT_MAIN_2764x4096_DOM.jpg',
      rating: 9.8
    }
  ];

  return (
    <div className="w-full bg-black text-white">
     <Carousel/>
      <div className='flex justify-center text-[17px] md:text-[30px] font-bold mt-5 '>
        <h1 className='text-red-500 '>New Movies</h1>
      </div>
      <div className='grid grid-cols-2 gap-5 mt-5 px-4 md:grid-cols-5'>
        {
          card.map(item => (
            <div className='hover:-translate-y-2 cursor-pointer trtransition-all duration-300 object-cover'>
              <Link to={`/${item.id}`}>
                  
                <div className=''>
                  <img src={item.img} alt="" className='h-[200px] w-[300px] rounded-t-2xl md:h-[300px] md:w-[300px]' />
                </div>
                <div>
                  <h1 className='text-[17px]'>{item.title}</h1>

                  <p className='flex items-center gap-1'>{item.rating}<FaStar className='text-amber-400' /></p>
                </div>
              </Link>
              
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default Home