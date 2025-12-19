import React from "react";
import "./index.css";

import "./App.css";

import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Problem from "./components/Problem.jsx";
import Spot from "./components/Spot.jsx";
import Resources from "./components/Resources.jsx";
import TakeAction from "./components/TakeAction.jsx";
import Footer from "./components/Footer.jsx";
import Snowfall from "react-snowfall";

export default function App() {
  return (
    <>
      <Snowfall />
      <Header />
      <Hero />
      <About />
      <Problem />
      <Spot />
      <Resources />
      <TakeAction />
      <Footer />
    </>
  );
}
