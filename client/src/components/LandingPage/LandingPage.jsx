import React from "react";
import { Link } from "react-router-dom";
import "../LandingPage/LandingPage.css";
import image from "../assets/img/uwu.svg";
import image2 from "../assets/img/logo.jpg";

export default function LandingPage() {
  return (
    <div className="dad-lan">
      <img src={image2} alt="logo" className="logo" />
      <div className="landing">
        <div className="navs">
          <h1 className="titul"> Countries </h1>
          <img src={image} alt="logo" className="image" />
        </div>

        <h2 className="subtitulo">
          Discover all the countries in the world and the activities you can
          venture into
        </h2>
        <h4 className="descripcion">
          Countrie App is an application aimed at showing you information from
          different parts of the world
        </h4>
        <div className="btn">
          <Link to="/home">
            <button>
              <span>See more</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
