import React, { useLayoutEffect, useRef } from "react";
import logo from "./image/logo.png";
import background from "./image/background.png";
import background2 from "./image/background2.png";

import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import CardSlider from "../Logo/Cards";
import Boxes from "./Boxes";
import Boxes2 from "./boxes2";
import About from "./About";

gsap.registerPlugin(ScrollTrigger);

const Login = () => {
  const pageRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      /* =========================================
         HERO BACKGROUND
      ========================================= */

      gsap.fromTo(
        ".hero-bg",
        {
          scale: 1.12,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1.8,
          ease: "power3.out",
        }
      );

      /* =========================================
         NAVBAR / LOGO
      ========================================= */

      gsap.fromTo(
        ".login-logo",
        {
          y: -30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".watch-btn-top",
        {
          y: -20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          delay: 0.4,
          ease: "power3.out",
        }
      );

      /* =========================================
         HERO CONTENT
      ========================================= */

      const heroTimeline = gsap.timeline({
        delay: 0.4,
      });

      heroTimeline
        .fromTo(
          ".hero-label",
          {
            y: 20,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
          }
        )
        .fromTo(
          ".hero-title",
          {
            y: 60,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power4.out",
          },
          "-=0.25"
        )
        .fromTo(
          ".hero-description",
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.45"
        )
        .fromTo(
          ".hero-button",
          {
            y: 25,
            opacity: 0,
            scale: 0.9,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "back.out(1.5)",
          },
          "-=0.3"
        )
        .fromTo(
          ".hero-cards",
          {
            x: 80,
            opacity: 0,
            scale: 0.95,
          },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.7"
        );

      /* =========================================
         HERO FLOATING EFFECT
      ========================================= */

      gsap.to(".hero-cards", {
        y: -10,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* =========================================
         CATEGORY SECTION
      ========================================= */

      gsap.fromTo(
        ".category-heading",
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".category-heading",
            start: "top 85%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".category-line",
        {
          width: 0,
        },
        {
          width: "100%",
          duration: 1,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: ".category-line",
            start: "top 90%",
            once: true,
          },
        }
      );

      /* =========================================
         CATEGORY BOXES
      ========================================= */

      gsap.fromTo(
        ".boxes-section",
        {
          y: 80,
          opacity: 0,
          scale: 0.96,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".boxes-section",
            start: "top 82%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".boxes2-section",
        {
          y: 80,
          opacity: 0,
          scale: 0.96,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          delay: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".boxes2-section",
            start: "top 82%",
            once: true,
          },
        }
      );

      /* =========================================
         ABOUT SECTION
      ========================================= */

      gsap.fromTo(
        ".about-section",
        {
          y: 80,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-section",
            start: "top 82%",
            once: true,
          },
        }
      );

      /* =========================================
         BACKGROUND PARALLAX
      ========================================= */

      gsap.to(".section-bg", {
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: ".category-section",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={pageRef}
      className="min-h-screen overflow-hidden bg-black text-white"
    >
      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="hero-section relative min-h-screen overflow-hidden">
        {/* Background */}

        <div className="absolute inset-0 -z-10">
          <img
            src={background}
            alt="Cinevox background"
            className="
              hero-bg
              h-full
              w-full
              scale-[1.05]
              object-cover
              blur-[2px]
            "
          />

          {/* Dark overlay */}

          <div className="absolute inset-0 bg-black/55" />

          {/* Gradient */}

          <div
            className="
              absolute
              inset-0
              bg-linear-to-b
              from-black/30
              via-black/40
              to-black
            "
          />
        </div>

        {/* =================================================
            NAVBAR
        ================================================= */}

        <header
          className="
            relative
            z-20
            flex
            items-center
            justify-between
            px-4
            py-4
            sm:px-6
            md:px-10
            lg:px-14
            xl:px-20
          "
        >
          {/* Logo */}

          <Link to="/home" className="login-logo block">
            <img
              src={logo}
              alt="Cinevox"
              className="
                w-28
                object-contain
                sm:w-36
                md:w-40
                lg:w-44
              "
            />
          </Link>

          {/* Top Watch Button */}

          <Link
            to="/home"
            className="
              watch-btn-top
              group
              inline-flex
              items-center
              justify-center
              rounded-full
              border
              border-[#39ff14]/40
              bg-[#39ff14]
              px-4
              py-2
              text-xs
              font-bold
              uppercase
              tracking-wider
              text-black
              transition-all
              duration-300

              hover:bg-transparent
              hover:text-[#39ff14]
              hover:shadow-[0_0_30px_rgba(57,255,20,0.25)]

              sm:px-5
              sm:py-2.5
              sm:text-sm
            "
          >
            Watch Now
          </Link>
        </header>

        {/* =================================================
            HERO CONTENT
        ================================================= */}

        <div
          className="
            mx-auto
            grid
            min-h-[calc(100vh-80px)]
            max-w-375
            grid-cols-1
            items-center
            gap-10
            px-5
            pb-14
            pt-10

            sm:px-8
            md:px-10
            lg:grid-cols-2
            lg:gap-12
            lg:px-14
            xl:px-20
          "
        >
          {/* LEFT */}

          <div
            className="
              flex
              max-w-2xl
              flex-col
              justify-center
              text-center
              lg:text-left
            "
          >
            {/* Small Label */}

            <div className="hero-label mb-4">
              <span
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#39ff14]/20
                  bg-[#39ff14]/5
                  px-3
                  py-1.5
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.25em]
                  text-[#39ff14]

                  sm:text-xs
                "
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#39ff14] shadow-[0_0_10px_#39ff14]" />

                Welcome to CINEVOX
              </span>
            </div>

            {/* Heading */}

            <h1
              className="
                hero-title
                text-4xl
                font-black
                uppercase
                leading-[0.95]
                tracking-tight

                sm:text-5xl
                md:text-6xl
                lg:text-6xl
                xl:text-7xl
                2xl:text-8xl
              "
            >
              Unlimited
              <br />

              <span className="text-[#39ff14]">
                Movies.
              </span>

              <br />

              Endless
              <br />

              Entertainment.
            </h1>

            {/* Description */}

            <p
              className="
                hero-description
                mx-auto
                mt-6
                max-w-xl
                text-sm
                leading-7
                text-gray-300

                sm:text-base
                sm:leading-8

                lg:mx-0
                lg:text-lg
              "
            >
              Stream the latest blockbusters, timeless classics,
              and binge-worthy series in stunning HD. Discover
              your next favorite story and watch anytime,
              anywhere.
            </p>

            {/* CTA */}

            <div className="mt-7 flex justify-center lg:justify-start">
              <Link
                to="/home"
                className="
                  hero-button
                  group
                  relative
                  overflow-hidden
                  rounded-full
                  bg-[#39ff14]
                  px-7
                  py-3.5
                  text-sm
                  font-bold
                  uppercase
                  tracking-wide
                  text-black
                  shadow-[0_0_30px_rgba(57,255,20,0.15)]
                  transition-all
                  duration-300

                  hover:scale-105
                  hover:shadow-[0_0_40px_rgba(57,255,20,0.35)]

                  sm:px-8
                  sm:py-4
                "
              >
                <span
                  className="
                    absolute
                    inset-0
                    -translate-x-full
                    bg-white/30
                    transition-transform
                    duration-500
                    group-hover:translate-x-full
                  "
                />

                <span className="relative z-10">
                  Watch Now →
                </span>
              </Link>
            </div>
          </div>

          {/* RIGHT - CARDS */}

          <div
            className="
              hero-cards
              flex
              min-h-70
              items-center
              justify-center

              sm:min-h-87.5

              lg:min-h-112.5
              lg:justify-end

              xl:min-h-130
            "
          >
            <div
              className="
                w-full
                max-w-130
              "
            >
              <CardSlider />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}

        <div
          className="
            absolute
            bottom-5
            left-1/2
            hidden
            -translate-x-1/2
            flex-col
            items-center
            gap-2
            text-[9px]
            uppercase
            tracking-[0.3em]
            text-white/40

            md:flex
          "
        >
          <span>Scroll</span>

          <span
            className="
              h-10
              w-px
              bg-linear-to-b
              from-[#39ff14]
              to-transparent
            "
          />
        </div>
      </section>

      {/* =====================================================
          CATEGORY SECTION
      ===================================================== */}

      <section
        className="
          category-section
          relative
          overflow-hidden
          bg-black
          px-4
          py-16

          sm:px-6
          sm:py-20

          md:px-10
          md:py-24

          lg:px-14
          lg:py-28

          xl:px-20
        "
      >
        {/* Background */}

        <div className="absolute inset-0 -z-10 overflow-hidden">
          <img
            src={background2}
            alt=""
            className="
              section-bg
              h-full
              w-full
              scale-110
              object-cover
              opacity-25
              blur-[2px]
            "
          />

          <div className="absolute inset-0 bg-black/75" />

          <div
            className="
              absolute
              inset-0
              bg-linear-to-b
              from-black
              via-transparent
              to-black
            "
          />
        </div>

        <div className="mx-auto max-w-375">
          {/* SECTION HEADING */}

          <div className="category-heading text-center">
            <p
              className="
                mb-3
                text-[10px]
                font-medium
                uppercase
                tracking-[0.35em]
                text-[#39ff14]

                sm:text-xs
              "
            >
              Explore the world of cinema
            </p>

            <h2
              className="
                text-4xl
                font-black
                uppercase
                leading-none
                tracking-tight

                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                xl:text-8xl
              "
            >
              Categories
            </h2>

            <div
              className="
                category-line
                mx-auto
                mt-5
                h-px
                max-w-45
                bg-[#39ff14]
              "
            />
          </div>

          {/* BOXES */}

          <div
            className="
              boxes-section
              mt-12
              flex
              w-full
              justify-center

              sm:mt-16
              md:mt-20
            "
          >
            <div className="w-full max-w-7xl">
              <Boxes />
            </div>
          </div>

          {/* SECOND BOXES */}

          <div
            className="
              boxes2-section
              mt-6
              flex
              w-full
              justify-center

              sm:mt-8
              md:mt-10
            "
          >
            <div className="w-full max-w-7xl">
              <Boxes2 />
            </div>
          </div>

          {/* ABOUT */}

          <div
            className="
              about-section
              mt-20

              sm:mt-24

              md:mt-32
            "
          >
            <About />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;