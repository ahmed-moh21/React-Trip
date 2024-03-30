import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Navbar/Navbar";
import Home from "./Home/home";
import Vehicles from "./Vehicles/vehicles";
import About from "./About/about";
import Pricing from "./Pricing/pricing";
import Contact from "./Contact/contact";
import ErrorPage from "./ErrorPage/erroroage";



class App extends Component {

  //Loading screen
  constructor() {
    super();
    setTimeout(
      function () {
        let loader = document.getElementById("loader")
        loader.classList.add("load")
      }, 5000);
  }


  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route  path="/123" element={<ErrorPage />} />
          </Routes>
         <div id="loader"></div>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
