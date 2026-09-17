import { Link } from "react-router-dom";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const MovieCard = ({ movie }) => {
  const cardRef = useRef(null);

  useGSAP(() => {
    // Card starts well below its final spot and off-screen (opacity 0).
    // As the user scrolls down and the card's top edge reaches 95% of the
    // viewport height, it animates upward into place — a clear "data rises
    // up from below" reveal.
    gsap.fromTo(
      cardRef.current,
      {
        opacity: 0,
        y: 120,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power4.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 95%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <Link to={`/movie/${movie.id}`}>
      <div
        ref={cardRef}
        className="group mt-2 mb-6 cursor-pointer overflow-hidden rounded-2xl bg-zinc-900 shadow-lg duration-300 hover:scale-105 hover:shadow-red-600/30"
      >
        {/* Movie Image */}
        <div className="overflow-hidden">
          <img
            src={movie.image}
            alt={movie.title}
            className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Movie Details */}
        <div className="p-4 text-white">
          <h2 className="mb-2 line-clamp-1 text-xl font-bold">
            {movie.title}
          </h2>

          <p className="text-sm text-gray-400">{movie.genre}</p>

          <div className="mt-3 flex items-center justify-between">
            <span className="text-yellow-400">⭐ {movie.rating}</span>
            <span className="text-gray-400">{movie.year}</span>
          </div>

          <button className="mt-5 w-full rounded-lg bg-red-600 py-2 font-semibold transition hover:bg-red-700">
            View Details
          </button>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;