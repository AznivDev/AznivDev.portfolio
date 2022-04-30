import React from 'react';
import '../styles/programmingStyles/programming.scss';

const Programming = () => {
    return(
        <div className="programming-container">
            <p className="programming-tityle">Programming skills</p>
            <ul className="programming-list">
               <li className="programming-item"><p>HTML5</p></li>
               <li className="programming-item"><p>CSS3/SASS</p></li>
               <li className="programming-item"><p>JS</p></li>
               <li className="programming-item"><p>React</p></li>
               <li className="programming-item"><p>Java core</p></li>
            </ul>
        </div>
    );
}

export default Programming;