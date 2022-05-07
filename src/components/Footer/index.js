import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer class="mobFooter">
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/nickanders/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#f4eae6" />
          </a>
        </li>

        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/nickbanders"
          >
            <FontAwesomeIcon icon={faGithub} color="#f4eae6" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
