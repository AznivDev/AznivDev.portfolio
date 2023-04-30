import { useState } from "react";
import "../styles/certificatesStyles/certificates.scss";
import ScrollToTopHook from "./ScrollToTopHook";
import AOS from "aos";
import "aos/dist/aos.css";

const Certificates = () => {

    AOS.init({
        duration: 2000
    })

    const nodeCertificate = require("../images/nodeJs_img.JPG");
    const javaCertificate = require("../images/java_img.JPG");
    const sourcemindCertificate = require("../images/sourcemind.jpeg")
    const [dataSrc, setDataSrc] = useState([sourcemindCertificate, "Front-End specialization program certificate"]);

    return (
        <div className="certificatesContainer">
            <p className="certificatesTitle">Certificates</p>
            {/* Initial big certificate. */}
            <img className="bigCertificate" src={dataSrc[0]} alt={dataSrc[1]} data-aos="fade-up" />

            <ScrollToTopHook />

            <ul className="certificatesList">
                <li className="certificatesItem">
                    <img
                        src={javaCertificate}
                        alt="Java certificate"
                        onClick={() => {  // Increase the size of the small certificate.
                            setDataSrc([javaCertificate, "Java certificate"])
                        }}
                        data-aos="flip-left"
                    />
                </li>
                <li className="certificatesItem">
                    <img
                        src={nodeCertificate}
                        alt="Node.js certificate"
                        onClick={() => {  // Increase the size of the small certificate.
                            setDataSrc([nodeCertificate, "Node.js certificate"])
                        }}
                        data-aos="flip-left"
                    />
                </li>
                <li className="certificatesItem">
                    <img
                        src={sourcemindCertificate}
                        alt="Front-End specialization program"
                        onClick={() => { // Increase the size of the small certificate.
                            setDataSrc([sourcemindCertificate, "Front-End specialization program"])
                        }}
                        data-aos="flip-left"
                    />
                </li>
            </ul>
        </div>
    )
}
export default Certificates;