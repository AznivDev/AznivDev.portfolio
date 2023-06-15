import React from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import '../styles/portfolioStyles/portfolio.scss';
import { AiOutlineLink } from "react-icons/ai";

function PortfolioItem(props) {
    AOS.init({
        duration: 2000
    })
    return (
        <div className="portfolio-item" data-aos="zoom-in">
            <a
                href={props.itemLink}
                target="blank"> <AiOutlineLink /> {props.itemTitle}
            </a>
        </div>
    );
}

export default PortfolioItem;