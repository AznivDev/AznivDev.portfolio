import React from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import '../styles/portfolioStyles/portfolio.scss';
import { FcLink } from "react-icons/fc";

function PortfolioItem(props) {
    AOS.init({
        duration: 2000
    })
    return (
        <div className="portfolio-item" data-aos="zoom-in">
            <a
                href={props.itemLink}
                target="blank"> <FcLink /> {props.itemTitle}
            </a>
        </div>
    );
}

export default PortfolioItem;