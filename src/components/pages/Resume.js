import React from "react";
import "./Resume.css";
// import { Button } from "../button";
import { Link } from "react-router-dom";



import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Resume() {
  return (
    <section id="resume">
      <div className="resume-wrapper">
        <div className="resume-container">
          <header className="resume-header">
            <h1>PORTFOLIO</h1>
            <p>
              <FaLinkedin />{" "}
              <a
                href="https://linkedin.com/in/christian-k-nyamekye"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </p>
            <p>
              <FaGithub />{" "}
              <a
                href="https://github.com/ChristianNyamekye"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </p>
            <p
              style={{
                fontFamily: "'Times New Roman, Times, serif'",
              }}
            >
              <FaEnvelope />{" "}
              <a href="mailto:christian.k.nyamekye.26@dartmouth.edu">Email</a> |
              christiankingnyamekye@gmail.com
            </p>
            <p
              style={{
                fontFamily: "'Times New Roman, Times, serif'",
              }}
            >
              <a
                href="https://christiannyamekye.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                christiannyamekye.com
              </a>{" "}
              | 3866 Hinman, Hanover, NH 03755
            </p>
          </header>

          <section className="education-section">
            <h2>Professional Experience</h2>
            <h3>
              Digital Justice Lab, Dartmouth College ▪ Research Assistant ▪ 2023
              - Present
            </h3>
            <br></br>
            <p
              style={{
                fontFamily: "'Times New Roman, Times, serif'",
              }}
            >
              ✷ Constructed a programmable knitting machine by repurposing a
              vintage electronic machine using AYAB resources, enabling
              innovative experimentation and exploration in the field of knit
              textiles
              <br></br>
              <br></br>✷ Conducted comprehensive training sessions for 13+
              students, equipping them with Arduino programming and Adobe
              Photoshop skills, and providing specialized tutorials on designing
              knit data visualizations using the system.
              <br></br>
              <br></br>✷ Created detailed and user-friendly documentation,
              serving as a valuable resource for artists, engineers, and
              innovators interested in leveraging the potential of knit textiles
              in relation to their environmental impact and cultural history.
            </p>
            <br></br>
            <br></br>
            <br></br>

            <h3>
              IBM - Qiskit Global Summer School ▪ Lab Student ▪ 2023 - Present
            </h3>
            <br></br>
            <p
              style={{
                fontFamily: "'Times New Roman, Times, serif'",
              }}
            >
              ✷ Built and implemented 10+ quantum circuits, showcased
              proficiency in complex algorithm design and leveraged Qiskit tools
              for quantum programming.
              <br></br>
              <br></br>✷ Gained hands-on experience by executing and analyzing
              10+ quantum programs on both simulator backends and real IBM
              quantum devices.
              <br></br>
              <br></br>✷ Networked with a diverse global community of more than
              4,000+ developers, researchers, and students to solve quantum
              computing problems. Spearheaded a team of 4 (Quantum Exhaustion,
              #29) for the optional Qiskit final project and showcase:
              simulating ground state energies of molecules
            </p>
            <br></br>
            <br></br>
            <br></br>

            <h3>
              Cable Makerspace, Dartmouth College ▪ Teaching Assistant ▪ 2023 -
              Present
            </h3>
            <br></br>
            <p
              style={{
                fontFamily: "'Times New Roman, Times, serif'",
              }}
            >
              ✷ Train 15+ students and new TAs per term on the proper and safe
              use, inspection, and maintenance of CNC machines like laser
              cutters and glow-forges
              <br></br>
              <br></br>✷ Monitor and enforce adherence to rules & safety
              procedures within the space, ensuring a secure environment and
              reducing accidents by 10%+ per term.
              <br></br>
              <br></br>✷ Proactively engage in fundraising activities,
              successfully securing $1000 to support scholar-driven community
              engineering projects and enhance the overall experience within the
              Makerspace.
            </p>
            <br></br>
            <br></br>
            <br></br>
            <h3>
              Classroom Technology and Support, Dartmouth College, Technician
            </h3>
            <br></br>
            <p
              style={{
                fontFamily: "'Times New Roman, Times, serif'",
              }}
            >
              ✷ Installed, configured, maintained, and troubleshot 10+
              proprietary software in 35+ Dartmouth workspaces, ensuring
              seamless learning experiences
              <br></br>
              <br></br>✷ Conducted comprehensive testing and verification of
              300+ classroom and workspace hardware to identify issues and
              validate successful repair work.
              <br></br>
              <br></br>✷ Collaborated with a team to develop and implement safer
              and more convenient procedures for handling and storing over 100
              valuable resources at the workstation, effectively prolonging
              their lifespan
            </p>
            <br></br>
            <br></br>
            <br></br>
            {/* ... Other education details */}
          </section>

          <section className="education-section">
            <h2>Education</h2>
            <p
              style={{
                fontFamily: "'Roboto', sans-serif",
                color: "#f4f4f6",
                fontSize: "20px",
              }}
            >
              Bachelor of Arts ▪ Dartmouth College ▪ 2026
            </p>
            <p style={{ fontFamily: "'Times New Roman, Times, serif'" }}>
              ✷&nbsp; engineering and computer science
            </p>
            <br></br>
            <br></br>
            <br></br>
            {/* ... Other education details */}
          </section>

          <section className="education-section">
            <div className="container-8 w-container">
              <div className="div-block-18">
                <div className="rich-text-block-3 w-richtext">
                  <h2>Technical Expertise</h2>
                  <p>&zwj;</p>
                  <p style={{ fontFamily: "'Times New Roman, Times, serif'" }}>
                    ✷&nbsp; GitHub
                  </p>
                  <p style={{ fontFamily: "'Times New Roman, Times, serif'" }}>
                    ✷&nbsp; Figma
                  </p>
                  <p style={{ fontFamily: "'Times New Roman, Times, serif'" }}>
                    ✷&nbsp; Adobe Photoshop
                  </p>
                  <p style={{ fontFamily: "'Times New Roman, Times, serif'" }}>
                    ✷&nbsp; Arduino
                  </p>
                  <p style={{ fontFamily: "'Times New Roman, Times, serif'" }}>
                    ✷&nbsp; Jupyter Notebook
                  </p>
                  <p style={{ fontFamily: "'Times New Roman, Times, serif'" }}>
                    ✷&nbsp; SolidWorks
                  </p>
                </div>
              </div>
              <div className="div-block-18">
                <div className="rich-text-block-6 w-richtext">
                  <h2>Core Expertise</h2>
                  <p>&zwj;</p>
                  <p style={{ fontFamily: "'Times New Roman, Times, serif'" }}>
                    {" "}
                    ✷&nbsp; Illustration
                  </p>
                  <p style={{ fontFamily: "'Times New Roman, Times, serif'" }}>
                    ✷&nbsp; 3D modeling
                  </p>
                  <p style={{ fontFamily: "'Times New Roman, Times, serif'" }}>
                    ✷&nbsp; Prototyping
                  </p>
                  <p style={{ fontFamily: "'Times New Roman, Times, serif'" }}>
                    ✷&nbsp; Team Leadership
                  </p>
                  <p style={{ fontFamily: "'Times New Roman, Times, serif'" }}>
                    ✷&nbsp; Design
                  </p>
                  <p style={{ fontFamily: "'Times New Roman, Times, serif'" }}>
                    ✷&nbsp; CNC Machining
                  </p>
                </div>
              </div>
            </div>
          </section>
          <br></br>
          <br></br>
          <br></br>

          <div className="div-block-17">
            <a
              style={{
                fontFamily: "'Pirata One', sans-serif",
                fontSize: "50px",
                color: "#0db8de",
              }}
              href="https://drive.google.com/uc?export=download&id=1wRxCf8l-Jhu01v-QVlE3pu_GGNPdHila"
              target="_blank"
              rel="noopener noreferrer"
              className="link dark"
            >
              Download PDF
            </a>

            <a
              style={{
                fontFamily: "'Pirata One', sans-serif",
                fontSize: "50px",
                color: "#0db8de",
              }}
              href="https://docs.google.com/document/d/1YiUyqN8e2PP3I0Ull5adHzXLGnzxquqBk7svaSkk7aA/export?format=docx"
              target="_blank"
              rel="noopener noreferrer"
              className="link dark"
            >
              Download document
            </a>
          </div>

          <section className="Link dark">
            <Link to="/contactme" className="btn-mobile">
              <button
                className=" btn--get-in-touch"
                // style={{
                //   fontFamily: "'Pirata One', sans-serif",
                //   fontSize: "50px",
                //   color: "var(--accent-color)",
                //   backgroundColor: "var(--button-background-color)",
                // }}
              >
                Get In Touch <i className="far fa" />
              </button>
            </Link>

            {/* <Button
            // buttonStyle="btn--outline"
            target="/contactme"
            style={{
              fontFamily: "'Pirata One', sans-serif",
              fontSize: "50px",
              color: "var(--accent-color)",
            }}
          >
            Get In Touch
          </Button> */}

            <br></br>
            <br></br>
            {/* ... Other education details */}
          </section>

          {/* ... Repeat for other sections such as Work Experience, Skills and Projects, Leadership Experience */}

          <footer className="resume-footer">
            <p
              style={{
                fontFamily: "'Times New Roman, Times, serif'",
                color: "#0ef",
              }}
            >
              Currently seeking SWE summer internships, Engineering research and
              projects, as well as clients in web development.
            </p>
          </footer>
        </div>
      </div>
    </section>
  );
}
