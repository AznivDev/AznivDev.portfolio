import React from 'react';
import '../styles/programmingStyles/programming.scss';
import AOS from "aos";
import { FcApproval } from "react-icons/fc";
import "aos/dist/aos.css";

function ProgrammingSkill(skill) {
    return (
        <div className="programming-item" data-aos="zoom-out">
            <p>{skill.skill}</p>
            <p className="showItem"><FcApproval /></p>
        </div>
    )
}

export default ProgrammingSkill;