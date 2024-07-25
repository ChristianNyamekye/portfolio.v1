import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Chatbox from "./components/pages/Chatbox";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from "./components/pages/Home";
import Resume from "./components/pages/Resume";
import Projects from "./components/pages/Projects";
import ContactMe from "./components/pages/ContactMe";
import About from "./components/pages/About";
import Adventures from "./components/pages/Adventures";
import Loader from "./components/pages/Loader";

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const scrollFraction = scrollTop / (documentHeight - windowHeight);
      const scrollPercentage = Math.min(100, scrollFraction * 100);

      const indicator = document.querySelector(".scroll-indicator");
      if (indicator) {
        indicator.style.height = `${scrollPercentage}%`;
      }

      const topButton = document.querySelector(".top");
      if (topButton) {
        topButton.style.display = scrollTop > 100 ? "block" : "none";
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Timeout simulates loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 8000); // 5 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  // Once the loading is done, display the rest of the app

  return (
    <>
      <Router>
        <Navbar />
        <Chatbox />
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                timeout={300}
                classNames="fade-slide"
              >
                <Switch location={location}>
                  <Route path="/" exact component={Home} />
                  <Route path="/projects" component={Projects} />
                  <Route path="/resume" component={Resume} />
                  <Route path="/about" component={About} />
                  <Route path="/contactme" component={ContactMe} />
                  <Route path="/adventures" component={Adventures} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </Router>

      <div className="scroll-indicator-container">
        <div className="scroll-indicator"></div>
      </div>
      <button
        className="top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <i className="fas fa-arrow-up"></i>
      </button>

      

      {/* <script src="./app.js"></script> */}
    </>
  );
}

export default App;
