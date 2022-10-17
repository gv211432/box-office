import React from "react";
import Navs from "./Navs";
import Title from "./Title";

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
