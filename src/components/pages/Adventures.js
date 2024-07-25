import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";

import icelandImage from "../images/img-1.jpg"; // Path to your iceland image
import saharaImage from "../images/img-2.jpg"; // Path to your sahara image
import amazonImage from "../images/img-3.jpg"; // Path to your amazon image

const adventuresData = [
  {
    image: icelandImage,
    title: "Iceland 2018",
    description:
      "Exploring the glaciers and volcanoes of this rugged landscape.",
  },
  {
    image: saharaImage,
    title: "Sahara Desert 2019",
    description: "Experiencing the vastness and beauty of the desert.",
  },
  {
    image: amazonImage,
    title: "Amazon Rainforest 2020",
    description: "Venturing into the dense and diverse Amazonian wilderness.",
  },
  {
    image: amazonImage,
    title: "Amazon Rainforest 2020",
    description: "Venturing into the dense and diverse Amazonian wilderness.",
  },
  {
    image: amazonImage,
    title: "Amazon Rainforest 2020",
    description: "Venturing into the dense and diverse Amazonian wilderness.",
  },
  {
    image: amazonImage,
    title: "Amazon Rainforest 2020",
    description: "Venturing into the dense and diverse Amazonian wilderness.",
  },
  {
    image: amazonImage,
    title: "Amazon Rainforest 2020",
    description: "Venturing into the dense and diverse Amazonian wilderness.",
  },
  {
    image: amazonImage,
    title: "Amazon Rainforest 2020",
    description: "Venturing into the dense and diverse Amazonian wilderness.",
  },
  {
    image: amazonImage,
    title: "Amazon Rainforest 2020",
    description: "Venturing into the dense and diverse Amazonian wilderness.",
  },
  // ... add more adventures as needed
];

export default function Adventures() {
  return (
    <section id="adventures">
      <div className="page-wrapper">
        <br></br>
        <br></br>
        <br></br>
        <h2>
          <Link
            to="/adventures"
            style={{ fontFamily: "'Times New Roman, Times, serif'" }}
          >
            explore_the_world_with_me :)
          </Link>
        </h2>
        <div className="adventures-content">
          {adventuresData.map((adventure, index) => (
            <div className="adventure-row" key={index}>
              <img src={adventure.image} alt={adventure.title} />
              <div className="adventure-layer">
                <h5>{adventure.title}</h5>
                <p>{adventure.description}</p>
                {/* Add link icon or any other elements you need here */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
