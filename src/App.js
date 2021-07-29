import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Hero from "./components/Hero";
import { ProductData, ProductDataTwo } from "./components/Products/data";
import { GlobalStyle } from "./globalStyles";
import Products from "./components/Products";
import Feature from "./components/Feature";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <GlobalStyle/>      
      <Hero/>
      <Products heading='Choose your favorite' data={ProductData}/>
      <Feature/>
      <Products heading='Sweet Treats for you' data={ProductDataTwo}/>
      <Footer/>
    </Router>
  );
}

export default App;

