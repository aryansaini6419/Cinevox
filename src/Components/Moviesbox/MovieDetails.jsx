import React, { useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import movies from "./Movies";
import gsap from "gsap";

/* =========================================================
   QUALITY STYLES
========================================================= */

const QUALITY_STYLES = {
  green: {
    badge:
      "border-[#39FF14]/30 bg-[#39FF14]/10 text-[#6CFF4A] shadow-[0_0_15px_rgba(57,255,20,0.08)]",

    card:
      "hover:border-[#39FF14]/50 hover:shadow-[0_0_35px_rgba(57,255,20,0.12)]",

    button:
      "border-[#39FF14]/60 bg-[#39FF14]/10 text-[#7CFF65] hover:bg-[#39FF14] hover:text-black hover:shadow-[0_0_30px_rgba(57,255,20,0.55)]",

    glow:
      "bg-[#39FF14] shadow-[0_0_12px_#39FF14]",
  },

  blue: {
    badge:
      "border-cyan-400/30 bg-cyan-400/10 text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.08)]",

    card:
      "hover:border-cyan-400/50 hover:shadow-[0_0_35px_rgba(34,211,238,0.12)]",

    button:
      "border-cyan-400/60 bg-cyan-400/10 text-cyan-300 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_30px_rgba(34,211,238,0.45)]",

    glow:
      "bg-cyan-400 shadow-[0_0_12px_#22d3ee]",
  },

  red: {
    badge:
      "border-fuchsia-400/30 bg-fuchsia-400/10 text-fuchsia-300 shadow-[0_0_15px_rgba(232,121,249,0.08)]",

    card:
      "hover:border-fuchsia-400/50 hover:shadow-[0_0_35px_rgba(232,121,249,0.12)]",

    button:
      "border-fuchsia-400/60 bg-fuchsia-400/10 text-fuchsia-300 hover:bg-fuchsia-400 hover:text-black hover:shadow-[0_0_30px_rgba(232,121,249,0.45)]",

    glow:
      "bg-fuchsia-400 shadow-[0_0_12px_#e879f9]",
  },
};

/* =========================================================
   MOVIE DETAILS
========================================================= */

const MovieDetails = () => {
  const { id } = useParams();

  const movie = movies.find((item) => item.id === Number(id));

  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const posterRef = useRef(null);
  const descRef = useRef(null);
  const infoRef = useRef(null);
  const downloadRef = useRef(null);
  const glowRef = useRef(null);

  /* =======================================================
     DOWNLOAD OPTIONS
  ======================================================= */

  const downloads = movie
    ? movie.downloads.map((download, index) => ({
        ...download,
        tag: index === 0 ? "FHD" : "UHD",
        color: index === 0 ? "blue" : "red",
      }))
    : [];

  /* =======================================================
     GSAP ANIMATIONS
  ======================================================= */

  useEffect(() => {
    if (!movie) return;

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.from(heroRef.current, {
        opacity: 0,
        duration: 0.5,
      })

        .from(
          titleRef.current,
          {
            y: 70,
            opacity: 0,
            duration: 0.9,
            ease: "power4.out",
          },
          "-=0.2"
        )

        .from(
          posterRef.current,
          {
            scale: 0.75,
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "back.out(1.6)",
          },
          "-=0.5"
        )

        .from(
          descRef.current,
          {
            y: 40,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.5"
        )

        .from(
          infoRef.current?.children,
          {
            y: 25,
            opacity: 0,
            scale: 0.9,
            stagger: 0.1,
            duration: 0.5,
          },
          "-=0.3"
        )

        .from(
          downloadRef.current,
          {
            y: 40,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.2"
        );

      /* Poster floating animation */

      gsap.to(posterRef.current, {
        y: -12,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1,
      });

      /* Ambient green glow */

      gsap.to(glowRef.current, {
        scale: 1.25,
        opacity: 0.75,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, [id, movie]);

  /* =======================================================
     MOVIE NOT FOUND
  ======================================================= */

  if (!movie) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black px-6 text-center">
        <div>
          <div className="mb-5 text-6xl">🎬</div>

          <h1 className="text-3xl font-bold text-white">
            Movie Not Found
          </h1>

          <p className="mt-3 text-zinc-500">
            The movie you're looking for doesn't exist.
          </p>

          <Link
            to="/home"
            className="
              mt-7
              inline-flex
              rounded-xl
              border border-[#39FF14]/50
              bg-[#39FF14]/10
              px-6 py-3
              font-semibold
              text-[#7CFF65]
              transition-all
              duration-300
              hover:bg-[#39FF14]
              hover:text-black
              hover:shadow-[0_0_30px_rgba(57,255,20,0.45)]
            "
          >
            ← Back to Movies
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-black
        text-white
      "
    >
      {/* =====================================================
          CINEMATIC BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none fixed inset-0">

        {/* Poster background */}

        <img
          src={movie.image}
          alt=""
          aria-hidden="true"
          className="
            absolute
            inset-0
            h-full
            w-full
            scale-110
            object-cover
            opacity-20
            blur-[35px]
          "
        />

        {/* Main dark overlay */}

        <div
          className="
            absolute
            inset-0
            bg-linear-to-b
            from-black/60
            via-black/90
            to-black
          "
        />

        {/* Green cinematic glow */}

        <div
          ref={glowRef}
          className="
            absolute
            left-1/2
            top-[30%]
            h-125
            w-125
            -translate-x-1/2
            rounded-full
            bg-[#39FF14]/10
            blur-[130px]
          "
        />

        {/* Green light beam */}

        <div
          className="
            absolute
            left-[-20%]
            top-[30%]
            h-0.5
            w-[70%]
            rotate-25
            bg-linear-to-r
            from-transparent
            via-[#39FF14]/50
            to-transparent
            blur-sm
          "
        />

        <div
          className="
            absolute
            right-[-20%]
            top-[50%]
            h-0.5
            w-[70%]
            rotate-[-25deg]
            bg-linear-to-r
            from-transparent
            via-[#39FF14]/40
            to-transparent
            blur-sm
          "
        />

        {/* Floating particles */}

        <span className="absolute left-[15%] top-[25%] h-1 w-1 animate-pulse rounded-full bg-[#39FF14] shadow-[0_0_15px_#39FF14]" />

        <span className="absolute right-[20%] top-[20%] h-1 w-1 animate-pulse rounded-full bg-[#39FF14] shadow-[0_0_15px_#39FF14]" />

        <span className="absolute left-[25%] bottom-[25%] h-1 w-1 animate-pulse rounded-full bg-[#39FF14] shadow-[0_0_15px_#39FF14]" />

        <span className="absolute right-[15%] bottom-[20%] h-1 w-1 animate-pulse rounded-full bg-[#39FF14] shadow-[0_0_15px_#39FF14]" />
      </div>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div
        ref={heroRef}
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-6
          pb-24
        "
      >

        {/* ===================================================
            BACK BUTTON
        =================================================== */}

        <div className="pt-7">

          <Link
            to="/home"
            className="
              group
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-white/5
              px-5
              py-2.5
              text-sm
              font-medium
              text-zinc-300
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-[#39FF14]/40
              hover:bg-[#39FF14]/10
              hover:text-[#7CFF65]
              hover:shadow-[0_0_20px_rgba(57,255,20,0.12)]
            "
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>

            Back to Movies
          </Link>
        </div>

        {/* ===================================================
            MOVIE TITLE
        =================================================== */}

        <div
          ref={titleRef}
          className="
            mx-auto
            max-w-4xl
            pt-14
            text-center
          "
        >

          {/* Small label */}

          <div
            className="
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#39FF14]/30
              bg-[#39FF14]/10
              px-4
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.25em]
              text-[#7CFF65]
              shadow-[0_0_20px_rgba(57,255,20,0.08)]
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#39FF14] shadow-[0_0_10px_#39FF14]" />

            Movie Details
          </div>

          {/* Title */}

          <h1
            className="
              bg-linear-to-r
              from-white
              via-zinc-100
              to-[#39FF14]
              bg-clip-text
              text-4xl
              font-black
              tracking-tight
              text-transparent
              drop-shadow-[0_0_30px_rgba(57,255,20,0.15)]
              sm:text-5xl
              md:text-7xl
            "
          >
            {movie.title}
          </h1>

          {/* Option */}

          <p
            className="
              mt-4
              text-base
              font-medium
              text-zinc-400
              md:text-lg
            "
          >
            {movie.option}
          </p>

          {/* Decorative divider */}

          <div className="mt-7 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-linear-to-r from-transparent to-[#39FF14]" />

            <span className="h-2 w-2 rounded-full bg-[#39FF14] shadow-[0_0_15px_#39FF14]" />

            <span className="h-px w-16 bg-linear-to-l from-transparent to-[#39FF14]" />
          </div>
        </div>

        {/* ===================================================
            POSTER
        =================================================== */}

        <div className="mt-14 flex justify-center">

          <div
            ref={posterRef}
            className="group relative w-full max-w-sm"
          >

            {/* Outer green glow */}

            <div
              className="
                absolute
                -inset-2
                rounded-[28px]
                bg-[#39FF14]/10
                opacity-60
                blur-2xl
                transition-all
                duration-500
                group-hover:bg-[#39FF14]/25
                group-hover:opacity-100
              "
            />

            {/* Poster frame */}

            <div
              className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-zinc-950
                p-1
                shadow-2xl
                shadow-black
                transition-all
                duration-500
                group-hover:border-[#39FF14]/60
                group-hover:shadow-[0_0_60px_rgba(57,255,20,0.25)]
              "
            >

              <img
                src={movie.image}
                alt={movie.title}
                className="
                  relative
                  w-full
                  rounded-[22px]
                  object-cover
                  transition-all
                  duration-700
                  ease-out
                  group-hover:scale-[1.035]
                "
              />

              {/* Poster shine */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  -translate-x-full
                  skew-x-[-20deg]
                  bg-linear-to-r
                  from-transparent
                  via-white/15
                  to-transparent
                  transition-transform
                  duration-1000
                  group-hover:translate-x-[180%]
                "
              />

              {/* Bottom poster gradient */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-x-0
                  bottom-0
                  h-32
                  bg-linear-to-t
                  from-black/60
                  to-transparent
                "
              />
            </div>
          </div>
        </div>

        {/* ===================================================
            DESCRIPTION
        =================================================== */}

        <div className="mx-auto mt-12 max-w-3xl text-center">

          <p
            ref={descRef}
            className="
              text-base
              leading-8
              text-zinc-300
              md:text-lg
            "
          >
            {movie.description}
          </p>
        </div>

        {/* ===================================================
            MOVIE INFO
        =================================================== */}

        <div
          ref={infoRef}
          className="
            mx-auto
            mt-9
            flex
            max-w-4xl
            flex-wrap
            justify-center
            gap-3
          "
        >

          {/* Rating */}

          <span
            className="
              group
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-yellow-400/20
              bg-yellow-400/5
              px-5
              py-2.5
              text-sm
              font-semibold
              text-yellow-300
              transition-all
              duration-300
              hover:border-yellow-400/50
              hover:bg-yellow-400/10
              hover:shadow-[0_0_20px_rgba(250,204,21,0.12)]
            "
          >
            <span className="transition-transform duration-300 group-hover:scale-125">
              ⭐
            </span>

            {movie.rating}
          </span>

          {/* Genre */}

          <span
            className="
              rounded-full
              border
              border-white/10
              bg-white/5
              px-5
              py-2.5
              text-sm
              font-medium
              text-zinc-300
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-[#39FF14]/30
              hover:bg-[#39FF14]/10
              hover:text-[#7CFF65]
            "
          >
            🎭 {movie.genre}
          </span>

          {/* Year */}

          <span
            className="
              rounded-full
              border
              border-white/10
              bg-white/5
              px-5
              py-2.5
              text-sm
              font-medium
              text-zinc-300
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-[#39FF14]/30
              hover:bg-[#39FF14]/10
              hover:text-[#7CFF65]
            "
          >
            📅 {movie.year}
          </span>

          {/* Duration */}

          <span
            className="
              rounded-full
              border
              border-white/10
              bg-white/5
              px-5
              py-2.5
              text-sm
              font-medium
              text-zinc-300
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-[#39FF14]/30
              hover:bg-[#39FF14]/10
              hover:text-[#7CFF65]
            "
          >
            ⏱️ {movie.duration}
          </span>
        </div>

        {/* ===================================================
            DOWNLOAD SECTION
        =================================================== */}

        <section
          ref={downloadRef}
          className="
            mx-auto
            mt-20
            max-w-4xl
          "
        >

          {/* Section heading */}

          <div className="mb-10 text-center">

            <div
              className="
                mb-4
                text-xs
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#39FF14]
              "
            >
              Available Formats
            </div>

            <h2
              className="
                text-3xl
                font-black
                text-white
                md:text-4xl
              "
            >
              Download Options
            </h2>

            <p className="mx-auto mt-3 max-w-lg text-sm text-zinc-500">
              Choose the quality that works best for your device and
              connection.
            </p>
          </div>

          {/* Quality cards */}

          <div className="space-y-5">

            {downloads.map((item) => {
              const styles = QUALITY_STYLES[item.color];

              return (
                <div
                  key={item.quality}
                  className={`
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/4
                    p-5
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:bg-white/6
                    ${styles.card}
                    md:p-6
                  `}
                >

                  {/* Animated card shine */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      translate-x-[-120%]
                      skew-x-[-20deg]
                      bg-linear-to-r
                      from-transparent
                      via-white/6
                      to-transparent
                      transition-transform
                      duration-1000
                      group-hover:translate-x-[120%]
                    "
                  />

                  {/* Left green accent */}

                  <div
                    className={`
                      absolute
                      left-0
                      top-1/2
                      h-14
                      w-1
                      -translate-y-1/2
                      rounded-r-full
                      opacity-60
                      transition-all
                      duration-300
                      group-hover:h-24
                      group-hover:opacity-100
                      ${styles.glow}
                    `}
                  />

                  <div
                    className="
                      relative
                      flex
                      flex-col
                      items-center
                      justify-between
                      gap-5
                      md:flex-row
                    "
                  >

                    {/* Quality info */}

                    <div className="text-center md:text-left">

                      <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">

                        <h3
                          className="
                            text-lg
                            font-bold
                            text-white
                            transition-colors
                            duration-300
                            group-hover:text-[#7CFF65]
                            md:text-xl
                          "
                        >
                          {movie.title}
                        </h3>

                        <span
                          className={`
                            rounded-full
                            border
                            px-3
                            py-1
                            text-[10px]
                            font-bold
                            uppercase
                            tracking-wider
                            ${styles.badge}
                          `}
                        >
                          {item.tag}
                        </span>
                      </div>

                      <div className="mt-2 flex items-center justify-center gap-3 text-sm text-zinc-500 md:justify-start">

                        <span>
                          {item.quality}
                        </span>

                        <span className="h-1 w-1 rounded-full bg-zinc-700" />

                        <span>
                          {item.size}
                        </span>
                      </div>
                    </div>

                    {/* Download button */}

                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        group/button
                        relative
                        inline-flex
                        min-w-42.5
                        items-center
                        justify-center
                        gap-3
                        overflow-hidden
                        rounded-xl
                        border
                        px-6
                        py-3.5
                        text-sm
                        font-bold
                        transition-all
                        duration-300
                        hover:scale-105
                        active:scale-95
                        ${styles.button}
                      `}
                    >

                      {/* Button shine */}

                      <span
                        className="
                          absolute
                          inset-0
                          -translate-x-full
                          skew-x-[-20deg]
                          bg-white/20
                          transition-transform
                          duration-700
                          group-hover/button:translate-x-[150%]
                        "
                      />

                      <span className="relative z-10">
                        Download {item.quality}
                      </span>

                      <span
                        className="
                          relative
                          z-10
                          text-lg
                          transition-transform
                          duration-300
                          group-hover/button:translate-y-1
                        "
                      >
                        ↓
                      </span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* =================================================
              BOTTOM CTA
          ================================================= */}

          <div
            className="
              mt-10
              rounded-2xl
              border
              border-[#39FF14]/15
              bg-[#39FF14]/3
              px-6
              py-5
              text-center
              backdrop-blur-xl
            "
          >
            <p className="text-sm text-zinc-500">
              ✦ Select your preferred quality above
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MovieDetails;