import React from 'react'
import { Film } from "lucide-react";


const movieFeatures = [
  {
    id: 1,
    title: "Premium Movies",
    description:
      "Enjoy thousands of blockbuster movies, TV shows, and exclusive content in stunning Ultra HD quality.",
  },
  {
    id: 2,
    title: "Latest Releases",
    description:
      "Watch the newest Hollywood, Bollywood, and international movies as soon as they are available.",
  },
  {
    id: 3,
    title: "4K Ultra HD",
    description:
      "Experience crystal-clear 4K streaming with immersive Dolby-quality visuals and sound.",
  },
  {
    id: 4,
    title: "Multi Device",
    description:
      "Watch on your TV, laptop, tablet, or mobile phone anytime and anywhere.",
  },
  {
    id: 5,
    title: "No Ads",
    description:
      "Enjoy uninterrupted entertainment with an ad-free streaming experience.",
  },
  {
    id: 6,
    title: "Unlimited Access",
    description:
      "Stream unlimited movies and TV series with one subscription and no restrictions.",
  },
];


const Boxes = () => {
  return (
    <div>

        



    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-10 px-4">

      {movieFeatures.map((movie) => (
        <div
          key={movie.id}
          className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 transition duration-300 hover:-translate-y-2 hover:bg-white/20"
          >
          {/* Icon */}
          <div className="w-16 h-16 mx-auto rounded-full  bg-green-500 flex items-center justify-center">
            <Film className="w-8 h-8 text-white" />
          </div>

          {/* Heading */}
          <h2 className="mt-6 text-2xl font-bold text-center text-white">
            {movie.title}
          </h2>

          {/* Paragraph */}
          <p className="mt-4 text-center text-white leading-relaxed">
            {movie.description}
          </p>
        </div>
      ))}

    </div>

    </div>
  )
}

export default Boxes