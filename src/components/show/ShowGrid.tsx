import React from "react";
import ShowCard from "./ShowCard";
import NOT_FOUND from "../../images/not_found.png";
import { TV_DATA_ALL } from "../../misc/types";
import { FlexGrid } from "../styled";

export default function ShowGrid({ data }: { data?: Array<TV_DATA_ALL> }) {
  return (
    <FlexGrid>
      {data !== undefined &&
        data.map(({ show }) => {
          return (
            <ShowCard
              ids={show.id}
              key={show.id}
              name={show.name}
              image={show.image ? show.image.medium : NOT_FOUND}
              summary={show.summary}
            />
          );
        })}
    </FlexGrid>
  );
}
