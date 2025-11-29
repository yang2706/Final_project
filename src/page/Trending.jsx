import React, { useState } from "react";

function Trending() {
  const trending = [
    {
      id: 1,
      title: "Deadpool & Wolverine",
      img: "https://m.media-amazon.com/images/M/MV5BNTgzMjg0NGYtZTI0OC00OWViLWJjOWYtNDVhMjUxMGZhNTgzXkEyXkFqcGc@._V1_.jpg",
      rating: 8.6,
      cat: "Action",
    },
    {
      id: 2,
      title: "Joker: Folie à Deux",
      img: "https://www.projectorreviews.com/wp-content/uploads/2025/04/Havoc.jpg",
      rating: 9.0,
      cat: "Drama",
    },
    {
      id: 3,
      title: "Venom: The Last Dance",
      img: "https://www.projectorreviews.com/wp-content/uploads/2025/11/In-Your-Dreams-610x903.jpg",
      rating: 7.4,
      cat: "Sci-Fi",
    },
    {
      id: 4,
      title: "Captain America: Brave New World",
      img: "https://www.projectorreviews.com/wp-content/uploads/2025/07/Monster-Island-Movie-610x893.jpg",
      rating: 8.2,
      cat: "Action",
    },
    {
      id: 5,
      title: "Inside Out 2",
      img: "https://www.projectorreviews.com/wp-content/uploads/2025/11/Frankenstein.jpg",
      rating: 9.1,
      cat: "Animation",
    },
  ];

  const [activeTab, setActiveTab] = useState("All");

  const categories = ["All", "Action", "Drama", "Sci-Fi", "Animation"];

  const filtered =
    activeTab === "All"
      ? trending
      : trending.filter((item) => item.cat === activeTab);

  return (
    <div className="w-full bg-black text-white">
      {/* HERO SECTION */}
      <section className="relative h-[40vh] md:h-[60vh] bg-cover bg-center bg-[url('https://i.pinimg.com/1200x/14/f8/55/14f855a78a4268a06ed94443f0a7da15.jpg')]">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 flex flex-col justify-center h-full px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold">🔥 Trending</h1>
          <p className="mt-3 text-lg md:text-xl text-gray-300">
            Popular movies right now!
          </p>
        </div>
      </section>

      {/* CATEGORY TABS */}
      <div className="flex gap-3 p-6 overflow-x-auto">
        {categories.map((cat) => (
          <button
            onClick={() => setActiveTab(cat)}
            key={cat}
            className={`px-4 py-2 rounded-lg border ${
              activeTab === cat
                ? "bg-red-600 border-red-600"
                : "border-gray-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* SLIDER ROW */}
      <h2 className="text-2xl font-bold px-6 mb-3">✨ Most Popular</h2>
      <div className="flex overflow-x-auto gap-4 px-6 pb-6">
        {trending.map((movie) => (
          <div
            key={movie.id}
            className="min-w-[300px] md:min-w-[400px] bg-gray-900 rounded-lg overflow-hidden hover:scale-105 transition cursor-pointer"
          >
            <img
              src={movie.img}
              className="h-90 w-full object-cover"
              alt={movie.title}
            />
            <div className="p-3">
              <h2 className="font-semibold text-[12px] md:text-lg">{movie.title}</h2>
              <p className="text-yellow-400 text-[12px] md:text-sm">⭐ {movie.rating}</p>
            </div>
          </div>
        ))}
      </div>

      {/* MOVIE GRID */}
      <h2 className="text-2xl font-bold px-6 mt-4">🎬 All Trending Movies</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-6">
        {filtered.map((movie) => (
          <div
            key={movie.id}
            className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition"
          >
            <img
              src={movie.img}
              alt={movie.title}
              className="h-[180px] md:h-[300px] w-full object-cover"
            />
            <div className="p-3">
              <h2 className="font-bold text-[12px] md:text-lg">{movie.title}</h2>
              <p className="text-yellow-400 text-[12px] md:text-sm">⭐ {movie.rating}</p>
              <p className="text-[12px] md:text-sm text-gray-400">{movie.cat}</p>
            </div>
          </div>
        ))}
      </div>

      {/* LOAD MORE */}
      <div className="flex justify-center pb-10">
        <button className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-xl font-semibold">
          Load More
        </button>
      </div>
    </div>
  );
}

export default Trending;
