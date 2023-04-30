import React from 'react';
import '../styles/portfolioStyles/portfolio.scss';
import { FcLink } from "react-icons/fc";

function PortfolioItem(props) {
    return (
        <div className="portfolio-item" data-aos="zoom-out">
            <a
                href={props.itemLink}
                target="blank"> <FcLink /> {props.itemTitle}
            </a>
        </div>
    );
}

export default PortfolioItem;