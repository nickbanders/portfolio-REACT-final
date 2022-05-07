import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import { useState, useEffect } from "react";
import profile from "../../assets/images/profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import Footer from "../Footer";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
            idx={15}
          />
        </h1>
        <p>
          Growing up in the rural midwest surrounded by miles and miles of corn
          fields I was forced to entertain myself and go on adventures through
          art. From a young age I was always drawing, painting or putting
          together model cars. I would eventually get bored with those and morph
          these model cars into something unique.
          <br />
          <br />
        </p>
        <p>
          Eventually I found the digital medium as a way to express myself,
          becoming a graphic artist and working in the field as a graphic
          designer for several years. My creativity allowed me to go outside the
          box of templates usually seen at a job.
          <br />
          <br />
        </p>
        <p>
          After spending several years with the{" "}
          <a
            href="https://barnfestival.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            family business
          </a>{" "}
          a decision was made to sell the company. We had lost a father/husband
          to cancer and were ready to start a new chapter. Around that time I
          was introduced to the Full Stack Development bootcamp through the
          University of Texas at Austin. I felt the timing was great to pursue
          the possibilty of a new career that gave me an opportunity to create
          again.
          <br />
          <br />I completed the course in April of 2022, and I'm excited about
          where it will take me next.
        </p>
        <div className="iconRow">
          <div className="icon">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faNodeJs} color="#3C873A" />
          </div>
        </div>
      </div>
      <div>
        <img
          className="profile-photo"
          src={profile}
          alt="JavaScript,  Developer"
        />
      </div>
    </div>
  );
};

export default About;
