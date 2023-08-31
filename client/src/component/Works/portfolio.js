import React, { useState } from "react";
import "./works.css";
import {Data,projectsData} from "./data";
import PortfolioItem from"./portfolioItem";
import { useEffect } from "react";

const Portfolio = () => {
  const[Item,setItem]=useState({name:"all"});
  const[project,setproject]=useState([]);
  const[active,setactive]=useState(0);

  useEffect(()=>{
    if(Item.name==="all"){
      setproject(projectsData);
    }else{
      const newproject =projectsData.filter((project)=>{
        return project.category === Item.name;
  
      })
      setproject(newproject);
    }

  },[Item])
  const handelClick=(e,index)=>{
    setItem({name:e.target.textContent});
    setactive(index);
  }
  return (
    <section className="Portfolio" >
          <div className="portfolio-filter">
            {Data.map((ele,index)=>{
       return (
        <span onClick={(element)=>{
          handelClick(element,index); } }
         className={active===index?"active-item Data-item": "Data-item"} key={index}>{ele.name}</span>
       )
    })}
          </div>

          <div className="portfolio-container">
            {project.map((ele,index)=>{
                return (
                  <section className="Portfolio-content" key={index}>
                <img src={ele.image} alt="source not found" className="portfol-image" />
                <h3 className="portfol-title">{ele.title}</h3>
                <a href={ele.href} className="portfol-link">Demo <i class="fas fa-arrow-circle-right portfol-icon "></i></a>
        </section>
                )     
    })}
          </div>

    </section>
  )}
  export default Portfolio;