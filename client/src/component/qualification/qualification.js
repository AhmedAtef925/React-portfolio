import React from "react";
import  { useState } from "react";
import "./qualification.css";

const Qualitification = () => {
  const [Toggle,setToggle]=useState(0);
  const toggleClick=(index)=>{
    setToggle(index)
  }
  return (
    <section className="Qualitification" id="Qualitification">
      <div className="parent-qualitification">
        <h1 className="qual">Qualitification</h1>
        <span className="S-child">my personal qualitification </span>
      </div>

      <div className="Qualitification-container">
        <div className="Qualitification-tab">

          <div className={Toggle===0 ?"Qualitification-button Qualitification-active" : "Qualitification-button"}onClick={()=>{toggleClick(0)}}>
            <i class="Qualitification-icons fas fa-graduation-cap"></i>
            Education
          </div>

          <div className={Toggle===1 ?"Qualitification-button Qualitification-active" : "Qualitification-button"}onClick={()=>{toggleClick(1)}}>
            <i class="Qualitification-icons fas fa-business-time"></i>
            Experiences
          </div>
        </div>

        <section className="Qualitification-section">

          <div className={Toggle===0 ?"Qualitification-content Qualitification-content-active" : "Qualitification-content"}>

            <div className="Qualitification-data">
             <div> 
              <h3 className="Qualitification-title">faculty Of Engineering</h3>
              <span className="Qualitification-subtitle"> Benha -faculty</span>
          
              <div className="Qualitification-calender">
                <i class="fas fa-graduation-cap"></i> 2021
              </div>
              </div>
              <div>
                <span className="Qualitification-rounder"> </span>
                <span className="Qualitification-line"></span>
              </div>
              
            </div>

            <div className="Qualitification-data">
              <div></div>
              <div>
                <span className="Qualitification-rounder"> </span>
                <span className="Qualitification-line"></span>
            </div>
             <div>
             <h3 className="Qualitification-title">Web Development</h3>
              <span className="Qualitification-subtitle"> offline-courses</span>
             
              <div className="Qualitification-calender">
                <i class="fas fa-graduation-cap"></i> 2019 
              </div>
              </div>
              </div>

            <div className="Qualitification-data">
              <div>
              <h3 className="Qualitification-title">Web Development </h3>
              <span className="Qualitification-subtitle"> online-course</span>
             
              <div className="Qualitification-calender">
                <i class="fas fa-graduation-cap"></i> 2020 -present
              </div>
              </div>
              <div>
                <span className="Qualitification-rounder"> </span>
                <span className="Qualitification-line"></span>
              </div>
            </div>

            <div className="Qualitification-data">
              <div></div>
              <div>
                <span className="Qualitification-rounder"> </span>
                <span className="Qualitification-line"></span>
              </div>
             <div>
             <h3 className="Qualitification-title">UI/UX </h3>
              <span className="Qualitification-subtitle">udemy course</span>
            
              <div className="Qualitification-calender">
                <i class="fas fa-graduation-cap"></i> 2021 -present
              </div>
              </div>
            </div>
          </div>

          <div  className={Toggle===1 ?"Qualitification-content Qualitification-content-active" : "Qualitification-content"}>

            <div className="Qualitification-data">
              <div>
              <h3 className="Qualitification-title">product Design </h3>
              <span className="Qualitification-subtitle">microsoft -span</span>
              
              <div className="Qualitification-calender">
                <i class="fas fa-graduation-cap"></i> 2020 -present
              </div>
              </div>
              <div>
                <span className="Qualitification-rounder"> </span>
                <span className="Qualitification-line"></span>
              </div>
            </div>

            <div className="Qualitification-data">
              <div></div>
              <div>
                <span className="Qualitification-rounder"> </span>
                <span className="Qualitification-line"></span>
              </div>
             <div>
             <h3 className="Qualitification-title">UX Dsign </h3>
              <span className="Qualitification-subtitle">
                {" "}
                Apple -Institute
              </span>
             
              <div className="Qualitification-calender">
                <i class="fas fa-graduation-cap"></i> 2021 -present
              </div>
              </div>
            </div>

            <div className="Qualitification-data">
             <div>
             <h3 className="Qualitification-title">Web Design </h3>
              <span className="Qualitification-subtitle"> figma- span </span>
             
              <div className="Qualitification-calender">
                <i class="fas fa-graduation-cap"></i> 2021 -present
              </div>
              </div>
              <div>
                <span className="Qualitification-rounder"> </span>
                <span className="Qualitification-line"></span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
export default Qualitification;
