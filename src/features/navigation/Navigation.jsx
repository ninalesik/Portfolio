import React from "react";
import { Link } from "react-scroll";
import HomeIcon from "./images/home.svg"
import ContactIcon from "./images/contact.svg";
import PortfolioIcon from "./images/portfolio.svg";
import CVIcon from "./images/cv.svg";

import "./navigation.css";

export const Navigation = () => {
  return (
    <nav className="navigation">
      <Link
        className="item"
        activeClass="active"
        to="home"
        smooth={true}
        duration={500}
      >
        <img src={HomeIcon}alt="HomeIcon" />
      </Link>
      <Link className="item" to="education" smooth={true} duration={500}>
        <img src={CVIcon} alt="CVIcon" />
      </Link>
      <Link className="item" to="portfolio" smooth={true} duration={500}>
        <img src={PortfolioIcon} alt="PortfolioIcon" />
      </Link>
      <Link className="item" to="contacts" smooth={true} duration={500}>
        <img src={ContactIcon} alt="ContactIcon" />
      </Link>
    </nav>
  );
};