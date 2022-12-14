import React, { useCallback } from "react";
import ShowCard from "./ShowCard";
import { TV_DATA_ALL } from "../../misc/types";
import { FlexGrid } from "../styled";

import IMAGE_NOT_FOUND from "../../images/not-found.png";
import { useShows } from "../../misc/custom-hooks";

const ShowGrid = ({ data }: { data?: Array<TV_DATA_ALL> }) => {
  const [starredShows, dispatchStarred] = useShows();

  return (
    <FlexGrid>
      {data &&
        data.map(({ show }) => {
          const isStarred = starredShows.includes(show.id);

          const onStarClick = useCallback(() => {
            if (isStarred) {
              dispatchStarred({ type: "REMOVE", showId: show.id });
            } else {
              dispatchStarred({ type: "ADD", showId: show.id });
            }
          }, [isStarred, show.id]);

          return (
            <ShowCard
              key={show.id}
              ids={show.id}
              name={show.name}
              image={show.image ? show.image.medium : IMAGE_NOT_FOUND}
              summary={show.summary}
              onStarClick={onStarClick}
              isStarred={isStarred}
            />
          );
        })}
    </FlexGrid>
  );
};

export default ShowGrid;
