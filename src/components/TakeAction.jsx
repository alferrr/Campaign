import React from "react";

import "../App.css";
import CountUp from "./CountUp.jsx";
import { motion } from "motion/react";
import { FaArrowRight } from "react-icons/fa6";

export default function TakeAction() {
  return (
    <>
      <div className="takeact" id="take">
        <span className="head">
          <span className="circle"></span>
          <h1>Take Action</h1>
        </span>
        <header>
          <h2>Be the Change</h2>
          <p>
            Learn how to fight misinformation, share verified news, <br />
            and help your community stay informed.
          </p>
        </header>
        <main>
          <div className="cards">
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0 }}
            >
              <span>Learn</span>
              <h3>Build Media Literacy</h3>
              <ul>
                <li>Spot common misinformation</li>
                <li>Check sources and images</li>
                <li>Think before sharing</li>
              </ul>
              <a href="" className="cta">
                Explore Resources
              </a>
            </motion.div>
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span>Share</span>
              <h3>Promote Verified Information</h3>
              <ul>
                <li>Share trusted sources</li>
                <li>Avoid emotional headlines</li>
                <li>Add context when sharing</li>
              </ul>
              <a href="" className="cta">
                Share
              </a>
            </motion.div>
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <span>Get Involved</span>
              <h3>Support Your Community</h3>
              <ul>
                <li>Use campaign materials</li>
                <li>Host or join discussions</li>
                <li>Support media literacy</li>
              </ul>
              <a href="" className="cta">
                Request Materials
              </a>
            </motion.div>
          </div>

          <div className="container">
            <motion.div
              className="sign"
              initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              <h3>Stay Informed</h3>
              <p>Get campaign updates and new resources. </p>
              <form action="">
                <span className="wrapper">
                  <input type="email" name="" id="" />
                </span>
                <a href="">
                  <FaArrowRight className="icon" />
                </a>
              </form>
            </motion.div>
            <motion.div
              className="stat"
              initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="count">
                <CountUp
                  from={0}
                  to={55}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />
                % Less
              </span>
              <h3>False sharing after media literacy training</h3>
            </motion.div>
          </div>
        </main>
      </div>
    </>
  );
}
