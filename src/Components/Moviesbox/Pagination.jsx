const Pagination = ({
  totalMovies,
  moviesPerPage,
  currentPage,
  setCurrentPage,
}) => {

  const totalPages = Math.ceil(
    totalMovies / moviesPerPage
  );

  return (
    <div className="flex justify-center items-center gap-2 mt-10">

      {/* Previous */}
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-40"
      >
        Prev
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(index + 1)}
          className={`w-10 h-10 rounded ${
            currentPage === index + 1
              ? "bg-red-600 text-white"
              : "bg-gray-800 text-white"
          }`}
        >
          {index + 1}
        </button>
      ))}

      {/* Next */}
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-40"
      >
        Next
      </button>

    </div>
  );
};

export default Pagination;