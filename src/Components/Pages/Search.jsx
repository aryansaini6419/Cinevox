import { useEffect, useRef, useState } from "react";
import { Search, X, Film } from "lucide-react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

import movies from "../../Components/Moviesbox/Movies";

const MovieSearch = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const searchRef = useRef(null);
  const inputRef = useRef(null);
  const resultsRef = useRef(null);

  const navigate = useNavigate();

  // -----------------------------------
  // FILTER MOVIES
  // -----------------------------------

  const filteredMovies =
    query.trim().length > 0
      ? movies
          .filter((movie) =>
            movie.title
              ?.toLowerCase()
              .includes(query.trim().toLowerCase())
          )
          .slice(0, 6)
      : [];

  // -----------------------------------
  // OPEN / CLOSE SEARCH ANIMATION
  // -----------------------------------

  useEffect(() => {
    if (!searchRef.current) return;

    const ctx = gsap.context(() => {
      if (open) {
        gsap.fromTo(
          searchRef.current,
          {
            width: 0,
            opacity: 0,
            scaleX: 0.85,
          },
          {
            width: "min(380px, 88vw)",
            opacity: 1,
            scaleX: 1,
            duration: 0.45,
            ease: "power3.out",
          }
        );

        requestAnimationFrame(() => {
          inputRef.current?.focus();
        });
      } else {
        gsap.to(searchRef.current, {
          width: 0,
          opacity: 0,
          scaleX: 0.85,
          duration: 0.3,
          ease: "power3.in",
        });

        setQuery("");
      }
    }, searchRef);

    return () => ctx.revert();
  }, [open]);

  // -----------------------------------
  // RESULTS ANIMATION
  // -----------------------------------

  useEffect(() => {
    if (!resultsRef.current || !query.trim()) return;

    const items = resultsRef.current.querySelectorAll(".search-result");

    if (!items.length) return;

    gsap.fromTo(
      items,
      {
        y: 15,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.3,
        stagger: 0.05,
        ease: "power3.out",
      }
    );
  }, [filteredMovies.length, query]);

  // -----------------------------------
  // SUBMIT SEARCH
  // -----------------------------------

  const handleSearch = (e) => {
    e.preventDefault();

    const value = query.trim();

    if (!value) return;

    navigate(`/search?query=${encodeURIComponent(value)}`);

    setOpen(false);
  };

  // -----------------------------------
  // MOVIE CLICK
  // -----------------------------------

  const handleMovieClick = (movie) => {
    navigate(`/movie/${movie.id}`);

    setOpen(false);
    setQuery("");
  };

  return (
    <div className="relative flex items-center">
      {/* SEARCH BUTTON */}

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Close search" : "Open search"}
        className="
          group relative z-[60]
          flex h-11 w-11 shrink-0
          items-center justify-center
          overflow-hidden rounded-full
          border border-white/10
          bg-white/5
          text-white
          backdrop-blur-md
          transition-all duration-300

          hover:border-[#39ff14]/50
          hover:bg-[#39ff14]/10
          hover:text-[#39ff14]
          hover:shadow-[0_0_25px_rgba(57,255,20,0.25)]

          active:scale-90
        "
      >
        {/* Hover shine */}

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

        {open ? (
          <X
            size={21}
            className="relative z-10"
          />
        ) : (
          <Search
            size={21}
            className="relative z-10"
          />
        )}
      </button>

      {/* SEARCH PANEL */}

      <div
        ref={searchRef}
        className="
          absolute right-0 top-1/2
          z-50
          -translate-y-1/2
          origin-right
          overflow-visible
        "
        style={{
          width: 0,
          opacity: 0,
        }}
      >
        {/* SEARCH INPUT */}

        <form
          onSubmit={handleSearch}
          className="
            flex h-11
            w-full
            items-center
            rounded-full
            border border-[#39ff14]/30
            bg-black/95
            px-4
            shadow-[0_0_30px_rgba(57,255,20,0.15)]
            backdrop-blur-xl
          "
        >
          <Search
            size={18}
            className="
              mr-2
              shrink-0
              text-[#39ff14]
            "
          />

          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search movies..."
            autoComplete="off"
            className="
              w-full
              min-w-0
              bg-transparent
              text-sm
              text-white
              outline-none
              placeholder:text-gray-500
            "
          />

          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="
                ml-2
                shrink-0
                text-gray-500
                transition
                hover:text-[#39ff14]
              "
            >
              <X size={16} />
            </button>
          )}
        </form>

        {/* SEARCH RESULTS */}

        {query.trim() && (
          <div
            ref={resultsRef}
            className="
              absolute
              right-0
              top-[52px]
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-[#080808]/98
              p-2
              shadow-[0_20px_60px_rgba(0,0,0,0.6)]
              backdrop-blur-xl
            "
          >
            {filteredMovies.length > 0 ? (
              <div className="space-y-1">
                {filteredMovies.map((movie) => (
                  <button
                    key={movie.id}
                    type="button"
                    onClick={() => handleMovieClick(movie)}
                    className="
                      search-result
                      group
                      flex
                      w-full
                      items-center
                      gap-3
                      rounded-xl
                      p-2
                      text-left
                      transition-all
                      duration-300

                      hover:bg-[#39ff14]/10
                    "
                  >
                    {/* POSTER */}

                    <div
                      className="
                        h-14
                        w-10
                        shrink-0
                        overflow-hidden
                        rounded-md
                        bg-white/5
                      "
                    >
                      {movie.poster ? (
                        <img
                          src={movie.poster}
                          alt={movie.title}
                          className="
                            h-full
                            w-full
                            object-cover
                            transition-transform
                            duration-500
                            group-hover:scale-110
                          "
                        />
                      ) : (
                        <div
                          className="
                            flex
                            h-full
                            w-full
                            items-center
                            justify-center
                            text-gray-600
                          "
                        >
                          <Film size={15} />
                        </div>
                      )}
                    </div>

                    {/* MOVIE INFO */}

                    <div className="min-w-0 flex-1">
                      <h3
                        className="
                          truncate
                          text-sm
                          font-medium
                          text-white
                          transition-colors
                          group-hover:text-[#39ff14]
                        "
                      >
                        {movie.title}
                      </h3>

                      <p
                        className="
                          mt-1
                          text-xs
                          text-gray-500
                        "
                      >
                        {movie.year || "Movie"}
                      </p>
                    </div>

                    {/* ARROW */}

                    <span
                      className="
                        pr-2
                        text-gray-600
                        transition-all
                        duration-300
                        group-hover:translate-x-1
                        group-hover:text-[#39ff14]
                      "
                    >
                      →
                    </span>
                  </button>
                ))}
              </div>
            ) : (
              /* NO RESULTS */

              <div
                className="
                  flex
                  flex-col
                  items-center
                  justify-center
                  px-4
                  py-8
                  text-center
                "
              >
                <div
                  className="
                    mb-3
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-[#39ff14]/10
                    text-[#39ff14]
                  "
                >
                  <Search size={18} />
                </div>

                <p className="text-sm text-white">
                  No movies found
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Try searching another title
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieSearch;