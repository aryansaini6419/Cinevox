import React from 'react'
import { Link } from 'react-router-dom';


const categories = [
  "Action",
  "Adventure",
  "Comedy",
  "Drama",
  "Horror",
  "Sci-Fi",
  "Thriller",
  "Romance",
  "Animation",
  "Crime",
  "Fantasy",
  "Documentary",
];


const About = () => {
  return (
    <div>


    <section className="py-20 px-6 md:px-12 lg:px-20 text-white">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold">
            About{" "}
            <span className="text-green-400">
              CineVox
            </span>
          </h2>

          <div className="w-28 h-1 bg-green-500 mx-auto mt-5 rounded-full"></div>
        </div>

        {/* About Card */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 shadow-xl">

          <p className="text-gray-300 text-base md:text-lg leading-9">

            <span className="font-semibold text-white">
              CineVox
            </span>{" "}
            is your destination for watching the latest{" "}
            <span className="text-green-400 font-semibold">
              Hollywood
            </span>
            ,{" "}
            <span className="text-green-400 font-semibold">
              Bollywood
            </span>
            ,{" "}
            <span className="text-green-400 font-semibold">
              South Indian
            </span>
            , and{" "}
            <span className="text-green-400 font-semibold">
              Web Series
            </span>{" "}
            content in stunning{" "}
            <span className="text-green-400 font-semibold">
              HD, Full HD, 4K,
            </span>{" "}
            and{" "}
            <span className="text-green-400 font-semibold">
              Ultra HD
            </span>{" "}
            quality.

            <br />
            <br />

            Whether you're a fan of thrilling action films, emotional dramas,
            laugh-out-loud comedies, or binge-worthy TV series, UHDMOVIES offers
            a massive collection of entertainment for every movie lover.

            <br />
            <br />

            Discover thousands of titles with fast streaming, smooth playback,
            and an ever-growing library featuring the newest releases alongside
            timeless classics.
          </p>

          {/* Categories */}
          <div className="mt-12">

            <h3 className="text-2xl font-semibold mb-6">
              Popular Categories
            </h3>

            <div className="flex flex-wrap gap-4">

              {categories.map((category, index) => (
                <span
                  key={index}
                  className="px-5 py-3 rounded-full bg-green-500/20 border border-green-500 text-green-300 hover:bg-green-500 hover:text-white transition duration-300 cursor-pointer"
                >
                  {category}
                </span>
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  

  <div className="watch py-2  md:py-6 flex justify-center items-center ">
    <div className="now">
        <h1 className='font-bold text-4xl md:text-6xl  '>Get Ready To Watch</h1>
        <div className="links py-5 flex  justify-center border-2 border-green-500 bg-green-500 rounded-2xl md:py-7 my-14">
                <Link to='/Home'>Watch Now</Link>
        </div>
    

    </div>
  </div>

    </div>
  )
}

export default About