import React from "react";
import "./styles.css";
import { IoIosArrowDown } from "react-icons/io";
import videobg from "../../assets/rick_morty.webm";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <video className="video-bg" src={videobg} autoPlay loop muted />

      <div className="hero">
        <h1 className="content">
          Rick <br /> and Morty{" "}
        </h1>
      </div>
      <div className="arrow">
        <span className="swipe">
          <IoIosArrowDown />
        </span>
      </div>
    </section>
  );
};

export default HeroSection;
