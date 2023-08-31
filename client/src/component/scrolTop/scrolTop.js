import React from "react";
import "./scrolTop.css";

const ScrollTop = () => {
    window.addEventListener("scroll",()=>{
        const scrollUp=document.querySelector(".scroll");
        if (window.scrollY >=550){
            scrollUp.classList.add("scroll-show")
        }else{   scrollUp.classList.remove("scroll-show")}
    })
    const scrollto=()=>{
        window.scrollTo(10, 10);
    }
  return ( 
<div className="scroll" onClick={()=>{scrollto()}}>
<i class="icons fas fa-angle-double-up"></i>
</div>
   );
};
export default ScrollTop;