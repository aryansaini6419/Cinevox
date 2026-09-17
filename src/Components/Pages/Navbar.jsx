import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import gsap from "gsap";

import logo from "../Logo/image/logo.png";
import MovieSearch from "./Search";

const NAV_LINKS = [
  { to: "/home", label: "Home" },
  { to: "/category/Hollywood", label: "Hollywood" },
  { to: "/category/Bollywood", label: "Bollywood" },
 
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navbarRef = useRef(null);
  const mobileMenuRef = useRef(null);

  /* Navbar entrance animation */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        navbarRef.current,
        {
          y: -80,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        }
      );
    }, navbarRef);

    return () => ctx.revert();
  }, []);

  /* Mobile menu animation */
  useEffect(() => {
    const menu = mobileMenuRef.current;

    if (!menu) return;

    if (menuOpen) {
      gsap.to(menu, {
        height: "auto",
        opacity: 1,
        duration: 0.4,
        ease: "power3.out",
      });

      gsap.fromTo(
        menu.querySelectorAll(".mobile-link"),
        {
          y: -15,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.35,
          stagger: 0.08,
          delay: 0.1,
          ease: "power3.out",
        }
      );
    } else {
      gsap.to(menu, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power3.in",
      });
    }
  }, [menuOpen]);

  const desktopLinkClass = ({ isActive }) => `
    group relative py-2 text-sm font-semibold tracking-wide
    transition-all duration-300
    ${
      isActive
        ? "text-[#39ff14]"
        : "text-gray-300 hover:text-[#39ff14]"
    }
  `;

  return (
    <header
      ref={navbarRef}
      className="
        fixed left-0 top-0 z-[100] w-full
        border-b border-white/10
        bg-black/80
        backdrop-blur-xl
        shadow-[0_5px_30px_rgba(0,0,0,0.5)]
      "
    >
      {/* Green ambient light */}
      <div
        className="
          pointer-events-none absolute
          left-1/2 top-0 h-[1px] w-1/2
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent via-[#39ff14] to-transparent
          opacity-70
          blur-[2px]
        "
      />

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6">

        {/* Logo */}
        <NavLink
          to="/home"
          className="
            group relative flex items-center
            transition-transform duration-300
            hover:scale-105
          "
        >
          <div
            className="
              absolute -inset-3 rounded-full
              bg-[#39ff14]/10 opacity-0 blur-xl
              transition-opacity duration-500
              group-hover:opacity-100
            "
          />

          <img
            src={logo}
            alt="Movie Website"
            className="
              relative z-10
              h-16 w-44
              object-contain
              sm:h-20 sm:w-52
            "
          />
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={desktopLinkClass}
            >
              {({ isActive }) => (
                <>
                  <span className="relative z-10">
                    {link.label}
                  </span>

                  {/* Animated underline */}
                  <span
                    className={`
                      absolute -bottom-1 left-1/2 h-[2px]
                      -translate-x-1/2
                      rounded-full
                      bg-[#39ff14]
                      shadow-[0_0_10px_#39ff14]
                      transition-all duration-300
                      ${
                        isActive
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }
                    `}
                  />

                  {/* Hover glow */}
                  <span
                    className="
                      absolute inset-0 -z-10
                      rounded-lg
                      bg-[#39ff14]/10
                      opacity-0 blur-lg
                      transition-opacity duration-300
                      group-hover:opacity-100
                    "
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Search */}
        <div className="hidden lg:flex">
          <MovieSearch />
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-3 lg:hidden">
          <MovieSearch />

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="
              group relative flex h-11 w-11
              items-center justify-center
              overflow-hidden rounded-full
              border border-white/10
              bg-white/5 text-white
              transition-all duration-300
              hover:border-[#39ff14]/50
              hover:bg-[#39ff14]/10
              hover:text-[#39ff14]
              hover:shadow-[0_0_25px_rgba(57,255,20,0.2)]
              active:scale-90
            "
          >
            <span
              className="
                absolute inset-0
                -translate-x-full
                bg-gradient-to-r
                from-transparent
                via-[#39ff14]/20
                to-transparent
                transition-transform duration-700
                group-hover:translate-x-full
              "
            />

            <span className="relative z-10">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className="
          overflow-hidden
          border-t border-white/5
          bg-black/95
          backdrop-blur-xl
          lg:hidden
        "
        style={{
          height: 0,
          opacity: 0,
        }}
      >
        <nav className="flex flex-col px-6 py-6">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => `
                mobile-link group relative
                border-b border-white/5
                py-4 text-lg font-semibold
                transition-all duration-300
                ${
                  isActive
                    ? "text-[#39ff14]"
                    : "text-gray-300 hover:pl-3 hover:text-[#39ff14]"
                }
              `}
            >
              {link.label}

              <span
                className="
                  absolute bottom-0 left-0
                  h-[1px] w-0
                  bg-[#39ff14]
                  shadow-[0_0_10px_#39ff14]
                  transition-all duration-300
                  group-hover:w-full
                "
              />
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;