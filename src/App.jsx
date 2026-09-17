import { Routes, Route } from "react-router-dom";

import Login from "./Components/Logo/Login";
import Home from "./Components/Home/Home";
import MovieDetails from "./Components/Moviesbox/MovieDetails";
import CategoryPage from "./Components/Home/CategoryPage";
import ScrollToTop from "./Components/Home/ScrollToTop";
function App() {
  return (
    <>
      <ScrollToTop />
    
    <Routes>

      <Route path="/" element={<Login />} />

      <Route path="/home" element={<Home />} />

      <Route
        path="/movie/:id"
        element={<MovieDetails />}
      />

      <Route
        path="/category/:category"
        element={<CategoryPage />}
      />

    </Routes>
    </>
  );
}

export default App;