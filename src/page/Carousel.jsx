import React, { useState, useEffect } from "react";

const slides = [
  {
    img: "https://i.pinimg.com/1200x/3b/88/8a/3b888ae33caddd009ea0262a6dace304.jpg",
    title: "Watch The Best Movies & Series",
    desc: "Stream unlimited movies and series anytime, anywhere.",
  },
  {
    img: "https://i.pinimg.com/1200x/97/4a/0b/974a0bc3ef606c46538f46bfe41055ce.jpg",
    title: "New Releases Every Week",
    desc: "Get access to the latest trending movies instantly.",
  },
  {
    img: "https://i.pinimg.com/736x/fa/e1/24/fae1247d0b8841f643de7d5583b2dd36.jpg",
    title: "Enjoy With Our Best Service ",
    desc: "Watch on your phone, laptop, tablet, or smart TV.",
  },
];

export default function CarouselHero() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-[40vh] md:h-[70vh] opacity-70 relative overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-all duration-700 ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${slide.img})` }}
        >
          {/* Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-transparent flex flex-col justify-center px-10 text-white">
            <h1 className="text-xl md:text-5xl max-w-60 font-bold md:max-w-xl">
              {slide.title}
            </h1>
            <p className="mt-4 text-md md:text-lg max-w-md opacity-80">
              {slide.desc}
            </p>
            <button className="mt-6 bg-red-600 cursor-pointer md:w-[200px] px-4 py-2 w-[140px] rounded-lg text-lg font-semibold hover:bg-red-700 transition">
              Explore Now
            </button>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              current === index ? "bg-red-600 scale-110" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
