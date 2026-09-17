import React, { useEffect, useState } from "react";

import spiderman from "../Home/Images/spiderman.png";
import johnwick from "../Home/Images/John wick.png";

const movies = [
  {
    title: "Spider-Man: No Way Home",
    description:
      "Peter Parker's identity is revealed, forcing him to seek magical help that accidentally opens the multiverse and brings dangerous villains into his world.",
    genre: "Action • Adventure",
    rating: "⭐ 8.2",
    image: spiderman,
  },

  {
    title: "John Wick: Chapter 4",
    description:
      "John Wick faces his deadliest challenge yet while fighting the High Table across breathtaking locations around the world.",
    genre: "Action • Thriller",
    rating: "⭐ 8.3",
    image: johnwick,
  },
];

const Main = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % movies.length);
    }, 5000);

    return () => clearInterval(slider);
  }, []);

  return (
   <section className="relative w-full bg-black border-y border-gray-800 overflow-hidden">
  <div className="flex items-center gap-6 px-6 md:px-10 py-5">

    {/* Latest Badge */}
  

    {/* Movie Poster */}
    <div className="w-24 h-32 md:w-32 md:h-44 shrink-0 overflow-hidden rounded-xl shadow-2xl">
      <img
        src={movies[current].image}
        alt={movies[current].title}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
      />
    </div>

    {/* Movie Details */}
    <div className="flex-1 text-white">
      <span className="inline-block bg-red-600 px-3 py-1 rounded-full text-xs md:text-sm mb-3">
        {movies[current].genre}
      </span>

      <h2 className="text-2xl md:text-4xl font-bold">
        {movies[current].title}
      </h2>

      <p className="text-gray-400 mt-3 max-w-3xl text-sm md:text-base line-clamp-2">
        {movies[current].description}
      </p>

      <div className="flex items-center gap-6 mt-4">
        <span className="text-yellow-400">
          {movies[current].rating}
        </span>

        <button className="bg-red-600 hover:bg-red-700 transition px-5 py-2 rounded-lg">
          ▶ Watch
        </button>
      </div>
    </div>
  </div>

  {/* Indicators */}
  <div className="absolute bottom-4 right-8 flex gap-2">
    {movies.map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrent(index)}
        className={`rounded-full transition-all duration-300 ${
          current === index
            ? "w-8 h-2 bg-red-600"
            : "w-2 h-2 bg-gray-500"
        }`}
      />
    ))}
  </div>
</section>
  );
};

export default Main;