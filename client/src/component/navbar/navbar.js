import React, { useState }  from "react";
import "./navbar.css";
//import { link,navlink,route,BrowserRouter } from "react-route-dom";
const NavBar = ()=>{

        const [Active,setActive]=useState("#Home");
        const toggleActive=(ele)=>{
            setActive(ele)
        }

        //toggle click 
        const [Toggle,setToggle]=useState(0);
        const toggleClick=(ele)=>{
            setToggle(ele);
             //document.querySelector(".nav-links").toggleClassList("nav-links-active");
        }
    return(
<div className="nav-section">
    <nav className="nav-container">  
    <a href="index.html" className="logo">ELBanhawy</a>
        <div className={Toggle===0?"nav-links":" nav-links nav-links-active"}>
                <a className={Active==="#Home" ? "active":""} href="#Home" onClick={()=>{toggleActive("#Home")}}> <i class="fas fa-home"></i> <span> Home </span> </a>
                <a className={Active==="#About" ? "active":""} href="#About"onClick={()=>{toggleActive("#About")}}><i class="fas fa-user"></i> <span>AboutMe</span></a>
                <a className={Active==="#Skills" ? "active":""} href="#Skills"onClick={()=>{toggleActive("#Skills")}}><i class="fas fa-list"></i> <span>Skills</span> </a>
                <a className={Active==="#Services" ? "active":""} href="#Services"onClick={()=>{toggleActive("#Services")}}><i class="fas fa-briefcase"></i> <span>Services</span></a>
                <a className={Active==="#Qualitification" ? "active":""}  href="#Qualitification"onClick={()=>{toggleActive("#Qualitification")}}> <i class="fas fa-university"></i> <span>Qualification</span></a>
                <a className={Active==="#work" ? "active":""} href="#work"onClick={()=>{toggleActive("#work")}}><i class="fas fa-briefcase"></i> <span>Works</span></a>
                <a className={Active==="#ContactUs" ? "active":""}  href="#ContactUs"onClick={()=>{toggleActive("#ContactUs")}}><i class="fas fa-phone-alt"></i><span>ContactUs</span></a>
        </div>
        
    </nav>
    <div className="toggle-close">  
           <div className={Toggle===1 ? "toggle-hidden":"toggle"}onClick={()=>{toggleClick(1)}}>  <i class="fas fa-sliders-h"></i> </div>
           <div className={Toggle===0 ? "toggle-hidden":"close"}onClick={()=>{toggleClick(0)}}>  <i class="fas fa-sliders-h"></i> </div>
    </div>

</div>
    )
}
export default NavBar;