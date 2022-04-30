import {React} from 'react';
import '../styles/experiencesStyles/experiences.scss';

const Experience = () => {
    return (
        <div className = "experienceContainer">
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