import React, { memo } from "react";
import { Link } from "react-router-dom";
import { Star } from "../styled";
import { StyledShowCard } from "./ShowCard.styled";
import NOT_FOUND from "../../images/not-found.png";
import LOADING_ICON from "../../images/loading-icon.gif";
const ShowCard = ({
  ids,
  image,
  name,
  summary,
  onStarClick,
  isStarred,
}: {
  ids: number;
  image: string;
  name: string;
  summary: string;
  onStarClick: any;
  isStarred: any;
}) => {
  const summaryAsText = summary
    ? `${summary.split(" ").slice(0, 10).join(" ").replace(/<.+?>/g, "")}...`
    : "No description";

  return (
    <StyledShowCard>
      <div
        className="img-wrapper"
        style={{ backgroundColor: "#aeaeae" }}
        // style={{
        //   backgroundColor: "#ffffff",
        //   backgroundPosition: "center",
        //   backgroundImage: `url(${LOADING_ICON})`,
        //   backgroundRepeat: "no-repeat",
        //   backgroundSize: "110,110",
        // }}
      >
        <img src={image} />
      </div>

      <h1>{name}</h1>

      <p>{summaryAsText}</p>

      <div className="btns">
        <Link to={`/show/${ids}`}>Read more</Link>
        <button type="button" onClick={onStarClick}>
          <Star active={isStarred} />
        </button>
      </div>
    </StyledShowCard>
  );
};

export default memo(ShowCard);
