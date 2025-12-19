import React from "react";

import "../App.css";

import heroImage from "../assets/hero.jpg";
import Ad from "../assets/video.mp4";
import Header from "./Header.jsx";

import BlurText from "./BlurText/BlurText.jsx";
import Snowfall from "react-snowfall";
import { Link } from "react-router-dom";

export default function Hero() {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };
  return (
    <>
      <div className="hero" id="home">
        <div className="gradient"></div>
        <video playsInline muted autoPlay loop>
          <source src={Ad} />
        </video>

        <main>
          <BlurText
            text="Truth Matters"
            delay={150}
            animateBy="words"
            direction="bottom"
            onAnimationComplete={handleAnimationComplete}
            className="h1"
          />
          <BlurText
            text="Spot fake news. Share Facts. Build Trust."
            delay={150}
            animateBy="words"
            direction="bottom"
            onAnimationComplete={handleAnimationComplete}
            className="h2"
          />
          <BlurText
            text="False information spreads fast. Media literacy helps stop it."
            delay={150}
            animateBy="words"
            direction="bottom"
            onAnimationComplete={handleAnimationComplete}
            className=""
          />

          <nav>
            <a href="#take">Take Action</a>
            <Link to="/about" className="learn">
              Learn About Us
            </Link>
          </nav>
        </main>

        <div className="bot"></div>
      </div>
    </>
  );
}
