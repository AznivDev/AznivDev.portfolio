import {React} from 'react';
import '../styles/experiencesStyles/experiences.scss';
import AOS from "aos";
import "aos/dist/aos.css";

const Experience = () => {

    AOS.init({
        duration: 2000
    });

    return (
        <div className = "experienceContainer" data-aos = "fade-left">
            <p className="experienceTitle">Experience</p>
            <ul className = "experienceList">
                <li className = "experienceItem">Zvartnots airports - phone number seller</li>
                <li className = "experienceItem">Beeline - sales operator</li>
                <li className = "experienceItem">Berlin optik - optik consultant</li>
            </ul>
        </div>
    )
}

export default Experience;