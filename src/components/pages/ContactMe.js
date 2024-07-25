import React from "react";
import "../../App.css";
import { BsEnvelopeFill } from 'react-icons/bs'; // Ensure you have react-icons installed



export default function ContactMe() {
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xwkdgzed";
  return (
    <section id="contactme">
      <div className="page-wrapper">
        <div className="contactme__container">
          <div className="contactme__options">
            <article className="contactme__option">
              <BsEnvelopeFill className="contactme__option-icon" />
              <h4
                style={{
                  fontFamily: "'Times New Roman, Times, serif'",
                  color: "#0ef",
                }}
              >
                Email
              </h4>
              <a
                href="mailto:christiankingnyamekye@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontFamily: "'Times New Roman, Times, serif'" }}
              >
                Send a message
              </a>
            </article>
            {/* Add other contact options if necessary */}
          </div>

          <form
            action={FORMSPREE_ENDPOINT}
            method="POST"
            className="contactme__form"
          >
            <br></br>
            <br></br>
            <h3
              style={{
                fontFamily: "'Times New Roman, Times, serif'",
                color: "#0ef",
              }}
            >
              Get in Touch; Let's work on a project together
            </h3>
            <h2
              style={{
                fontFamily: "'Times New Roman, Times, serif'",
                color: "#0ef",
              }}
            >
              Contact Me
            </h2>
            <input
              style={{ fontFamily: "'Times New Roman, Times, serif'" }}
              type="text"
              placeholder="Your Full Name"
              required
            />
            <input
              style={{ fontFamily: "'Times New Roman, Times, serif'" }}
              type="email"
              placeholder="Your Email"
              required
            />
            <textarea
              style={{ fontFamily: "'Times New Roman, Times, serif'" }}
              placeholder="Your Message"
              rows="7"
              required
            ></textarea>
            <input
              type="hidden"
              name="_subject"
              value="New submission from your website!"
            />
            <button
              type="submit"
              className="btn btn-primary"
              style={{ fontFamily: "'Times New Roman, Times, serif'" }}
            >
              Send Message
            </button>
          </form>

          <p style={{ fontFamily: "'Roboto'", color: "#0ef" }}>
            Currently seeking SWE summer internships, Engineering research and
            projects, as well as clients in web development.
          </p>
          <div className="biography-social-icons">
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
      </div>
    </section>
  );
}
