import React from "react";
import "../App.css";

import SpotlightCard from "./Spotlight Card/SpotlightCard.jsx";
import { motion } from "motion/react";

import { FaCircleCheck } from "react-icons/fa6";
import { FaGlasses } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa";
import { FaExclamationTriangle } from "react-icons/fa";
import { LuBookOpenCheck } from "react-icons/lu";
import { MdOutlineMobileScreenShare } from "react-icons/md";

export default function Spot() {
  return (
    <>
      <div className="spot" id="how">
        <span className="head">
          <span className="circle"></span>
          <h1>How to Spot</h1>
        </span>

        <header>
          <h2>Fake News</h2>
          <p>
            Small habits make a big difference when spotting <br />
            false information.
          </p>
        </header>
        <motion.div
          className="container"
          initial={{ opacity: 1, y: 20, filter: "blur(5px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="blocks">
            <SpotlightCard
              className="card"
              spotlightColor="rgba(0, 183, 73, 0.8)"
            >
              <FaCircleCheck className="icon" />
              <h3>Check the Source</h3>
              <p>Trust reputable sites.</p>
            </SpotlightCard>
            <SpotlightCard
              className="card"
              spotlightColor="rgba(0, 183, 73, 0.8)"
            >
              <FaGlasses className="icon" />
              <h3>Read Beyond Headlines</h3>
              <p>Titles can be misleading.</p>
            </SpotlightCard>
            <SpotlightCard
              className="card"
              spotlightColor="rgba(0, 183, 73, 0.8)"
            >
              <FaSearch className="icon" />
              <h3>Look for Evidence</h3>
              <p>Facts, quotes, or official data matter</p>
            </SpotlightCard>
            <SpotlightCard
              className="card"
              spotlightColor="rgba(0, 183, 73, 0.8)"
            >
              <FaCalendarCheck className="icon" />
              <h3>Check the Date</h3>
              <p>Old news can be recycled.</p>
            </SpotlightCard>
            <SpotlightCard
              className="card"
              spotlightColor="rgba(0, 183, 73, 0.8)"
            >
              <FaRegNewspaper className="icon" />
              <h3>Verify with Multiple Sources</h3>
              <p>True news shows up elsewhere.</p>
            </SpotlightCard>
            <SpotlightCard
              className="card"
              spotlightColor="rgba(0, 183, 73, 0.8)"
            >
              <FaExclamationTriangle className="icon" />
              <h3>Watch for Bias</h3>
              <p>Extreme opinions may signal misinformation.</p>
            </SpotlightCard>
            <SpotlightCard
              className="card"
              spotlightColor="rgba(0, 183, 73, 0.8)"
            >
              <LuBookOpenCheck className="icon" />
              <h3>Check the Author</h3>
              <p>Experts and journalists are more reliable.</p>{" "}
            </SpotlightCard>
            <SpotlightCard
              className="card"
              spotlightColor="rgba(0, 183, 73, 0.8)"
            >
              <MdOutlineMobileScreenShare className="icon" />

              <h3>Think Before Sharing</h3>
              <p>Pause and question before spreading it.</p>
            </SpotlightCard>
          </div>
          <div className="poster"></div>
        </motion.div>
      </div>
    </>
  );
}
