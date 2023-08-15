import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../../axios";
import { API_KEY, imageURL } from "../../Constants/Constants";
function Banner() {
  const [movie, setMovie] = useState();

  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
       //console.log(response.data.result);
        setMovie(
          response.data.results.sort(function (a, b) {
            return 0.5 - Math.random();
          })[0]
        );
      });
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${movie ? imageURL + movie.backdrop_path : ""})`,
      }}
    >
      <div className="banner">
        <div className="content">
          <h1 className="title">{movie ? movie.title : ""}</h1>
          <div className="banner-buttons">
            <button className="button" type="Button" >
              Play
            </button>
            <button className="button" type="Button">
              My List
            </button>
          </div>
          <h1 className="description">{movie ? movie.overview : ""}</h1>
        </div>
        <div className="fade-button"></div>
      </div>
    </div>
  );
}

export default Banner;
