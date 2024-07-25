import React, { useState } from "react";
// import { Button } from "./button";
import { Link, useLocation} from "react-router-dom";
import "./Navbar.css";
// import ContactMe from './pages/ContactMe';
import logo from "./images/logo2.png";

function Navbar() {
  const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // const showButton = () => {
  //   if (window.innerWidth <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };

  // useEffect(() => {
  //   showButton();
  // }, []);

  // window.addEventListener("resize", showButton);
  const location = useLocation(); // Get current location
  const isLandingPage = location.pathname === "/"; 

  return (
    <>
      <nav className={`navbar ${isLandingPage ? "navbar-landing" : ""}`}>
        <div className="navbar-container">
          <Link
            to="/"
            className="navbar-logo animated-logo"
            onClick={closeMobileMenu}
          >
            <img src={logo} alt="Logo" />
          </Link>

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {/* <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                HOME
              </Link>
            </li> */}
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                ABOUT
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/projects"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                PROJECTS
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contactme">
                <button
                  className=" nav-links "
                  // buttonStyle="btn--outline"
                  style={{
                    fontSize: "20px",
                    backgroundColor: "transparent",
                    // borderTopWidth: "2px",
                    border: "1px  #64ffda", // Example border color
                    borderRadius: "1px", // Optional: to round the corners
                    padding: "10px 20px", // Optional: for better button sizing
                    cursor: "pointer", // Optional: to change cursor on hover
                    transition: "all 0.3s ease", // Optional: for smooth transition effects
                  }}
                >
                  CONTACT ME <i className="far fa" />
                </button>
              </Link>
            </li>
          </ul>
          {/* {button && (
            <Button
              buttonStyle="btn--outline"
              className="animated-button navbar-button"
              target="/contactme"
            >
              CONTACT ME
            </Button>
          )} */}
          {/* <section>
            <Link to="/contactme" className="nav-item">
              <button
              // className=" animated-button "
              // style={{
              //   fontFamily: "'Pirata One', sans-serif",
              //   fontSize: "50px",
              //   color: "var(--accent-color)",
              //   backgroundColor: "var(--button-background-color)",
              // }}
              >
                ContactMe <i className="far fa" />
              </button>
            </Link>
          </section> */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
