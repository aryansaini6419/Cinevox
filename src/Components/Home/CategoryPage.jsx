import React, { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import gsap from "gsap";

import movies from "../Moviesbox/Movies";
import MovieGrid from "../Moviesbox/MoviesGrid";
import Pagination from "../Moviesbox/Pagination";
import background2 from "../Logo/image/background2.png";

const CATEGORIES = [
  { label: "All", slug: null, to: "/home", emoji: "🍿" },
  {
    label: "Hollywood",
    slug: "Hollywood",
    to: "/category/Hollywood",
    emoji: "🎬",
  },
  {
    label: "Bollywood",
    slug: "Bollywood",
    to: "/category/Bollywood",
    emoji: "🇮🇳",
  },
  {
    label: "K-Drama",
    slug: "K-Drama",
    to: "/category/K-Drama",
    emoji: "🇰🇷",
  },
  {
    label: "C-Drama",
    slug: "C-Drama",
    to: "/category/C-Drama",
    emoji: "🇨🇳",
  },
  {
    label: "Anime",
    slug: "Anime",
    to: "/category/Anime",
    emoji: "🎌",
  },
];

const CategoryPage = () => {
  const { category } = useParams();

  const moviesPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const heroRef = useRef(null);
  const resultsRef = useRef(null);
  const glowRef = useRef(null);

  const filteredMovies = movies.filter(
    (movie) => movie.category === category
  );

  const lastMovie = currentPage * moviesPerPage;
  const firstMovie = lastMovie - moviesPerPage;
  const currentMovies = filteredMovies.slice(firstMovie, lastMovie);

  const pageTitle = category || "All Movies";

  /* --------------------------------
     Reset page when category changes
  -------------------------------- */
  useEffect(() => {
    setCurrentPage(1);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [category]);

  /* --------------------------------
     GSAP Hero Animation
  -------------------------------- */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const heroItems = heroRef.current?.children;

      if (heroItems) {
        gsap.from(heroItems, {
          y: 35,
          opacity: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
        });
      }

      gsap.from(resultsRef.current, {
        y: 35,
        opacity: 0,
        duration: 0.7,
        delay: 0.25,
        ease: "power3.out",
      });

      /* Floating green glow */
      if (glowRef.current) {
        gsap.to(glowRef.current, {
          scale: 1.2,
          opacity: 0.7,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    });

    return () => ctx.revert();
  }, [category]);

  return (
    <div className="min-h-screen overflow-hidden bg-black text-white">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section className="relative flex min-h-140 w-full items-center justify-center overflow-hidden">

        {/* Background */}
        <img
          src={background2}
          alt="Movie Background"
          className="
            absolute inset-0
            h-full w-full
            scale-105
            object-cover
            opacity-60
          "
        />

        {/* Dark cinematic overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/75 to-black" />

        {/* Green radial glow */}
        <div
          ref={glowRef}
          className="
            absolute left-1/2 top-1/2
            h-112.5 w-112.5
            -translate-x-1/2 -translate-y-1/2
            rounded-full
            bg-[#39FF14]/10
            blur-[120px]
          "
        />

        {/* Green light beams */}
        <div className="absolute left-[-10%] top-[20%] h-0.5 w-[50%] rotate-25 bg-linear-to-r from-transparent via-[#39FF14]/70 to-transparent blur-sm" />

        <div className="absolute right-[-10%] top-[35%] h-0.5 w-[50%] rotate-[-25deg] bg-linear-to-r from-transparent via-[#39FF14]/60 to-transparent blur-sm" />

        {/* Floating particles */}
        <div className="absolute left-[15%] top-[25%] h-1 w-1 animate-pulse rounded-full bg-[#39FF14] shadow-[0_0_12px_#39FF14]" />

        <div className="absolute right-[20%] top-[20%] h-1 w-1 animate-pulse rounded-full bg-[#39FF14] shadow-[0_0_15px_#39FF14]" />

        <div className="absolute bottom-[25%] left-[25%] h-1 w-1 animate-pulse rounded-full bg-[#39FF14] shadow-[0_0_12px_#39FF14]" />

        {/* =====================================================
            HERO CONTENT
        ===================================================== */}
        <div
          ref={heroRef}
          className="
            relative z-10
            mx-auto flex
            w-full max-w-7xl
            flex-col
            items-center
            justify-center
            px-6
            py-16
            text-center
          "
        >

          {/* Small badge */}
          <div
            className="
              mb-5
              rounded-full
              border border-[#39FF14]/40
              bg-[#39FF14]/10
              px-5 py-2
              text-xs font-semibold
              uppercase tracking-[0.3em]
              text-[#7CFF65]
              shadow-[0_0_20px_rgba(57,255,20,0.12)]
              backdrop-blur-xl
            "
          >
            ✦ Explore The Collection ✦
          </div>

          {/* Main Heading */}
          <h1
            className="
              mb-5
              bg-linear-to-r
              from-white
              via-white
              to-[#39FF14]
              bg-clip-text
              text-5xl
              font-black
              tracking-tight
              text-transparent
              drop-shadow-[0_0_25px_rgba(57,255,20,0.18)]
              sm:text-6xl
              md:text-7xl
            "
          >
            Browse Movies
          </h1>

          {/* Description */}
          <p
            className="
              mb-9
              max-w-2xl
              text-center
              text-sm
              leading-7
              text-zinc-300
              sm:text-base
              md:text-lg
            "
          >
            Discover Hollywood, Bollywood, K-Drama, Anime, TV Shows
            and thousands of movies in one place.
          </p>

          {/* Green divider */}
          <div className="mb-9 flex items-center gap-3">
            <span className="h-px w-16 bg-linear-to-r from-transparent to-[#39FF14]" />

            <span className="h-2 w-2 rounded-full bg-[#39FF14] shadow-[0_0_15px_#39FF14]" />

            <span className="h-px w-16 bg-linear-to-l from-transparent to-[#39FF14]" />
          </div>

          {/* =====================================================
              CATEGORY BUTTONS
          ===================================================== */}
          <div className="flex max-w-5xl flex-wrap justify-center gap-4">

            {CATEGORIES.map((cat) => {
              const isActive = cat.slug === (category ?? null);

              return (
                <Link
                  key={cat.label}
                  to={cat.to}
                  className={`
                    group relative
                    overflow-hidden
                    rounded-2xl
                    border
                    px-6 py-3.5
                    font-semibold
                    transition-all
                    duration-300
                    ease-out
                    backdrop-blur-xl

                    hover:-translate-y-1
                    hover:scale-105

                    ${
                      isActive
                        ? `
                          border-[#39FF14]
                          bg-[#39FF14]/15
                          text-[#7CFF65]
                          shadow-[0_0_25px_rgba(57,255,20,0.35)]
                        `
                        : `
                          border-white/15
                          bg-white/6
                          text-zinc-200
                          hover:border-[#39FF14]/70
                          hover:bg-[#39FF14]/10
                          hover:text-white
                          hover:shadow-[0_0_25px_rgba(57,255,20,0.3)]
                        `
                    }
                  `}
                >

                  {/* Animated light sweep */}
                  <span
                    className="
                      absolute inset-0
                      translate-x-[-120%]
                      skew-x-[-20deg]
                      bg-linear-to-r
                      from-transparent
                      via-white/20
                      to-transparent
                      transition-transform
                      duration-700
                      group-hover:translate-x-[120%]
                    "
                  />

                  {/* Bottom neon line */}
                  <span
                    className="
                      absolute
                      bottom-0 left-1/2
                      h-0.5
                      w-0
                      -translate-x-1/2
                      bg-[#39FF14]
                      shadow-[0_0_10px_#39FF14]
                      transition-all
                      duration-300
                      group-hover:w-3/4
                    "
                  />

                  {/* Button content */}
                  <span className="relative z-10 flex items-center justify-center gap-2.5">

                    <span
                      className="
                        text-xl
                        transition-all
                        duration-300
                        group-hover:scale-125
                        group-hover:-rotate-6
                      "
                    >
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

      {/* =====================================================
          RESULTS SECTION
      ===================================================== */}
      <section
        ref={resultsRef}
        className="
          relative
          mx-auto
          max-w-7xl
          px-6
          py-14
        "
      >

        {/* Top glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-linear-to-r from-transparent via-[#39FF14]/50 to-transparent" />

        {/* Section Header */}
        <div className="mb-10 flex flex-col items-center text-center">

          <span
            className="
              mb-3
              text-xs
              font-semibold
              uppercase
              tracking-[0.3em]
              text-[#39FF14]
            "
          >
            Movie Collection
          </span>

          <h2
            className="
              bg-linear-to-r
              from-white
              via-zinc-200
              to-[#39FF14]
              bg-clip-text
              text-3xl
              font-extrabold
              text-transparent
              sm:text-4xl
            "
          >
            {pageTitle}
          </h2>

          {/* Results count */}
          <div
            className="
              mt-4
              rounded-full
              border border-[#39FF14]/20
              bg-[#39FF14]/5
              px-4 py-1.5
              text-sm
              text-[#7CFF65]
              shadow-[0_0_15px_rgba(57,255,20,0.08)]
            "
          >
            {filteredMovies.length}{" "}
            {filteredMovies.length === 1 ? "Movie" : "Movies"}
          </div>
        </div>

        {/* =====================================================
            EMPTY STATE
        ===================================================== */}
        {filteredMovies.length === 0 ? (
          <div
            className="
              relative
              mx-auto
              flex
              max-w-2xl
              flex-col
              items-center
              justify-center
              gap-4
              rounded-3xl
              border
              border-[#39FF14]/20
              bg-white/3
              px-6
              py-24
              text-center
              shadow-[0_0_50px_rgba(57,255,20,0.05)]
              backdrop-blur-xl
            "
          >

            <div
              className="
                flex h-20 w-20
                items-center justify-center
                rounded-full
                border border-[#39FF14]/30
                bg-[#39FF14]/10
                text-4xl
                shadow-[0_0_30px_rgba(57,255,20,0.15)]
              "
            >
              🎥
            </div>

            <h3 className="text-xl font-bold text-white">
              No Movies Found
            </h3>

            <p className="max-w-md text-sm leading-6 text-zinc-400">
              No titles are available in "{category}" yet.
              Try another category or check back later.
            </p>

            <Link
              to="/home"
              className="
                mt-3
                rounded-xl
                border
                border-[#39FF14]
                bg-[#39FF14]/10
                px-6 py-3
                font-semibold
                text-[#7CFF65]
                transition-all
                duration-300
                hover:bg-[#39FF14]
                hover:text-black
                hover:shadow-[0_0_25px_rgba(57,255,20,0.5)]
              "
            >
              Browse All Movies
            </Link>
          </div>
        ) : (
          <>
            {/* Movie Grid */}
            <MovieGrid movies={currentMovies} />

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <Pagination
                totalMovies={filteredMovies.length}
                moviesPerPage={moviesPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default CategoryPage;