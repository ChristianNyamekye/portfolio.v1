import React from "react";
import "../../App.css";
import { BsPatchCheckFill } from "react-icons/bs";

const skills1 = [
  { name: "React JS", level: "Experienced" },
  { name: "JavaScript", level: "Experienced" },
  { name: "HTML", level: "Experienced" },
  { name: "CSS", level: "Experienced" },
  // Add more skills as needed
];
const skills2 = [
  { name: "C / C++", level: "Experienced" },
  { name: "Bash", level: "Experienced" },
  { name: "Git", level: "Experienced" },
  { name: "Python", level: "Experienced" },

  // Add more skills as needed
];

const skills3 = [
  { name: "Python", level: "Experienced" },
  { name: "PyQt5", level: "Experienced" },
  { name: "HTML", level: "Experienced" },
  { name: "CSS", level: "Experienced" },
  { name: "JavaScript", level: "Experienced" },
  // Add more skills as needed
];

const skills4 = [
  { name: "Python", level: "Experienced" },
  { name: "Qiskit", level: "Experienced" },
  { name: "Linear Algebra", level: "Experienced" },

  // Add more skills as needed
];

const skills5 = [
  { name: "Java", level: "Experienced" },
  { name: "Python", level: "Experienced" },
  { name: "HMM", level: "Experienced" },
  { name: "IntelliJ", level: "Experienced" },

  // Add more skills as needed
];

const skills = [
  { name: "Python", level: "Experienced" },
  { name: "Linear Algebra", level: "Experienced" },
  { name: "Jupyter", level: "Experienced" },
  { name: "JavaScript", level: "Experienced" },
  { name: "HTML5", level: "Experienced" },
  { name: "Flask", level: "Experienced" },
  { name: "Pytorch", level: "Experienced" }

  // Add more skills as needed
];

export default function Projects() {
  return (
    <section id="projects">
      {/* <h5>Check Out</h5>
      <h2>My Projects</h2> */}
      <div className="page-wrapper" style={{ height: "250vh" }}>
        <div className="skills-container">
          <h2>
            {" "}
            SELECTED WORKS{"   "}
            <a
              class="social-icon-link github"
              href="https://github.com/ChristianNyamekye"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
            >
              <i class="fab fa-github" />
            </a>
          </h2>
          <div className="project">
            <h3 className="project__title">AI-Driven Chatbot - Mavis</h3>
            <p className="project__description">
              An AI-driven chatbox designed to enhance user engagement and
              provide efficient query resolution on a personal portfolio
              website. Chatbox leverages Natural Language Processing (NLP) and
              machine learning techniques to interpret and respond to user
              inquiries, creating an interactive and user-friendly experience.
            </p>
            <div className="project__skills">
              {skills.map((skill, index) => (
                <div className="skill" key={index}>
                  <BsPatchCheckFill className="skill__icon" />
                  <div>
                    <h4 className="skill__name">{skill.name}</h4>
                    <small className="skill__level">{skill.level}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="project">
            <h3 className="project__title">Gaze Aware Reading Aid (GARB)</h3>
            <p className="project__description">
              GARB: Gaze-Aware Reading-aid for the Browser allows users to
              track their online reading through an eye-tracking device.
              GARB is an attention improver as well as a research
              tool. GARB helps study how people read online as well as how we
              can improve our comprehension and reading attention particularly in 
              dyslexic users.
            </p>
            <div className="project__skills">
              {skills1.map((skill, index) => (
                <div className="skill" key={index}>
                  <BsPatchCheckFill className="skill__icon" />
                  <div>
                    <h4 className="skill__name">{skill.name}</h4>
                    <small className="skill__level">{skill.level}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="project">
            <h3 className="project__title">Tiny Search Engine</h3>
            <p className="project__description">
              A search engine with 3 subsystems: Crawler, which crawls the web
              from a given seed to a given maxDepth. Indexer, which reads files
              and, builds an index that maps from words to pages (URLs).
              Querier, which reads the index and outputs a ranked list of pages
              (URLs) in which the given combination of words appear.
            </p>
            <div className="project__skills">
              {skills2.map((skill, index) => (
                <div className="skill" key={index}>
                  <BsPatchCheckFill className="skill__icon" />
                  <div>
                    <h4 className="skill__name">{skill.name}</h4>
                    <small className="skill__level">{skill.level}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="project">
            <h3 className="project__title">Lossless Data Compression</h3>
            <p className="project__description">
              File Compression program that utilizes Huffman's Encoding to
              generate a set of prefix-free codes whose lengths are inversely
              correlated with the frequency of the encoded character. Program
              uses a binary tree to generate the codes, and a priority queue for
              the construction of the binary tree
            </p>
            <div className="project__skills">
              {skills5.map((skill, index) => (
                <div className="skill" key={index}>
                  <BsPatchCheckFill className="skill__icon" />
                  <div>
                    <h4 className="skill__name">{skill.name}</h4>
                    <small className="skill__level">{skill.level}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="project">
            <h3 className="project__title">Interactive Navigation System</h3>
            <p className="project__description">
              Graph-based navigation system that computes and visually
              represents the most efficient paths between various points
              (vertices) on the campus map. Presented an intuitive user
              interface to allow users to select start and end points on the
              campus map, and to display the calculated path.
            </p>
            <div className="project__skills">
              {skills3.map((skill, index) => (
                <div className="skill" key={index}>
                  <BsPatchCheckFill className="skill__icon" />
                  <div>
                    <h4 className="skill__name">{skill.name}</h4>
                    <small className="skill__level">{skill.level}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="project">
            <h3 className="project__title">Quantum Computing</h3>
            <p className="project__description">
              Implementation of quantum circuits utilizing IBM's Qiskit, an
              open-source quantum computing software development framework , by
              applying principles of superposition and entanglement to refine
              quantum gate operations and reduce qubit decoherence.
            </p>
            <div className="project__skills">
              {skills4.map((skill, index) => (
                <div className="skill" key={index}>
                  <BsPatchCheckFill className="skill__icon" />
                  <div>
                    <h4 className="skill__name">{skill.name}</h4>
                    <small className="skill__level">{skill.level}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
