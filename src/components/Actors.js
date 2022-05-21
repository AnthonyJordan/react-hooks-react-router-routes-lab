import React from "react";
import { actors } from "../data";

function Actors() {
  const actorElements = actors.map(actor => {
    const movieElements = actor.movies.map(movie => <li key={movie}>{movie}</li>)
    return (
      <div key={actor.name}>
        {actor.name}
        {movieElements}
      </div>
    )
  })
  return <div>{/*{code here}*/}
    <h1>Actors Page</h1>
    {actorElements}
  </div>;
}

export default Actors;
