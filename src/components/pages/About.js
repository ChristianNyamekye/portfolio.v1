import React, { useRef } from "react";
import "../../App.css";
import Biography from "./Biography";

export default function About() {
  const containerRef = useRef();
  return (
    <>
      {/* <h1 className="about">ABOUT</h1> */}
      <Biography containerRef={containerRef} />
    </>
  );
}

