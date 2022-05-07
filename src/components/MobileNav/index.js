import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faEnvelope,
  faFileCode,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const MobileNav = () => (
  <header className="mob-nav-bar">
    <nav>
      <NavLink
        exact="true"
        activeclassname="active"
        className="home-link"
        to="/"
      >
        <FontAwesomeIcon icon={faHome} color="#f4eae6e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="about"
      >
        <FontAwesomeIcon icon={faUser} color="#f4eae6" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="portfolio-link"
        to="portfolio"
      >
        <FontAwesomeIcon icon={faFileCode} color="#f4eae6" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#f4eae6" />
      </NavLink>
    </nav>
  </header>
);

export default MobileNav;
