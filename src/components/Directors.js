import React from "react";
import { directors } from "../data";

function Directors() {

  const directorElements = directors.map(director => {
    const movieElements = director.movies.map(movie => <li key={movie}>{movie}</li>)
    return (
      <div key={director.name}>
        {director.name}
        {movieElements}
      </div>
    )
  })
  return <div>{/*{code here}*/}
    <h1>Directors Page</h1>
    {directorElements}
  </div>;
}

export default Directors;
