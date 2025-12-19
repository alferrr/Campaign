import React from "react";

import "./about.css";
import Ad from "../assets/video.mp4";
import Poster from "../assets/POSTER.jpg";
import { FaArrowLeft } from "react-icons/fa6";

import BlurText from "./BlurText/BlurText.jsx";
import CountUp from "./CountUp.jsx";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

import TakeAction from "./TakeAction.jsx";
import Footer from "./Footer.jsx";

export default function LearnMore() {
  return (
    <>
      <section className="herolearn" id="more">
        <Link to="/">
          <FaArrowLeft className="back" />
        </Link>
        <header>
          <div className="blur"></div>
          <span className="us">About Us</span>

          <BlurText
            text="Driven by"
            delay={150}
            animateBy="words"
            direction="bottom"
            className="h5"
          />
          <BlurText
            text="Truth and Trust"
            delay={150}
            animateBy="words"
            direction="bottom"
            className="h5"
          />

          <motion.div
            className="p"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Empowering people to recognize misinformation and share verified
            information responsibly.
          </motion.div>
        </header>
        <main>
          <motion.div
            className="h6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            An educational non-profit helping communities recognize{" "}
            <span>misinformation</span> and{" "}
            <span>make informed decisions.</span>
          </motion.div>
        </main>
      </section>

      <motion.div
        className="stats"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          <div className="count">
            <span>
              <CountUp
                from={0}
                to={85}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
              />
              % <br />
            </span>
            Improved accuracy after training
          </div>
          <div className="count">
            <span>
              <CountUp
                from={0}
                to={55}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
              />
              %
            </span>
            Reduction in false sharing
          </div>
          <div className="count">
            <span>
              <CountUp
                from={0}
                to={3}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
              />{" "}
              steps
            </span>{" "}
            To verify most claims
          </div>
        </div>
      </motion.div>

      <motion.div
        className="ad"
        id="ad"
        initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          <div className="video">
            <span className="head">
              <span className="circle"></span>
              <h1>Campaign Video</h1>
            </span>
            <video controls>
              <source src={Ad} />
            </video>
          </div>
          <div className="poster">
            <span className="head">
              <span className="circle"></span>
              <h1>Poster</h1>
            </span>
            <a href={Poster} download="truthmatters.jpg">
              <img src={Poster} alt="" />
            </a>
          </div>
        </div>
        <p>
          An overview of why misinformation works and how to recognize it before
          sharing.
        </p>
      </motion.div>

      <section className="team">
        <span className="head">
          <span className="circle"></span>
          <h1>Our Team</h1>
        </span>

        <header>
          <h2>People Behind the Mission</h2>
          <p>Working together to promote informed communities.</p>
        </header>

        <motion.div
          className="container"
          id="container"
          initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <div className="row">
            <div className=" card large alfer">
              <h3>Alfer Brent Mercado</h3>
            </div>
            <div className=" card small iza">
              <h3>Izabel Dela Calzada</h3>
            </div>
          </div>
          <div className="row two">
            <div className=" card large peter">
              <h3>Peter Miranda</h3>
            </div>
            <div className=" card small noah">
              <h3>Noah Enriquez</h3>
            </div>
          </div>
          <div className="row three">
            <div className=" card large lance">
              <h3>Lance Luciano</h3>
            </div>
            <div className=" card small nyfe">
              <h3>Nyfe Pomoy</h3>
            </div>
          </div>
        </motion.div>
      </section>
      <TakeAction />
      <Footer />
    </>
  );
}
