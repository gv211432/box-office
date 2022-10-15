import React from "react";
import { TV_ACTOR_ALL } from "../../misc/types";
import ActorCard from "./ActroCard";
import NOT_FOUND from "../../images/not_found.png";

const ActorGrid = ({ data }: { data?: Array<TV_ACTOR_ALL> }) => {
  return (
    <div>
      {data !== undefined &&
        data.map(({ person }) => (
          <ActorCard
            key={person.id}
            name={person.name}
            country={person.country ? person.country.name : null}
            birthday={person.birthday}
            deathday={person.deathday}
            gender={person.gender}
            image={person.image ? person.image.medium : NOT_FOUND}
          />
        ))}
    </div>
  );
};

export default ActorGrid;
