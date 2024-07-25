import React, { useEffect, useRef } from "react";
import "./HeroSection.css";
import { Button } from "./button";
import "../App.css";
import Typed from "typed.js";
import { Link } from "react-router-dom";
import "./Cards.css";
import CardItem from "./CardItem";
// import { gsap } from 'gsap';
// import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';
// import ScrollMagic from 'scrollmagic';



import colorstack from "./images/cstack.jpeg";
import nslf from "./images/nslf.png";
import nsbe from "./images/nsbe.jpeg";
import yaf from "./images/yaf.png";
import codepath from "./images/cpath.jpeg";
import qiskit from "./images/qiskit.png"; // Update with the correct path

function HeroSection() {
  document.addEventListener("scroll", function () {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;

    const scrollFraction = scrollTop / (documentHeight - windowHeight);
    const scrollPercentage = Math.min(100, scrollFraction * 100);

    document.querySelector(
      ".scroll-indicator"
    ).style.height = `${scrollPercentage}%`;
  });

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Hello, it's me👋, Christian 🇬🇭.",
        "A Passionate Developer 💻",
        "A Design Enthusiast 🎨",
        "A Problem Solver 🧩",
        "Currently Pushing Boundaries in Engineering 🏋🏾‍♂️",
        "...through Exploration 🚀.",
        "Innovation 💡.",
        "and Invention ✍️.",
        "Welcome to My Corner of the Internet! 🛜",
        "Connect and Let's Change the World Together 🤝.",
      ],

      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 1500,
      startDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: "",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="hero-container ">
        {/* <video src="/videos/video-10.mp4" autoPlay muted /> */}

        <h2>akwaaba</h2>
        <p>temet nosce...</p>

        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            target="/projects"
          >
            PROJECTS
          </Button>

          <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          target="/resume"
        >
          RESUMÉ <i className="far fa" />
        </Button> 

          {/* <Link to="/resume" className="btn-mobile">
            <button
              className="btns btn--primary btn--resume"
              style={{ cursor: "pointer" }}
              hover="transparent"
            >
              RESUMÉ <i className="far fa" />
            </button>
          </Link> */}

        </div>

        <div className="typed-text ">
          <h3
            style={{
              fontFamily: "'Times New Roman', Times, serif",
              // fontSize: "30px",
            }}
            ref={el}
          >
            .
          </h3>
        </div>

        {/* Work Experience Section */}
        <div className="work-experience-container">
          <h2
            style={{
              fontFamily: "'Pirata One', sans-serif",
              fontSize: "40px",
            }}
          >
            Communities
          </h2>
          <div className="work-experience-cards">
            {/* Card 1 */}
            <div className="work-experience-card">
              <img src={yaf} alt="YAF" className="work-experience-logo" />
              <div className="work-experience-info">
                <h4>Young Achievers' Foundation</h4>
                <p>Ghanaian Youth Development</p>
                <p>Jun 2019 - Present</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="work-experience-card">
              <img src={nsbe} alt="NSBE" className="work-experience-logo" />
              <div className="work-experience-info">
                <h4>National Society of Black Engineers</h4>
                <p>Culturally Responsible Black Engineers</p>
                <p>Jun 2022 - Present</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="work-experience-card">
              <img
                src={colorstack}
                alt="Colorstack"
                className="work-experience-logo"
              />
              <div className="work-experience-info">
                <h4>ColorStack</h4>
                <p>Black and Latinx Technologists</p>
                <p>Jun 2022 - Present</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="work-experience-card">
              <img
                src={codepath}
                alt="Codepath"
                className="work-experience-logo"
              />
              <div className="work-experience-info">
                <h4>CodePath</h4>
                <p>Tech Excellence for All</p>
                <p>Jun 2022 - Present</p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="work-experience-card">
              <img src={qiskit} alt="Qiskit" className="work-experience-logo" />
              <div className="work-experience-info">
                <h4>IBM Qiskit Quantum School</h4>
                <p>Theory To Implementation</p>
                <p>Jun 2023 - Present</p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="work-experience-card">
              <img src={nslf} alt="NSLF" className="work-experience-logo" />
              <div className="work-experience-info">
                <h4>National Student Leadership Forum</h4>
                <p>Leadership Forum on Faith & Values</p>
                <p>Sep 2023 - Present</p>
              </div>
            </div>
          </div>
        </div>

        <div className="cards__container">
          <h2
            style={{
              fontFamily: "'Pirata One', sans-serif",
              fontSize: "40px",
            }}
          >
            Interests
          </h2>
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src="images/img-10.avif"
                text="dartmouth electrical engineering and computer science student"
                path="/about"
              />
              <CardItem
                src="images/img-12.avif"
                text="software engineer experienced in software design and implementation, web development"
                path="/projects"
              />
            </ul>
            <ul className="cards__items">
              <CardItem
                src="images/img-11.avif"
                text="photographer passionate about problem-solving and innovation"
                path="/projects"
              />
              <CardItem
                src="images/img-13.avif"
                text="fan of chopin, stromae, boticelli, ronaldo, and naruto"
                path="/adventures"
              />
            </ul>
          </div>
        </div>

        <section className="footer-subscription">
          <p className="footer-subscription-heading">
            Reach out; let's connect!
          </p>

          <div className="input-areas">
            <form>
              <Button
                buttonStyle="btn--outline"
                target="/contactme"
                style={{ border: "1px solid black", color: "black" }}
              >
                Connect
              </Button>
            </form>
          </div>
        </section>

        <div class="footer-links">
          <div className="footer-link-wrapper">
            <div class="footer-link-items">
              <h2>
                <Link to="/about">About</Link>
              </h2>
            </div>
            <div class="footer-link-items">
              <h2>
                <Link to="/contactme">Contact</Link>
              </h2>
            </div>
          </div>
          <div className="footer-link-wrapper">
            <div class="footer-link-items">
              <h2>
                <Link to="/adventures">Adventures</Link>
              </h2>
            </div>
          </div>
        </div>
        <section class="social-media">
          <div class="social-media-wrap">
            <div class="footer-logo">
              <Link
                to="/"
                className="social-logo"
                style={{
                  fontSize: "25px",
                }}
              >
                CHRISTIAN_NYAMEKYE
                <i className="fa fa-bat" />
              </Link>
            </div>
            <small class="website-rights">christian © 2023</small>
            <div class="social-icons">
              <a
                className="social-icon-link facebook"
                href="//www.facebook.com/christian.nyamekye.547"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                class="social-icon-link instagram"
                href="https://www.instagram.com/christiannyamekye.kjr/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i class="fab fa-instagram"></i>
              </a>

              <a
                class="social-icon-link github"
                href="https://github.com/ChristianNyamekye"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github"
              >
                <i class="fab fa-github" />
              </a>

              <a
                class="social-icon-link twitter"
                href="https://twitter.com/printlnXristian"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <i class="fab fa-twitter"></i>
              </a>
              <a
                className="social-icon-link linkedIn"
                href="//linkedin.com/in/christian-k-nyamekye"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin" />
              </a>
            </div>
          </div>
        </section>
      </div>
      
    </>
  );
}

export default HeroSection;
