import React from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">Jemil</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text" style={{ fontWeight: "900" }}>
            Full Stack Developer
          </p>
          <p className="p-text" style={{ fontWeight: "900" }}>
            (Mern Stack)
          </p>
          <p className="p-text" style={{ fontWeight: "900" }}>
            Freelancer
          </p>
        </div>
        <a
          href="Jemilu-Ishaq--indeed.pdf"
          download="Jemilu-Ishaq--indeed.pdf"
          style={{
            marginTop: "25px",
            textDecoration: "none",
            color: "var(--gray-color)",
          }}
        >
          <div
            style={{
              fontWeight: "500",
              borderRadius: "10px",
              padding: "1rem 2rem",
              background: "var(--white-color)",
              width: "auto",
              boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
            }}
          >
            Get My CV
          </div>
        </a>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.profile} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: "easeInOut" }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.javascript, images.react, images.node].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(Header, "home");
