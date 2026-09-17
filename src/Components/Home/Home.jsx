import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

import Navbar from "../Pages/Navbar";
import Main from "../Pages/Main";

import movies from "../Moviesbox/Movies";
import MovieGrid from "../Moviesbox/MoviesGrid";
import Pagination from "../Moviesbox/Pagination";

import background3 from "../Logo/image/Background3.png";

const CATEGORIES = [
  { label: "Hollywood", slug: "Hollywood", to: "/home", emoji: "🎬" },
  { label: "Bollywood", slug: "Bollywood", to: "/category/Bollywood", emoji: "🇮🇳" },
  { label: "K-Drama", slug: "K-Drama", to: "/category/K-Drama", emoji: "🇰🇷" },
  { label: "C-Drama", slug: "C-Drama", to: "/category/C-Drama", emoji: "🇨🇳" },
  { label: "Anime", slug: "Anime", to: "/category/Anime", emoji: "🎌" },
];

const Home = () => {
  const moviesPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const heroRef = useRef(null);

  // Default Category
  const hollywoodMovies = movies.filter(
    (movie) => movie.category === "Hollywood"
  );

  // Pagination
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;

  const currentMovies = hollywoodMovies.slice(
    indexOfFirstMovie,
    indexOfLastMovie
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(heroRef.current?.children, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* Hero */}
    <section className="relative mt-8 h-80 w-full overflow-hidden md:h-96 lg:h-125">
  {/* Background */}
  <img
    src={background3}
    alt="Category Banner"
    className="absolute inset-0 h-full w-full object-cover scale-105 blur-[2px]"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/60 to-black/90" />

  {/* Green cinematic glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.18),transparent_60%)]" />

  {/* Content */}
  <div
    ref={heroRef}
    className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center"
  >
    {/* Heading */}
    <h1 className="mb-4 bg-linear-to-r from-white via-zinc-200 to-green-400 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent drop-shadow-[0_0_20px_rgba(34,197,94,0.25)] md:text-6xl">
      Browse Movies
    </h1>

    {/* Description */}
    <p className="mb-8 max-w-2xl text-center text-sm leading-7 text-gray-300 md:text-lg">
      Discover Hollywood, Bollywood, K-Drama, Anime, TV Shows and
      thousands of movies in one place.
    </p>

    {/* Category Chips */}
    <div className="flex max-w-5xl flex-wrap justify-center gap-4">
      {CATEGORIES.map((cat, index) => {
        const isActive = cat.slug === "Hollywood";

        const colors = [
          {
            normal: "border-red-500/50 bg-red-500/10 text-red-300",
            hover:
              "hover:border-red-400 hover:bg-red-500/20 hover:text-white hover:shadow-[0_0_25px_rgba(239,68,68,0.65)]",
          },
          {
            normal: "border-yellow-500/50 bg-yellow-500/10 text-yellow-300",
            hover:
              "hover:border-yellow-400 hover:bg-yellow-500/20 hover:text-white hover:shadow-[0_0_25px_rgba(234,179,8,0.65)]",
          },
          {
            normal: "border-purple-500/50 bg-purple-500/10 text-purple-300",
            hover:
              "hover:border-purple-400 hover:bg-purple-500/20 hover:text-white hover:shadow-[0_0_25px_rgba(168,85,247,0.65)]",
          },
          {
            normal: "border-cyan-500/50 bg-cyan-500/10 text-cyan-300",
            hover:
              "hover:border-cyan-400 hover:bg-cyan-500/20 hover:text-white hover:shadow-[0_0_25px_rgba(6,182,212,0.65)]",
          },
          {
            normal: "border-blue-500/50 bg-blue-500/10 text-blue-300",
            hover:
              "hover:border-blue-400 hover:bg-blue-500/20 hover:text-white hover:shadow-[0_0_25px_rgba(59,130,246,0.65)]",
          },
          {
            normal: "border-green-500/50 bg-green-500/10 text-green-300",
            hover:
              "hover:border-green-400 hover:bg-green-500/20 hover:text-white hover:shadow-[0_0_25px_rgba(34,197,94,0.65)]",
          },
        ];

        const color = colors[index % colors.length];

        return (
          <Link
            key={cat.label}
            to={cat.to}
            className={`
              group relative overflow-hidden
              rounded-xl border px-5 py-3
              font-semibold backdrop-blur-xl
              transition-all duration-300 ease-out
              hover:-translate-y-1 hover:scale-105
              active:scale-95
              ${color.normal}
              ${color.hover}

              ${
                isActive
                  ? "border-red-400 bg-red-500/20 text-white shadow-[0_0_20px_rgba(239,68,68,0.45)]"
                  : ""
              }
            `}
          >
            {/* Animated light sweep */}
            <span
              className="
                absolute inset-0
                -translate-x-full
                bg-linear-to-r
                from-transparent
                via-white/20
                to-transparent
                transition-transform duration-700
                group-hover:translate-x-full
              "
            />

            {/* Button Content */}
            <span className="relative z-10 flex items-center justify-center gap-2">
              <span className="text-lg transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6">
                {cat.emoji}
              </span>

              <span>{cat.label}</span>
            </span>
          </Link>
        );
      })}
    </div>
  </div>
</section>

      <Main />

      <div className="mx-auto max-w-7xl px-6 pt-2">
        <MovieGrid movies={currentMovies} />

        <Pagination
          totalMovies={hollywoodMovies.length}
          moviesPerPage={moviesPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Home;