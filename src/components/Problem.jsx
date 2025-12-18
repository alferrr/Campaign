import React from "react";
import CountUp from "./CountUp.jsx";

import "../App.css";
import Faster from "../assets/node.png";
import { motion } from "motion/react";

export default function Problem() {
  return (
    <>
      <div className="problem" id="problem">
        <span className="head">
          <span className="circle"></span>
          <h1>The Problem</h1>
        </span>

        <header>
          <h2>The Cost of Fake News</h2>
          <p>
            False and misleading information spreads faster than facts, shaping
            opinions before truth has a chance to catch up.
          </p>
        </header>

        <div className="container">
          <motion.div
            className="block one"
            initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <div className="overlay"></div>
            <span className="count">
              <CountUp
                from={0}
                to={6}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
              />
              x Faster
            </span>
            <h3>False news spreads</h3>
            <p>Than verified information online.</p>
          </motion.div>

          <motion.div
            className="block two"
            initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
          >
            <div className="overlay"></div>
            <span className="count">
              <CountUp
                from={0}
                to={70}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
              />
              %
            </span>
            <h3>People exposed weekly</h3>
            <p>To misleading or false content.</p>
          </motion.div>

          <motion.div
            className="block three"
            initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.7 }}
          >
            <div className="overlay"></div>
            <span className="count">
              <CountUp
                from={0}
                to={80}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
              />
              %
            </span>
            <h3>Headlines Shared</h3>
            <p>Without reading the full article.</p>
          </motion.div>
        </div>
      </div>
    </>
  );
}
