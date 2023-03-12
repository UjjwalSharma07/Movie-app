import React, { useEffect, useState } from "react";
import "./movieList.css";
import { Link, useParams } from "react-router-dom";
import Cards from "../card/Card";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);

  const [text, setText] = useState("");

  const [SearchbarShow,setSearchBarShow] = useState(false);

  // console.log(movieList.filter(movie=>movie.original_title.toLowerCase().includes("fe")));

  const { type } = useParams();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [type]);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  };
  const handleChange = (e)=>{
    const changeText = e.target.value;
    if(changeText === ""){
        setSearchBarShow(false);
    }
    else{
        setText(changeText);
        setSearchBarShow(true);
    }
  }
  return (
    <div className="movie__list">
      <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
      <form className="searchBar">
        <input
          placeholder="Search here"
          onChange={handleChange}
          type="text"
        />
        {SearchbarShow && movieList
          .filter((movie) => movie.original_title.toLowerCase().includes(text)).slice(0,5)
          .map((movie) => (
            <div className="SearchList">
              <div className="SingleItem">
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to={`/movie/${movie.id}`}
                  key={movie.id}
                  className="SearchItem"
                >
                  {movie.original_title}
                </Link>
              </div>
            </div>
          ))}
      </form>
      <div className="list__cards">
        {movieList.map((movie) => (
          <Cards movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
