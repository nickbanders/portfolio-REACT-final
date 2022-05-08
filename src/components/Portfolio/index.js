import "./index.scss";
import portRio from "../../assets/images/port-rio.jpg";
import wudgieWeather from "../../assets/images/wudgieweather.mp4";
import codeBlueVid from "../../assets/images/codeblue.mp4";
import portfolioImg from "../../assets/images/port-portfolio.jpg";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Portfolio = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <span>
      <div className="arrows"></div>
      <span class="card-container body">
        <ul id="cards">
          <li class="card" id="card_1">
            <div class="card__content">
              <div>
                <h3>Rio Colorado</h3>
                <p>
                  This project featured a full-scale rebuild of the Rio Colorado
                  Golf Course's website, starting completely from a blank screen
                  on both the design and code. Nothing was sacred as we analyzed
                  which pages and features should be consolidated or removed
                  entirely. Taking the site from the 1990's into the modern era,
                  it has been future-proofed with technologies such as
                  responsive design, React, MongoDB, and GraphQL. It has
                  features such as a full course page with hole selector tool,
                  user login/logout authentication containing Admin-level
                  privileges such as site price customization, and queries and
                  mutations for full CRUD capabilities.
                  <br />
                  <br />
                  As the frontend lead for this project my job was taking the
                  design and implementing it into React.js. As well as creating
                  all necessary components needed for a seamless user
                  experience. A major focus was the responsive nature of the
                  website so it performed and looked great no matter what screen
                  you're viewing it on. For instance, when you're viewing from
                  mobile the navigation collapses into a hamburger menu that
                  pops out when clicked.
                </p>
                <p>
                  <a
                    href="https://www.riocoloradogolf.com/"
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    VIEW SITE
                  </a>
                  <a
                    href="https://github.com/nickbanders/Rio-Colorado-Golf"
                    className="repo-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    VIEW REPO
                  </a>
                </p>
              </div>
              <span>
                <img src={portRio} alt="Image description" />
              </span>
            </div>
          </li>
          <li class="card" id="card_2">
            <div class="card__content">
              <div>
                <h3>Wudgie Weather</h3>
                <p>
                  An app that generates a one stop shop for both weather and
                  surf forecast. The app will make use of StormGlass' free API
                  and the Weather API. Users will first enter a zipcode, a
                  forecast for that day's weather and maritime stats will
                  populate.
                  <br />
                  <br />
                  My role for the project was the designing and putting the
                  frontend together, and some backend connections to display the
                  correct API data.
                </p>
                <p>
                  <a
                    href="https://casscalex.github.io/Wudgie-Weather/"
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    VIEW SITE
                  </a>
                  <a
                    href="https://github.com/casscalex/Wudgie-Weather"
                    className="repo-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    VIEW REPO
                  </a>
                </p>
              </div>
              <span>
                <video
                  src={wudgieWeather}
                  autoplay="true"
                  loop="true"
                  muted="true"
                  playsinline="true"
                  alt="Image description"
                />
              </span>
            </div>
          </li>
          <li class="card" id="card_3">
            <div class="card__content">
              <div>
                <h3>nickanders.io</h3>
                <p>
                  One issue I had while doing the Full-Stack Bootcamp over the
                  course of 6-months was the lack of time for personal projects.
                  I wanted to dive further into React.js since it was something
                  that I enjoyed working with during the Rio Colorado project,
                  and decided to focus on that for a website of my own. <br />
                  <br />I utlized libraries such as framer-motion to create an
                  animation for the SVG logo I created, As well as Animate.css
                  on certain elements to make some letters feel alive. I also
                  used emailjs for the contact form.
                </p>
                <p>
                  <a
                    href="https://www.nickanders.io/"
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    VIEW SITE
                  </a>
                  <a
                    href="https://github.com/nickbanders/portfolio-REACT-final"
                    className="repo-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    VIEW REPO
                  </a>
                </p>
              </div>
              <span>
                <img src={portfolioImg} alt="Image description" />
              </span>
            </div>
          </li>
          <li class="card" id="card_4">
            <div class="card__content">
              <div>
                <h3>code[blue]</h3>
                <p>
                  code[blue] was a project with the idea of creating a forum in
                  the same vein as Stack Overflow. Users are able to login, view
                  their dashboard of posts they've made, and also view and
                  comment on others.
                  <br />
                  <br />
                  My role for this project was frontend layout and a lot of time
                  spent on the backend getting things to work correctly.
                </p>
                <p>
                  <a
                    href="https://puckwudgie-code-blue.herokuapp.com/"
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    VIEW SITE
                  </a>
                  <a
                    href="https://github.com/nickbanders/Puckwudgie-Team-B"
                    className="repo-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    VIEW REPO
                  </a>
                </p>
              </div>
              <span>
                <video
                  src={codeBlueVid}
                  autoplay="true"
                  loop="true"
                  muted="true"
                  playsinline="true"
                  alt="Image description"
                />
              </span>
            </div>
          </li>
          <li className="card" id="card_5">
            <div className="card__content2">
              <h3>Backend Development</h3>
              <h4>
                Here are some links that will take you to videos showing
                examples of my work on the server side
              </h4>
              <div className="backend_container">
                <div className="backend_column">
                  <h4>Team Profile Generator</h4>
                  <p className="backend_paragraph">
                    The challenge was to build a Node.js command-line
                    application that takes in information about employees on a
                    software engineering team and generates an HTML webpage that
                    displays summaries for each person. <br />
                    <br />
                    Because testing is key to making code maintainable, I also
                    write unit tests for each part of my code and ensure that it
                    passes all of them.
                  </p>
                  <p>
                    <a
                      href="https://vimeo.com/manage/videos/669470374/9e8060f270"
                      className="btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      VIEW VIDEO
                    </a>
                    <a
                      href=" https://github.com/nickbanders/Team-Profile-Generator"
                      className="repo-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      VIEW REPO
                    </a>
                  </p>
                </div>

                <div className="backend_column backend_column_border">
                  <h4>e-commerce</h4>
                  <p className="backend_paragraph">
                    E-commerce platforms like Shopify provide a suite of
                    services to businesses of all sizes. Due to the prevalence
                    of these platforms, developers should understand the
                    fundamental architecture of e-commerce sites.
                    <br />
                    <br />I took a working Express.js API and configured it to
                    use Sequelize to interact with a MySQL database.
                  </p>

                  <a
                    href="https://vimeo.com/677007271/010e028928"
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    VIEW VIDEO
                  </a>
                  <a
                    href="https://github.com/nickbanders/ecommerce-back-end"
                    className="repo-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    VIEW REPO
                  </a>
                </div>

                <div className="backend_column">
                  <h4>Social Network API</h4>
                  <p className="backend_paragraph">
                    MongoDB is a popular choice for many social networks due to
                    its speed with large amounts of data and flexibility with
                    unstructured data. <br />
                    <br />I was tasked to build an API for a theoretical social
                    network web application where users can share their
                    thoughts, react to friends’ thoughts, and create a friend
                    list. I used Express.js for routing, a MongoDB database, and
                    the Mongoose ODM.
                  </p>
                  <p>
                    <a
                      href="https://vimeo.com/690362510/bbb8a052f3"
                      className="btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      VIEW VIDEO
                    </a>
                    <a
                      href="https://github.com/nickbanders/social-network-API"
                      className="repo-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      VIEW REPO
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </span>
    </span>
  );
};

export default Portfolio;
