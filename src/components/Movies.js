import React from "react";
import { movies } from "../data";

function Movies() {
  const movieElements = movies.map((movie) => {
    const movieGenres = movie.genres.map((genre) => <li key={genre}>{genre}</li>)
    return (
      <div key={movie.title}>
        {movie.title}
        {movie.time}
        <ul>
          {movieGenres}
        </ul>
      </div>
    )
  })
  return <div>{/*{code here}*/}
    <h1>Movies Page</h1>
    {movieElements}
  </div>;
}

export default Movies;
