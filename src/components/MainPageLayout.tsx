import React from "react";
import Navs from "./Navs";
import Title from "./Title";
// import PropTypes from "prop-types";

// MainPageLayout.propTypes = {
//   children: PropTypes.string.isRequired,
// };

export default function MainPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Title
        title="Box Office"
        subtitle="Are you looking for a movie or an actor"
      />
      <Navs />
      {children}
    </div>
  );
}
