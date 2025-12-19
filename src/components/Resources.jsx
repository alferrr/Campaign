import { useRef, useEffect } from "react";

import "../App.css";

import Vid from "../assets/video.mp4";
import Poster from "../assets/POSTER.jpg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion } from "motion/react";

export default function Resources() {
  const videoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: videoRef.current,
          start: "top-=200 top",
          end: "bottom+=1030 bottom",
          scrub: true,
          pin: true,
          markers: false,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="resource" id="res">
        <span className="head">
          <div className="circle"></div>
          <h1>Resources</h1>
        </span>

        <header>
          <h2>Your Guide to Trusted News</h2>
          <p>
            Helpful resources for identifying credible information and <br />
            avoiding misinformation.
          </p>
        </header>

        <main>
          <video
            autoPlay
            playsInline
            muted
            loop
            className="video"
            ref={videoRef}
          >
            <source src={Vid} />
          </video>
          <div className="container">
            <motion.div
              className="block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeIn" }}
            >
              <span>Fact-Checking</span>
              <h3>Verify the Facts</h3>
              <p>
                Trusted organizations that investigate public claims and viral
                stories using evidence and sources.
              </p>
              <div className="stuff">
                <a href="https://www.snopes.com/fact-check/" target="_blank">
                  Snopes
                </a>
                <a href="https://www.politifact.com/" target="_blank">
                  PolitiFact
                </a>
                <a href="https://www.factcheck.org/" target="_blank">
                  Factcheck.org
                </a>
              </div>
            </motion.div>

            <motion.div
              className="block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeIn" }}
            >
              <span>Verifcation Tools</span>
              <h3>Check Images & Sources</h3>
              <p>
                Use simple tools to confirm where images, videos, and articles
                really come from.
              </p>
              <div className="stuff">
                <a href="https://images.google.com/" target="_blank">
                  Google Images
                </a>
                <a href="https://tineye.com/" target="_blank">
                  TinEye
                </a>
                <a href="https://www.invid-project.eu/" target="_blank">
                  InVid
                </a>
              </div>
            </motion.div>

            <motion.div
              className="block learn"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeIn" }}
            >
              <span>Media Literacy</span>
              <h3>Learn How Misinformation Works</h3>
              <p>
                Understand common tactics used to mislead and how to spot them
                quickly.
              </p>
              <div className="stuff">
                <a href="https://newslit.org/" target="_blank">
                  News Literacy Project
                </a>
                <a
                  href="https://adfontesmedia.com/interactive-media-bias-chart/"
                  target="_blank"
                >
                  Media Bias Chart
                </a>
                <a href="https://www.commonsensemedia.org/" target="_blank">
                  Common Sense Media
                </a>
              </div>
            </motion.div>

            <motion.div
              className="block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeIn" }}
            >
              <span>Campaign Materials</span>
              <h3>Share the Message</h3>
              <p>
                Download and share resources that promote media literacy and
                responsible sharing.
              </p>

              <div className="stuff">
                <a href="/about">Watch Campaign Video</a>
                <a href={Poster} download="truthmatters.jpg">
                  Download Poster
                </a>
              </div>
            </motion.div>
          </div>
          <video autoPlay playsInline loop muted className="video mobile">
            <source src={Vid} />
          </video>
        </main>
      </div>
    </>
  );
}
