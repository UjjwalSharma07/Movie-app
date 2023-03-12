import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Homepage from "./Pages/HomePage/Homepage";
import MovieList from "./components/movieList/MovieList";
import Movie from "./Pages/MovieDetail/Movie";
import PageNotFound from "./Pages/Error/PageNotFound";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage/>}></Route>
          <Route path="movie/:id" element={<Movie/>}></Route>
          <Route path="movies/:type" element={<MovieList/>}></Route>
          <Route path="/*" element={<PageNotFound/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
