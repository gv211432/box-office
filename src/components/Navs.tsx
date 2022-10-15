import React from "react";
import { Link } from "react-router-dom";

const LINKS = [
  { to: "/", text: "Home" },
  { to: "/starred", text: "Starred" },
];

export default function Navs() {
  return (
    <div>
      <ul>
        {LINKS.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.to}>{item.text}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
