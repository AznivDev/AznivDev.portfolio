import React from 'react';
import '../styles/programmingStyles/programming.scss';
import ProgrammingSkill from "./ProgrammingSkill";
import AOS from "aos";
import "aos/dist/aos.css";

const Programming = () => {

    AOS.init({
        duration: 2000
    })

    return (
        <div className="programming-container">
            <p className="programming-tityle">Programming skills</p>
            <div className="programming-list">
                <ProgrammingSkill skill="HTML5" />
                <ProgrammingSkill skill="CSS3/SASS" />
                <ProgrammingSkill skill="JS" />
                <ProgrammingSkill skill="React" />
                <ProgrammingSkill skill="Redux" />
                <ProgrammingSkill skill="Redux Toolkit" />
                <ProgrammingSkill skill="TypeScript" />
                <ProgrammingSkill skill="Node.js" />
                <ProgrammingSkill skill="MySQL" />
                <ProgrammingSkill skill="MongoDB" />
                <ProgrammingSkill skill="Java core" />
                <ProgrammingSkill skill="OOP" />
                <ProgrammingSkill skill="Algorithms" />
                <ProgrammingSkill skill="HTTP" />
                <ProgrammingSkill skill="Adaptive Layout" />
                <ProgrammingSkill skill="Unit testing(Jest)" />
                <ProgrammingSkill skill="Git" />
                <ProgrammingSkill skill="Jira" />
                <ProgrammingSkill skill="Bitbucket" />
                <ProgrammingSkill skill="GitHub" />
                <ProgrammingSkill skill="Postman" />
                <ProgrammingSkill skill="VS Code" />
                <ProgrammingSkill skill="Linux" />
                <ProgrammingSkill skill="DevOps essentials" />
                <ProgrammingSkill skill="Soft Skills" />
                <ProgrammingSkill skill="Design Patterns" />
                <ProgrammingSkill skill="Software Architecture" />
            </div>
        </div>
    );
}

export default Programming;