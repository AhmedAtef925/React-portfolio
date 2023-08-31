import React from "react";
import "./works.css";
const PortfolioItem = ({item}) => {
  return (
    <section className="Portfolio-content" key={item.id}>
            <img src={item.image} alt="source not found" className="portfol-image" />
            <h3 className="portfol-title">{item.title}</h3>
            <a href="#" className="portfol-link">Demo <i class="fas fa-arrow-circle-right portfol-icon "></i></a>
     
    </section>
  )}
  export default PortfolioItem;
