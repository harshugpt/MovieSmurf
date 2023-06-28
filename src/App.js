import { useState, useEffect } from "react";
import Moviecard from "./MovieCard";

import "./App.css";
//import SeachIcon from './Search.svg';

//const API_URL = "https://www.omdbapi.com?apikey=917c82e3";

const App = () => {
  const [movies, setmovies] = useState([]);
  const [searchitem, setsearchitem] = useState("");

  const searchmovie = async (title) => {
    const response = await fetch(
      `https://www.omdbapi.com?apikey=917c82e3&s=${title}`
    );
    const data = await response.json();

    setmovies(data.Search);
  };
  useEffect(() => {
    searchmovie("Jungle");
  }, []);
  return (
    <div className="app">
      <h1>MovieSmurf</h1>
      <div className="search">
        <input
          placeholder="Search"
          value={searchitem}
          onChange={(e) => setsearchitem(e.target.value)}
        ></input>
        <img src="" alt="search" onClick={() => searchmovie(searchitem)}></img>
      </div>
      {movies?.length > 0 ? (
        <div className="display">
          {movies.map((movie) => (
            <Moviecard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
