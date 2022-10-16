import React, { Reducer, useEffect, useReducer } from "react";

import { useParams } from "react-router-dom";
import Cast from "../components/show/Cast";
import Details from "../components/show/Details";
import Seasons from "../components/show/Seasons";
import ShowMainData from "../components/show/ShowMainData";
import { apiGet } from "../misc/config";
import { useShow } from "../misc/custom-hooks";
import { SHOW_TYPES_ALL } from "../misc/showTypes";

// interface pageState {
//   // show: SHOW_TYPES_ALL | null | undefined;
//   show: any | undefined | null;
//   isLoading: boolean;
//   error: string | null | undefined;
// }

// const reducer = (
//   prvState: pageState,
//   action: {
//     type: "FECTH_SUCCESS" | "FECTH_FAILED";
//     show?: SHOW_TYPES_ALL | null;
//     error?: string | null;
//   }
// ): pageState => {
//   switch (action.type) {
//     case "FECTH_SUCCESS": {
//       return { isLoading: false, error: null, show: action.show };
//     }
//     case "FECTH_FAILED": {
//       return { ...prvState, isLoading: false, error: action.error };
//     }
//     default:
//       return prvState;
//   }
// };

// const initialState = {
//   show: null,
//   isLoading: true,
//   error: null,
// };

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
