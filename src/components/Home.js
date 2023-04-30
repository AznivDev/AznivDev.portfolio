import "../styles/homeStyles/home.scss";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Home = () => {

    return (
        <div className="home">
            <img src={require("../images/homeImage.jpg")} />
            {/* Social links to Linkedin and Github.*/}
            <div className="socialLinks">
                <a href="https://github.com/AznivDev" target="blank"><FaGithub className="github" /></a>
                <a href="https://www.linkedin.com/in/azniv-saroyan/" target="_blank"><FaLinkedin className="linkedin" /></a>
            </div>
        </div>
    )
}

export default Home;