import {useState} from "react";
import "../styles/certificatesStyles/certificates.scss";
import ScrollToTopHook  from './ScrollToTopHook';


const Certificates = () => {
    const nodeCertificate = require("../images/nodeJs_img.JPG");
    const javaCertificate = require("../images/java_img.JPG");
    const [dataSrc, setDataSrc] = useState([nodeCertificate, "Node.js certificate"]);
    
    return ( 
        <div className = "certificatesContainer">  
            <p className="certificatesTitle">Certificates</p>
            <img className="bigCertificate" src={dataSrc[0]} alt={dataSrc[1]}/>
           
            <ScrollToTopHook />

            <ul className="certificatesList">
                <li className="certificatesItem">
                    <img 
                         src={javaCertificate}  
                         alt="Java certificate"
                         onClick = {() => {
                             setDataSrc([javaCertificate, "Java certificate"])}
                         }
                    />
                </li>
                <li className="certificatesItem">
                    <img 
                         src={nodeCertificate} 
                         alt="Node.js certificate"
                         onClick = {() => {
                             setDataSrc([nodeCertificate, "Node.js certificate"])}
                         }
                    />
                </li>
            </ul>
        </div>     
    )
}
export default Certificates;