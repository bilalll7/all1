import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./pages/Hero/index";
import About from "./pages/About/index";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/all1/" element={<Hero />}></Route>
          <Route exact path="/all1/all1/about" element={<About />}></Route>
        </Routes>
      </Router>
    </>
  );
}
export default App;
