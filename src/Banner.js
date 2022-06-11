import React from "react";
import requests from "./requests";
import instance from "./axios";
import "./Banner.css";
import { useEffect, useState } from "react";

const imageBaseURL = "https://image.tmdb.org/t/p/original";
function Banner() {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    async function getData() {
      const response = await instance.get(requests.fetchTrending);
      setMovie(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ]
      );
    }
    getData();
  }, []);
  console.log(movie);
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url('${imageBaseURL}${movie?.backdrop_path}')`,
        backgroundSize: "cover",
        backgroundPosition: "centre centre",
      }}
    >
      <div className="bannerContents">
        <h1 className="bannerTitle">{movie?.name || movie?.title || movie?.original_name}</h1>
        <div className="bannerButtons">
          <button type="button" className="bannerButton">Play</button>
          <button type="button" className="bannerButton">More Info</button>
        </div>
        <h1 className="bannerDescription">{movie?.overview}</h1>
      </div>
      <div className="bannerFadeBottom"></div>
    </header>
  );
}

export default Banner;
//Math.floor(Math.random() * );
