import React from 'react';
import '../styles/portfolioStyles/portfolio.scss';
import PortfolioItem from './PortfolioItem';
import AOS from "aos";
import "aos/dist/aos.css";

const Portfolio = () => {

    AOS.init({
        duration: 2000
    })

    return (
        <div className="portfolio-container">
            <p className="portfolio-tityle">My projects</p>
            <PortfolioItem
                itemLink="https://burger-fabuji7y0-aznivdev.vercel.app/"
                itemTitle="Make your burger"
            />
            <PortfolioItem
                itemLink="https://percentage-calculator-phi.vercel.app/"
                itemTitle="Calculator"
            />
            <PortfolioItem
                itemLink="https://timer-n3kh-9x1qj8evo-aznivdev.vercel.app/"
                itemTitle="Coffee shop"
            />
            <PortfolioItem
                itemLink="https://tic-tac-toe-aznivdev.vercel.app/"
                itemTitle="Game Tic Tac Toe"
            />
            <PortfolioItem
                itemLink="https://google-translate-beta.vercel.app/"
                itemTitle="Google translate"
            />
            <PortfolioItem
                itemLink="https://info-about-name-git-main-aznivdev.vercel.app/"
                itemTitle="Beers list and information from API"
            />
            <PortfolioItem
                itemLink="https://timer-ten-weld.vercel.app/"
                itemTitle="Timer"
            />
            <PortfolioItem
                itemLink="https://tic-tac-toe-fj24.vercel.app/"
                itemTitle="Percentage calculator"
            />
            <PortfolioItem
                itemLink="https://google-translate-a3v3.vercel.app/"
                itemTitle="Information about names"
            />
            <PortfolioItem
                itemLink="https://cocktails-from-api.vercel.app/"
                itemTitle="Cocktails"
            />
            <p className="portfolio-tityle">My big full stack projects</p>
            <PortfolioItem
                itemLink="https://github.com/AznivDev/Todo-list"
                itemTitle="To-do list"
            />
            <PortfolioItem
                itemLink="https://github.com/AznivDev/Cooking-blog"
                itemTitle="Cooking blog"
            />
            <PortfolioItem
                itemLink="https://github.com/AznivDev/inventorization-asset-management"
                itemTitle="Inventorization asset management program (teamwork)"
            />
        </div>
    );
}

export default Portfolio;