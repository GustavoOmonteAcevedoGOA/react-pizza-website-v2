import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { GlobalStyle } from "./globalStyles";


function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Navbar/>
      <Hero/>
    </Router>
  );
}

export default App;

