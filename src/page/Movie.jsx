import React from 'react'

function Movie() {
  return (
    <div className='bg-black w-full text-white'>

      {/* HERO SECTION */}
      <section className="relative opacity-70 bg-cover bg-no-repeat bg-[url('https://i.pinimg.com/1200x/3b/88/8a/3b888ae33caddd009ea0262a6dace304.jpg')] w-full h-[40vh] md:h-[70vh]">
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


      {/* TRENDING MOVIES */}
      <section className="px-6 py-10">
        <h2 className="text-2xl font-bold mb-4">🔥 Trending Now</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[
            "https://www.projectorreviews.com/wp-content/uploads/2025/04/Havoc.jpg",
            "https://www.projectorreviews.com/wp-content/uploads/2025/11/In-Your-Dreams-610x903.jpg",
            "https://www.projectorreviews.com/wp-content/uploads/2025/07/Monster-Island-Movie-610x893.jpg",
            "https://www.projectorreviews.com/wp-content/uploads/2025/11/Frankenstein.jpg",
            "https://www.projectorreviews.com/wp-content/uploads/2025/11/Osiris-610x813.jpg",
            "https://www.projectorreviews.com/wp-content/uploads/2025/11/Train-Dreams.jpg",
          ].map((img, index) => (
            <div key={index} className="rounded-lg overflow-hidden">
              <img
                src={img}
                className="w-full h-48 object-cover hover:scale-105 duration-300"
              />
            </div>
          ))}
        </div>
      </section>


      {/* FEATURED CAROUSEL */}
      <section className="px-6 py-10">
        <h2 className="text-2xl font-bold mb-4">🎬 Featured Movies</h2>

        <div className="flex gap-6 overflow-x-auto scrollbar-hide">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="min-w-[300px] h-[180px] bg-gray-800 rounded-lg overflow-hidden"
            >
              <img
                src="https://m.media-amazon.com/images/M/MV5BNTgzMjg0NGYtZTI0OC00OWViLWJjOWYtNDVhMjUxMGZhNTgzXkEyXkFqcGc@._V1_.jpg"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>


      {/* CATEGORIES */}
      <section className="px-6 py-10">
        <h2 className="text-2xl font-bold mb-4">📂 Categories</h2>

        <div className="flex gap-4 flex-wrap">
          {["Action", "Drama", "Sci-Fi", "Comedy", "Horror", "Anime", "Romance", "Adventure"].map((cat) => (
            <button
              key={cat}
              className="px-4 py-2 rounded-full bg-gray-800 hover:bg-gray-700 duration-200"
            >
              {cat}
            </button>
          ))}
        </div>
      </section>


      {/* POPULAR ACTORS */}
      <section className="px-6 py-10">
        <h2 className="text-2xl font-bold mb-4">⭐ Popular Actors</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {[
            "https://www.mercurynews.com/wp-content/uploads/2016/09/20160513_074630_leonardo_dicaprio_24734_13519.jpg?w=800",
            "https://images.fandango.com/ImageRenderer/300/0/redesign/static/img/default_poster.png/0/images/masterrepository/performer%20images/205550/ChrisEvans-2019_r.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNis6IHeTmK1qx6_iQfIb3dLK6hkh79A0qAA&s",
            "https://images.fandango.com/ImageRenderer/300/0/redesign/static/img/default_poster.png/0/images/masterrepository/performer%20images/706404/MarkWalhberg-2020_r.jpg",
            "https://static.stacker.com/s3fs-public/styles/slide_desktop/s3/LiamNeesonJ118_0.png",
          ].map((actor, index) => (
            <div key={index} className="text-center">
              <img
                src={actor}
                className="w-full h-40 object-cover rounded-xl hover:scale-105 duration-300"
              />
              <p className="mt-2 text-sm opacity-80">Actor {index + 1}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

export default Movie
