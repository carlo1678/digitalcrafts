import React from "react";
import { useState, useEffect } from "react";
import Movies from "./Movies";

export default function Search() {
  const [movies, setMovie] = useState([]);
  const [userInput, setUserInput] = useState("");

  const getMovies = async () => {
    const response = await fetch(
      `http://www.omdbapi.com/?s=&apikey=86a33ed3&t=${userInput}`,
      {
        headers: { Accept: "application/json" },
      }
    );
    const json = await response.json();
    setMovie(json.Title);
  };

  const changeInput = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <div className="search">
      <h3 className="searchHeading">Search for your Movie of choice!</h3>
      <input
        className="initialSearch"
        placeholder="Movie Name"
        type="text"
        value={userInput}
        onChange={changeInput}
      ></input>
      <button onClick={() => getMovies()}>Search!</button>
      {movies.map((movie) => (
        <Movies Title={movie.title} />
      ))}
    </div>
  );
}
