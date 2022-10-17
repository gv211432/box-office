import React from "react";

import { useParams } from "react-router-dom";
import Cast from "../components/show/Cast";
import Details from "../components/show/Details";
import Seasons from "../components/show/Seasons";
import ShowMainData from "../components/show/ShowMainData";
import { useShow } from "../misc/custom-hooks";

export default function Show() {
  const { id } = useParams(); // id is in string|undefined

  const { show, isLoading, error } =
    id !== undefined ? useShow(parseInt(id)) : null;

  if (isLoading) {
    return <div>Data is being loaded...</div>;
  }
  if (error) {
    return <div>Error occured: ${error}</div>;
  }
  return (
    <div>
      {/* <p>{JSON.stringify(show)}</p> */}
      {show && (
        <ShowMainData
          image={show.image}
          name={show.name}
          rating={show.rating}
          summary={show.summary}
          tags={show.genres}
        />
      )}
      {/* This is details section */}
      <div>
        <h2>Details</h2>
        {show && (
          <Details
            status={show.status}
            network={show.network}
            premiered={show.premiered}
          />
        )}
      </div>

      {/* this is seasons section with the Seasons component */}
      <div>
        <h2>Seasons</h2>
        {show && <Seasons seasons={show._embedded.seasons} />}
      </div>

      {/* this is Cast component */}
      <div>
        <h2>Cast</h2>
        {show && <Cast cast={show._embedded.cast} />}
      </div>
    </div>
  );
}
