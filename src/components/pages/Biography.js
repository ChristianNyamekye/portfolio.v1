import React from "react";
import "./Biography.css";
import profileImage from "../images/profile-image.jpg";


function Biography({ containerRef }) {
  return (
    <div className="biography-wrapper">
      <div className="biography-container" ref={containerRef}>
        {/* <video src="/videos/video-10.mp4" autoPlay muted /> */}
        <div className="profile-container">
          {/* <img src={profileImage} alt="Profile" className="profile-image" /> */}
          {/* <div>
          <p
            style={{ textAlign: "right", marginLeft: "500px", color: "black" }}
          >
            ↓connect↓&nbsp;
          </p>
        </div> */}
        </div>
        <h1 className="about-heading">WHY HELLO THERE!👋:</h1>
        <div className="w-layout-grid bio-statement-and-portrait">
          <div class="about-text">
            I’m an engineer who moonlights as a coder. My personal interests sit
            at the intersection of physics, tech, and design - I’ve consistently
            looked for projects and experiences that help me bridge this space.
            I grew up in Ghana and made my way out to New Hampshire for college
            (a very interesting transition) - I will graduate from Dartmouth in
            2026, as an Engineering and Computer Science major.
            <br></br>
            <br></br>
            <b style={{ color: "#64ffda" }}>INTERESTS:</b>
            <br></br>
            <br></br>
            In my spare time, I enjoy building software platforms, taking
            photographs of landscapes, and practicing the piano. Additionally, I
            like boba tea, editing photographs, exploring sneaker shops, and
            playing soccer. You can find me on LinkedIn. Or feel free to ..
            <a
              href="mailto:christiankingnyamekye@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              drop me a note!
            </a>
          </div>
          <div className="portrait-container">
            <img src={profileImage} alt="Profile" className="profile-image" />
          </div>
        </div>

        <h3
          style={{
            color: "#64ffda",
            fontFamily: "'Courier New', Courier, monospace",
          }}
        >
          EDUCATION
        </h3>
        {/* Education Section */}
        <div className="education-container">
          <img
            src="/images/dlogo.png"
            alt="Dartmouth College"
            className="education-logo"
          />
          <div className="education-details">
            <div className="education-title">Dartmouth College</div>
            <div className="education-degree">Computer Engineering</div>
          </div>
        </div>

        {/* Education Section */}
        <div className="education-container">
          <img
            src="/images/plogo.png"
            alt="Opoku Ware School"
            className="education-logo"
          />
          <div className="education-details">
            <div className="education-title">Opoku Ware School</div>
            <div className="education-degree">General Science</div>
          </div>
        </div>

        {/* Education Section */}
        <div className="education-container">
          <img
            src="/images/slogo.png"
            alt="Opoku Ware School"
            className="education-logo"
          />
          <div className="education-details">
            <div className="education-title">St Lwanga School</div>
            <div className="education-degree">Basic Education</div>
          </div>
        </div>

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
  );
}

export default Biography;
