import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  // JavaScript to handle smooth scroll to top
  document.querySelector(".top").addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Optionally, only show the button when the user scrolls down
  window.onscroll = function () {
    var scrollPosition =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollPosition > 10) {
      // Adjust '100' to when you want the button to appear
      document.querySelector(".top").style.display = "block";
    } else {
      document.querySelector(".top").style.display = "none";
    }
  };

  return (
    <div className="cards animated-gradient">
     

      <h1 style={{ textAlign: "left", color: "cyan" }}>i am a ... </h1>

      <div className="cards__container">
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
    </div>
  );
}

export default Cards;
