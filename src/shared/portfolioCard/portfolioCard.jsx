import React from "react";
import './portfolioCard.css';

export const PortfolioCard = ({ data }) => (
  <div className="portfolioCard">
    <a href={data.link}>
      <img src={data.img} alt={data.img} />
    </a>
  </div>
);
