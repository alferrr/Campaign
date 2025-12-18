import React from "react";
import "../App.css";

import BlurText from "./BlurText/BlurText.jsx";
import { FaArrowRight } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <footer id="footer">
        <header>
          <div className="title">
            <BlurText
              text="Truth Matters"
              delay={150}
              animateBy="words"
              direction="bottom"
              className="h1"
            />
            <p>
              Building awareness, trust, and media literacy in the digital age.
            </p>
          </div>

          <form action="">
            <h1>Newsletter</h1>
            <p>Sign in to newsletter and never miss an update.</p>
            <div className="input">
              <input type="email" />
              <span>
                <FaArrowRight className="icon" />
              </span>
            </div>
          </form>
        </header>
        <main>
          <nav>
            <h2>Navigation</h2>
            <a href="#home">
              Home
              <FaArrowRight className="icon" />
            </a>
            <a href="#about">
              About
              <FaArrowRight className="icon" />
            </a>
            <a href="#how">
              How to Spot Fake News
              <FaArrowRight className="icon" />
            </a>
            <a href="#res">
              Resources
              <FaArrowRight className="icon" />
            </a>
          </nav>
          <nav>
            <h2>Social Links</h2>
            <a href="https://www.linkedin.com/login" target="_blank">
              LinkedIn <FaArrowRight className="icon" />
            </a>
            <a href="https://instagram.com/alfermercads" target="_blank">
              Instagram <FaArrowRight className="icon" />
            </a>
            <a href="https://x.com/" target="_blank">
              X/Twitter <FaArrowRight className="icon" />
            </a>
          </nav>
          <nav>
            <h2>Contact Us</h2>
            <ul>
              <li>+63 976 368 9315</li>
              <li>truthmatters@gmail.com</li>
              <li>6767, JPMorgan, Cebu, Philippines</li>
            </ul>
          </nav>
        </main>

        <div className="footer">
          <p>
            This is a fictional organization created for educational purposes
            only.
          </p>
          <h3>
            Designed and Developed by <strong>Alfer Brent Mercado</strong>
          </h3>
        </div>
      </footer>
    </>
  );
}
