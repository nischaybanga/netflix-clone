import React, { useEffect, useState } from "react";
import instance from "./axios";
import "./Row.css";
const imageBaseURL = "https://image.tmdb.org/t/p/original";
function Row(props) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await instance.get(props.fetchURL);
      setMovies(response.data.results);
      return response;
    }
    getData();
  }, [props.fetchURL]);
//   console.log(movies);
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="rowPosters">
        {movies.map((movie) => {
          return (
            <img
              className={`rowPoster ${props.isLargeRow && 'rowPosterLarge'}`}
              key={movie.id}
              src={
                props.isLargeRow
                  ? `${imageBaseURL}${movie.poster_path}`
                  : `${imageBaseURL}${movie.backdrop_path}`
              }
              alt={movie.name}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Row;
