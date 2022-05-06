import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AnimatedLetters from "../AnimatedLetters";
import { motion } from "framer-motion";
import "./index.scss";
import logo2 from "../../assets/images/logo2.png";

const icon = {
  hidden: {
    opacity: 1,
    pathLength: 0,
    fill: "rgba(244, 234, 230, 0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(244, 234, 230, 0)",
  },
};

const icon2 = {
  hidden: {
    opacity: 1,
    pathLength: 0,
    fill: "rgba(229, 127, 132, 0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(229, 127, 132, 0)",
  },
};

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = ["N", "i", "c", "k", " ", "A", "n", "d", "e", "r", "s,"];
  const jobArray = [
    "W",
    "e",
    "b",
    " ",
    "D",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
    ".",
  ];

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>{" "}
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={27}
          />
        </h1>
        {/* <h2>Full Stack Web Developer</h2> */}
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>

      <div className="logo-container">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="800 440 250 250"
          preserveAspectRatio="xMidYMid meet"
          className="item"
        >
          <motion.path
            d="M827.98,378.84c20.64,0,41.28,0,61.92,0c19.12,28.48,38.24,56.96,57.36,85.44
            c11.04,31.36,22.08,62.72,33.12,94.08c-14.96,0-29.92,0-44.88,0c-4.4-6.48-8.8-12.96-13.2-19.44
            c-6.88-10.64-13.76-21.28-20.64-31.92c-3.6-5.73-8.16-11.45-10.8-18c-0.08,0-0.16,0-0.24,0c0.32,17.2,0.64,34.4,0.96,51.6
            c0,53.43,0,106.89,0,160.32c-21.2,0-42.4,0-63.6,0C827.98,593.57,827.98,486.19,827.98,378.84z"
            variants={icon}
            initial="hidden"
            animate="visible"
            className="item"
            transition={{
              default: { duration: 4, ease: "easeInOut" },
              fill: { duration: 4, ease: [1, 0, 0, 0] },
            }}
          />
          <motion.path
            d="M902.38,629.16c0-32.96,0-65.92,0-98.88c0,0.16,0,0.32,0,0.48c8.4,12.4,16.8,24.8,25.2,37.2
            c22.48,0,44.96,0,67.44,0c-7.36-20.8-14.72-41.6-22.08-62.4c-5.2-16-10.4-32-15.6-48c-12.56-18.64-25.12-37.28-37.68-55.92
            c2.88-7.6,5.76-15.2,8.64-22.8c20.96,0,41.92,0,62.88,0c40.72,107.35,81.44,214.73,122.16,322.08c-23.68-0.08-47.36-0.16-71.04-0.24
            c-8.32-23.84-16.64-47.68-24.96-71.52C979.02,629.16,940.7,629.16,902.38,629.16z"
            variants={icon2}
            className="item2"
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 5, ease: "easeInOut" },
              fill: { duration: 5, ease: [1, 0, 0, 1] },
            }}
          />
          <motion.path
            d="M1025.5,378.84c21.2,0,42.4,0,63.6,0c-0.08,74.55-0.16,149.13-0.24,223.68c0-0.16,0-0.32,0-0.48
            c-9.44-24.88-18.88-49.76-28.32-74.64c-11.68-30.48-23.36-60.96-35.04-91.44C1025.5,416.92,1025.5,397.88,1025.5,378.84z"
            variants={icon}
            initial="hidden"
            animate="visible"
            className="item"
            transition={{
              default: { duration: 4, ease: "easeInOut" },
              fill: { duration: 6, ease: [1, 0, 0, 1] },
            }}
          />
          <motion.path
            d="M990.46,639.96c6,0,12,0,18,0c6.4,18.4,12.8,36.8,19.2,55.2c-0.08,0-0.16,0-0.24,0c0-0.16,0-0.32,0-0.48
            C1015.1,676.44,1002.78,658.2,990.46,639.96z"
            variants={icon}
            initial="hidden"
            animate="visible"
            className="item"
            transition={{
              default: { duration: 5, ease: "easeInOut" },
              fill: { duration: 5, ease: [1, 0, 0, 1] },
            }}
          />
        </motion.svg>
      </div>

      {/* <div className="logo-container">
        <img className="solid-logo" src={logo2} alt="JavaScript,  Developer" />
      </div> */}
    </div>
  );
};

export default Home;
