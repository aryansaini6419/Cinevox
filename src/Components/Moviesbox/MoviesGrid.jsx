import React from "react";
import MovieCard from "./Moviescard";

const MovieGrid = ({ movies }) => {
  if (movies.length === 0) {
    return (
      <div className="flex justify-center items-center py-20">
        <h2 className="text-2xl text-gray-400">
          No Movies Found
        </h2>
      </div>
    );
  }

  return (
    <div className="grid bg-black pt-8 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
        />
      ))}

    </div>
  );
};

export default MovieGrid;