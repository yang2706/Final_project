import React, { useState, useEffect } from "react";

const images = [
  "https://media-legend.sgp1.digitaloceanspaces.com/legend-prod/480251c7-01bb-478e-a18d-dba2a8d62a39.jpeg",
  "https://media-legend.sgp1.digitaloceanspaces.com/legend-prod/45fbc23f-6282-405f-9bc5-cf2dec765988.jpeg",
  "https://media-legend.sgp1.digitaloceanspaces.com/legend-prod/0ee58116-137c-4301-a9dd-875bb7d74bd9.jpeg",
  "https://media-legend.sgp1.digitaloceanspaces.com/legend-prod/c4d845c4-8144-4aff-8a05-7cee65183da3.jpeg",
  "https://media-legend.sgp1.digitaloceanspaces.com/legend-prod/84fe69e2-26bf-44a5-89c6-d5b31ad603ad.jpeg",
  "https://media-legend.sgp1.digitaloceanspaces.com/legend-prod/84b3c60b-14af-43af-985b-575a287be91b.jpeg",
  "https://media-legend.sgp1.digitaloceanspaces.com/legend-prod/30450d10-0d3b-447e-9ba3-f074be6dd76b.jpeg",
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => setIndex((index - 1 + images.length) % images.length);
  const nextSlide = () => setIndex((index + 1) % images.length);

  return (
    <div className="w-full flex justify-center py-6">
      <div className="relative w-[70%] h-[500px] overflow-hidden rounded-2xl shadow-xl">

        {/* Images container */}
        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              className="w-full h-[500px] object-cover flex-shrink-0"
              alt=""
            />
          ))}
        </div>

        {/* Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 px-3 py-2 rounded-full shadow"
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 px-3 py-2 rounded-full shadow"
        >
          →
        </button>
      </div>
    </div>
  );
}
