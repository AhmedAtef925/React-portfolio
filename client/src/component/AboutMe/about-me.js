import React from "react";
import "./about-me.css";
import picture from "./picture1.jpg";
import CV from"./Ahmed Atef.pdf";

function AboutMe(){
return(
    <div className="about-me" id="About">
        <div className="parent-Header">
        <h1 className="heading">About Me</h1>
          <span className="H-child">my introduction</span>
        </div>
<div className="Heading-body">
            <div className="the-img">
                 <img src={picture} className="img"/>
            </div>

            <div className="aboutMe-details">
                <div className="aboutMe-links">
                        <div className="link">
                            <div><i class="fas fa-laptop-code"></i> </div>
                            <h3>Experience</h3>
                            <span>+1 year</span>
                        </div>

                        <div className="link">
                            <div> <i class="fas fa-clipboard-list"></i> </div>
                            <h3>Completed</h3>
                            <span>5 projects</span>
                        </div>

                        <div className="link">
                            <div> <i class="fab fa-github"></i> </div>
                            <h3>Support</h3>
                            <span> gitHub</span>
                        </div>

                </div>
                <p className="parag">
                Front-end developer with about 1 years of experience. I always strive to promote excellence in design. I have designed over 5 responsive websites per month, meeting 99% customer satisfaction. Achieving the best user experience by 35%, ability to retain customers by 18%. 
                </p>
                <button className="btn">
                <a href={CV} download="">
                 Download CV  <i class="fas fa-download"></i>
                </a>
              </button>
            </div>

</div>





    </div>
)
}

export default AboutMe
