import React from "react";
import { Route, Routes } from "react-router-dom";
import Starred from "./pages/Starred";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/starred" element={<Starred />}></Route>
      <Route
        path="/*"
        element={
          <div style={{ textAlign: "center" }}>
            <h1>Not Found!!</h1>
          </div>
        }
      ></Route>
    </Routes>
  );
}

export default App;
