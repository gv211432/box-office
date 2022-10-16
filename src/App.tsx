import React from "react";
import { Route, Routes } from "react-router-dom";
import Starred from "./pages/Starred";
import Home from "./pages/Home";
import Show from "./pages/Show";
import { ThemeProvider } from "styled-components";

const theme = {
  mainColors: {
    blue: "#2400ff",
    gray: "#c6c6c6",
    dark: "#353535",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/starred" element={<Starred />}></Route>
        <Route path="/show/:id" element={<Show />}></Route>
        <Route
          path="/*"
          element={
            <div style={{ textAlign: "center" }}>
              <h1>Not Found!!</h1>
            </div>
          }
        ></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
