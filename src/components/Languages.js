import { React } from 'react';
import '../styles/languagesStyles/languages.scss'
import AOS from "aos";
import "aos/dist/aos.css";

const Languages = () => {

    AOS.init({
        duration: 2000
    })

    return (
        <div className="languageContainer" data-aos="zoom-in">
            <p className="languagesTitle">Languages</p>
            <ul className="languageList">
                <li className="languageItem">Armenian - mother language</li>
                <li className="languageItem">Russian - B2</li>
                <li className="languageItem">English - B1</li>
            </ul>
        </div>
    )
}

export default Languages;