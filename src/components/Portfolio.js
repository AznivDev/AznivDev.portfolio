import React from 'react';
import '../styles/portfolioStyles/portfolio.scss';
import AOS from "aos";
import { FcLink } from "react-icons/fc";
import "aos/dist/aos.css";

const Portfolio = () => {

    AOS.init({
        duration: 2000
    })

    return(
        <div className="portfolio-container">
            <p className="portfolio-tityle">My projects</p>
            <ul className="portfolio-list">
                <li className="portfolio-item" data-aos="zoom-out">
                    <a href="https://burger-fabuji7y0-aznivdev.vercel.app/" target="blank"><FcLink/> Make your burger</a>
                </li>
                <li className="portfolio-item" data-aos="zoom-out">
                    <a href="https://google-translate-beta.vercel.app/" target="blank"><FcLink/> Google translate</a>
                </li>
                <li className="portfolio-item" data-aos="zoom-out">
                    <a href="https://google-translate-a3v3.vercel.app/" target="blank"><FcLink/> Information about names</a>
                </li>
                <li className="portfolio-item" data-aos="zoom-out">
                    <a href="https://cocktails-from-api.vercel.app/" target="blank"><FcLink/> Cocktails</a>
                </li>
            </ul>
        </div>
    );
}

export default Portfolio;