import React, { useState } from "react";
import "./Services.css";

const Services = () => {
  const [Toggle,setToggle]=useState(0);
  const toggleClick=(index)=>{
    setToggle(index)
  }
  return (
    <section className="Services-section" id="Services">
      <div className="parent-Services">
        <h1 className="Services">Services</h1>
        <span className="S-child">What i offer</span>
      </div>
      <div className="service-container">
        <div className="container-child">
          <div className="service-icon">
            <i class="fas fa-laptop-code"></i>
          </div>
          <h3> Web <br/>Designer</h3>
          
           <button className="service-btn" onClick={()=>{toggleClick(1)}}> view more <i class="fas fa-arrow-circle-right icon"></i>  </button> 
         
        </div>

        <div className="container-child">
          <div className="service-icon">
            <i class="fas fa-code"></i>
          </div>
          <h3> UI/UX<br/> Designer</h3>
         
          <button className="service-btn" onClick={()=>{toggleClick(2)}}> view more <i class="fas fa-arrow-circle-right icon"></i>   </button> 
         
        </div>

        <div className="container-child">
          <div className="service-icon">
            <i class="fas fa-notes-medical"></i>
          </div>
          <h3> Branding <br/>Designer</h3>

          <button className="service-btn" onClick={()=>{toggleClick(3)}}> view more <i class="fas fa-arrow-circle-right icon"></i>   </button> 
          
        </div>
      </div>

         <div className={Toggle===1 ?"services-popul popul-active" : "services-popul"}>
           <div className=" popul" id="popul-web">
            <div className="popul-child">
              <div className="popul-header">
                <h3>Web Designer</h3>
                <p>services with more than 1 year of experiences providing quality work to clients and componties</p>
              </div>
            <div className="popul-container">
              <p> <i class="fas fa-check-circle"></i> I develop the user interface </p>
              <p> <i class="fas fa-check-circle"></i> web page development </p>
              <p> <i class="fas fa-check-circle"></i> I create UI element interactions</p>
              <p> <i class="fas fa-check-circle"></i> design and mackups of products for componies </p>
            </div>
            </div>
            <div className="popul-close"  onClick={()=>{setToggle(0)}} >  <i class="fas fa-times"></i></div>
              </div> 
          </div>    
              <div className={Toggle===2? "services-popul popul-active" : "services-popul"}>
                  <div className=" popul" id="popul-UI">
                    <div className="popul-child">
                      <div className="popul-header">
                        <h3>UI/UX Designer</h3>
                        <p>services with more than 1 year of experiences providing quality work to clients and componties</p>
                      </div>
                    <div className="popul-container">
                      <p> <i class="fas fa-check-circle"></i> I develop the user interface </p>
                      <p> <i class="fas fa-check-circle"></i> web page development </p>
                      <p> <i class="fas fa-check-circle"></i> I create UI element interactions</p>
                      <p> <i class="fas fa-check-circle"></i> design and mackups of products for componies </p>
                    </div>
                    </div>
                    <div className="popul-close"  onClick={()=>{setToggle(0)}} >  <i class="fas fa-times"></i></div>
                  </div> 
              </div>
              <div className={Toggle===3 ?"services-popul popul-active" : "services-popul"}>
      <div className=" popul" id="popul-Branding">
        <div className="popul-child">
          <div className="popul-header">
            <h3>Branding Designer</h3>
            <p>services with more than 1 year of experiences providing quality work to clients and componties</p>
          </div>
         <div className="popul-container">
          <p> <i class="fas fa-check-circle"></i> I develop the user interface </p>
          <p> <i class="fas fa-check-circle"></i> web page development </p>
          <p> <i class="fas fa-check-circle"></i> I create UI element interactions</p>
          <p> <i class="fas fa-check-circle"></i> design and mackups of products for componies </p>
         </div>
        </div>
        <div className="popul-close"  onClick={()=>{setToggle(0)}} >  <i class="fas fa-times"></i></div>
      </div> 
</div>

     
    </section>
  );}

export default Services;
