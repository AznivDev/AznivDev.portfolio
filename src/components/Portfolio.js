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
                    <a href="https://percentage-calculator-phi.vercel.app/" target="blank"><FcLink/> Calculator</a>
                </li>
                <li className="portfolio-item" data-aos="zoom-out">
                    <a href="https://timer-n3kh-9x1qj8evo-aznivdev.vercel.app/" target="blank"><FcLink/> Coffee shop</a>
                </li>
                <li className="portfolio-item" data-aos="zoom-out">
                    <a href="https://tic-tac-toe-aznivdev.vercel.app/" target="blank"><FcLink/> Game Tic Tac Toe</a>
                </li>
                <li className="portfolio-item" data-aos="zoom-out">
                    <a href="https://google-translate-beta.vercel.app/" target="blank"><FcLink/> Google translate</a>
                </li>
                <li className="portfolio-item" data-aos="zoom-out">
                    <a href="https://info-about-name-git-main-aznivdev.vercel.app/" target="blank"><FcLink/> Beers list and information from API</a>
                </li>
                <li className="portfolio-item" data-aos="zoom-out">
                    <a href="https://timer-ten-weld.vercel.app/" target="blank"><FcLink/> Timer</a>
                </li>
                <li className="portfolio-item" data-aos="zoom-out">
                    <a href="https://tic-tac-toe-fj24.vercel.app/" target="blank"><FcLink/> Percentage calculator</a>
                </li>
                <li className="portfolio-item" data-aos="zoom-out">
                    <a href="https://google-translate-a3v3.vercel.app/" target="blank"><FcLink/> Information about names</a>
                </li>
                <li className="portfolio-item" data-aos="zoom-out">
                    <a href="https://cocktails-from-api.vercel.app/" target="blank"><FcLink/> Cocktails</a>
                </li>
            </ul>
            <p className="portfolio-tityle">My big full stack projects</p>
            <ul className="portfolio-list">
                <li className="portfolio-item" data-aos="zoom-out">
                    <a href="https://github.com/AznivDev/Todo-list" target="blank"><FcLink/> To-do list</a>
                </li>
                <li className="portfolio-item" data-aos="zoom-out">
                    <a href="https://github.com/AznivDev/Cooking-blog" target="blank"><FcLink/> Cooking blog</a>
                </li>
                <li className="portfolio-item" data-aos="zoom-out">
                    <a href="https://github.com/AznivDev/inventorization-asset-management" target="blank"><FcLink/> Inventorization asset management (teamwork)</a>
                </li>
            </ul>
        </div>
    );
}

export default Portfolio;