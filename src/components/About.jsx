import React from "react";
import { motion } from "motion/react";

export default function About() {
  return (
    <>
      <div className="about" id="about">
        <div className="text">
          <span className="head">
            <span className="circle"></span>
            <h1>About Us</h1>
          </span>
          <h2>
            United by Truth. <br />
            Stronger Against Misinformation.
          </h2>
          <p>We are an educational campaign focused on media literacy.</p>

          <a href="javascript:void(0)">Learn More</a>
        </div>

        <motion.div
          className="photo"
          initial={{ opacity: 0, x: 20, filter: "blur(5px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        ></motion.div>
      </div>
    </>
  );
}
