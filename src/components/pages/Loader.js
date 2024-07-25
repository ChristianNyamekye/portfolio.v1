import React from "react";
import "./Loader.css"; // Make sure to import the CSS stylesheet
import logo from "../images/logo2.png";

const Loader = () => {


return (
  // <div className="video-container">
  //   <video src="../images/loader.mp4" autoPlay muted loop />
  // </div>
  <div className="loader-wrapper loaded-animated-gradient ">
    <img src={logo} alt="Logo" className="loader-logo" />
    <div
      className="loader-text "
      style={{ fontFamily: "'Times New Roman, Times, serif'" }}
    >
      @christiannyamekye.kjr...
    </div>
    {/* <div className="loader-text-wrapper">
      <div className="loader-text">@christiannyamekye.kjr...</div>
    </div> */}
  </div>
);
};

export default Loader;
