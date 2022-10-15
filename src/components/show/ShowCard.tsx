import React from "react";
import { Link } from "react-router-dom";

function ShowCard({
  ids,
  image,
  name,
  summary,
}: {
  ids: number;
  image: string;
  name: string;
  summary: string;
}) {
  const summaryAsText = summary
    ? `${summary.split(" ").slice(0, 10).join(" ").replace(/<.+?>/g, "")}...`
    : "No description";

  return (
    <div>
      <div>
        <img src={image} alt="show" />
      </div>

      <h1>{name}</h1>

      <p>{summaryAsText}</p>

      <div>
        <Link to={`/show/${ids}`}>Read more</Link>
        <button type="button">Star me</button>
      </div>
    </div>
  );
}

export default ShowCard;
