import React from "react";
import "./home.css";
import shapeImg from "./shape-bg.png";
import NavBar from "./../navbar/navbar";
function HOME() {
  return (
    <div className="home-container" id="Home">
      <NavBar />
      <div className="home-parent">
        <div className="home-child">
          <div className="home-links">
            <span class="home-link">
             
              <a href="https://web.facebook.com/profile.php?id=100007394805628">
              <i class="fab fa-facebook-f"></i>
              </a>
            </span>

            <span class="home-link">
             
              <a href="https://www.linkedin.com/in/ahmed-atef-89710a189/">
              <i class="fab fa-linkedin-in"></i>
              </a>
            </span>

            <span class="home-link">
             
              <a href="https://www.instagram.com/atef3735/">
              <i class="fab fa-instagram"></i>
              </a>
            </span>
            <span class="home-link">
              <a href="https://twitter.com/AhmedAtef3236npmnpm  ">
              <i class="fab fa-twitter"></i>
              </a>
            </span>
            <span class="home-link">
              <a href="https://web.whatsapp.com/">
                <i class="fab fa-whatsapp"></i>
              </a>
            </span>
          </div>
          <div className="home-details-name">
            Hello,Iam <span className="home-heightLight"> Ahmed Atef </span>
          </div>
          <div className="water-aniamate">
            <h1 >
            Front-end 
            </h1>
          </div>
          <div className="home-role-tagline">
            Knock of building application with front-end Tools
          </div>
          <div className="home-btn">
            <button className="btn primary-btn">
              <a href="#" download="AhmedAtef.pdf">
                Get Resume
              </a>
            </button>

            <button className="btn danger-btn">
              <a href="#ContactUs">Hire Me</a>
            </button>
          </div>
        </div>

        <div className="home-parent-img">
          <div className="home-img"></div>
        </div>
      </div>
      <img src={shapeImg} className="shape-bg" />
    </div>
  );
}
export default HOME;
