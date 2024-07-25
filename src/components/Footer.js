import React from "react";
import "./Footer.css";
import { Button } from "./button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container animated-gradient">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">Reach out; let's connect!</p>

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
            <Link to="/" className="social-logo">
              NYAMEKYE
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
  );
}

export default Footer;
