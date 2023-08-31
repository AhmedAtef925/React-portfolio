import React from "react";
import "./skills.css";

const Skills = () => {
  return (
    <section className="skills-section" id="Skills">
      <div className="parent-skills">
        <h1 className="skills">Skills</h1>
        <span className="S-child">my Technical Leval</span>
      </div>

      <div className="skills-container">
        <h3> front-end developer</h3>
        <div className="skills-child">
          <div className="skills-left">
            <div className="skill-top">
              <div className="skills-icon"> <i class="fab fa-html5"></i> </div>
              <div className="title">
                <h4>HTML</h4>
                <span>Advanced <progress value="9" max="10"></progress></span>
              </div>
            </div>
            <div className="skill-Middle">
              <div className="skills-icon">
                
                <i class="fab fa-css3-alt"></i>
              </div>
              <div className="title">
                
                <h4>CSS</h4>
                <span>Advanced <progress value="9" max="10"></progress></span>
              </div>
            </div>
            <div className="skill-buttom">
              <div className="skills-icon">
                
                <i class="fab fa-js-square"></i>
              </div>
              <div className="title">
                
                <h4>JavaScript</h4>
                <span>medium <progress value="7" max="10"></progress></span>
              </div>
            </div>
          </div>

          <div className="skills-right">
            <div className="skill-top">
              <div className="skills-icon">
                
                <i class="fab fa-bootstrap"></i>
              </div>
              <div className="title">
                
                <h4>bootstrap</h4>
                <span>Advanced <progress value="9" max="10"></progress></span>
              </div>
            </div>
            <div className="skill-Middle">
              <div className="skills-icon">
                
                <i class="fab fa-github"></i>
              </div>
              <div className="title">
                
                <h4>github</h4>
                <span>Advanced <progress value="9" max="10"></progress></span>
              </div>
            </div>
            <div className="skill-buttom">
              <div className="skills-icon">
                
                <i class="fab fa-react"></i>
              </div>
              <div className="title">
                
                <h4>react</h4>
                <span>medium <progress value="7" max="10"></progress></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
