import React from "react";
import { StyledActorCard } from "./ActorCard.styled";

const ActorCard = ({
  image,
  name,
  gender,
  country,
  birthday,
  deathday,
}: {
  image: string;
  name: string;
  gender: string;
  country: string | null;
  birthday: string;
  deathday: string;
}) => {
  return (
    <StyledActorCard>
      <div className="img-wrapper" style={{ backgroundColor: "#aeaeae" }}>
        <img src={image} alt="actor" />
      </div>
      <h1>
        {name} {gender ? `(${gender})` : null}
      </h1>
      <p>{country ? `Comes from ${country}` : "No country known"}</p>
      {birthday ? <p>Born {birthday}</p> : null}
      <p className="deathday">{deathday ? `Died ${deathday}` : "Alive"}</p>
    </StyledActorCard>
  );
};
export default ActorCard;
