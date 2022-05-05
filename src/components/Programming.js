import React from 'react';
import '../styles/programmingStyles/programming.scss';
import AOS from "aos";
import "aos/dist/aos.css";

const Programming = () => {

    AOS.init({
        duration: 2000
    })

    return(
        <div className="programming-container">
            <p className="programming-tityle">Programming skills</p>
            <ul className="programming-list">
               <li className="programming-item" data-aos="zoom-out"><p>HTML5</p><p className="showItem">90%</p></li>
               <li className="programming-item" data-aos="zoom-out"><p>CSS3/SASS</p><p className="showItem">90%</p></li>
               <li className="programming-item" data-aos="zoom-out"><p>JS</p><p className="showItem">90%</p></li>
               <li className="programming-item" data-aos="zoom-out"><p>React</p><p className="showItem">70%</p></li>
               <li className="programming-item" data-aos="zoom-out"><p>Java core</p><p className="showItem">50%</p></li>
            </ul>
        </div>
    );
}

export default Programming;