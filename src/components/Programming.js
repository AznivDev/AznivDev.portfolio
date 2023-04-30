import React from 'react';
import '../styles/programmingStyles/programming.scss';
import AOS from "aos";
import { FcApproval } from "react-icons/fc";
import "aos/dist/aos.css";

const Programming = () => {

    AOS.init({
        duration: 2000
    })

    return(
        <div className="programming-container">
            <p className="programming-tityle">Programming skills</p>
            <ul className="programming-list">
               <li className="programming-item" data-aos="zoom-out"><p>HTML5</p><p className="showItem"><FcApproval /></p></li>
               <li className="programming-item" data-aos="zoom-out"><p>CSS3/SASS</p><p className="showItem"><FcApproval /></p></li>
               <li className="programming-item" data-aos="zoom-out"><p>JS</p><p className="showItem"><FcApproval /></p></li>
               <li className="programming-item" data-aos="zoom-out"><p>React</p><p className="showItem"><FcApproval /></p></li>
                <li className="programming-item" data-aos="zoom-out"><p>Redux</p><p className="showItem"><FcApproval /></p></li>
                <li className="programming-item" data-aos="zoom-out"><p>Redux Toolkit</p><p className="showItem"><FcApproval /></p></li>
                <li className="programming-item" data-aos="zoom-out"><p>TypeScript</p><p className="showItem"><FcApproval /></p></li>
                <li className="programming-item" data-aos="zoom-out"><p>Node.js</p><p className="showItem"><FcApproval /></p></li>
                <li className="programming-item" data-aos="zoom-out"><p>MySQL</p><p className="showItem"><FcApproval /></p></li>
                <li className="programming-item" data-aos="zoom-out"><p>MongoDB</p><p className="showItem"><FcApproval /></p></li>
                <li className="programming-item" data-aos="zoom-out"><p>Java core</p><p className="showItem"><FcApproval /></p></li>
                <li className="programming-item" data-aos="zoom-out"><p>OOP</p><p className="showItem"><FcApproval /></p></li>
                <li className="programming-item" data-aos="zoom-out"><p>Algorithms</p><p className="showItem"><FcApproval /></p></li>
                <li className="programming-item" data-aos="zoom-out"><p>REST API</p><p className="showItem"><FcApproval /></p></li>
                <li className="programming-item" data-aos="zoom-out"><p>Adaptive Layout</p><p className="showItem"><FcApproval /></p></li>
                <li className="programming-item" data-aos="zoom-out"><p>Unit testing(Jest)</p><p className="showItem"><FcApproval /></p></li>
                <li className="programming-item" data-aos="zoom-out"><p>Git</p><p className="showItem"><FcApproval /></p></li>
                <li className="programming-item" data-aos="zoom-out"><p>Jira</p><p className="showItem"><FcApproval /></p></li>
                <li className="programming-item" data-aos="zoom-out"><p>Bitbucket</p><p className="showItem"><FcApproval /></p></li>
                <li className="programming-item" data-aos="zoom-out"><p>Postman</p><p className="showItem"><FcApproval /></p></li>
                <li className="programming-item" data-aos="zoom-out"><p>VS Code</p><p className="showItem"><FcApproval /></p></li>
                <li className="programming-item" data-aos="zoom-out"><p>DevOps essentials</p><p className="showItem">essentials</p></li>
                <li className="programming-item" data-aos="zoom-out"><p>Soft Skills</p><p className="showItem"><FcApproval /></p></li>
                <li className="programming-item" data-aos="zoom-out"><p>Design Patterns</p><p className="showItem"><FcApproval /></p></li>
                <li className="programming-item" data-aos="zoom-out"><p>Software Architecture</p><p className="showItem"><FcApproval /></p></li>
            </ul>
        </div>
    );
}

export default Programming;