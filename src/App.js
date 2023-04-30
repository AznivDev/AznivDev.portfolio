import React, {useState, useRef} from 'react';
import './AppStyles/App.scss';
import { FiMenu, FiXCircle } from 'react-icons/fi'
import Home from './components/Home';
import Programming from './components/Programming';
import Certificates from './components/Certificates';
import Portfolio from './components/Portfolio';
import Languages from './components/Languages';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
    const homeRef = useRef(null);
    const programmingRef = useRef(null);
    const certificatesRef = useRef(null);
    const portfolioRef = useRef(null);
    const languagesRef = useRef(null);
    const experienceRef = useRef(null);
    const contactMeRef = useRef(null);

    // menu items location 
    const getHome = () => {
      window.scrollTo({
        top: homeRef.current.offsetTop,
        behavior: "smooth"
      })
    }

    const getProgramming = () => {
      window.scrollTo({
        top: programmingRef.current.offsetTop,
        behavior: "smooth"
      })
    }

    const getCertificates = () => {
      window.scrollTo({
        top: certificatesRef.current.offsetTop,
        behavior: "smooth"
      })
    }
  
    const getPortfolio = () => {
      window.scrollTo({
        top: portfolioRef.current.offsetTop,
        behavior: "smooth"
      })
    }

    const getLanguages = () => {
      window.scrollTo({
        top: languagesRef.current.offsetTop,
        behavior: "smooth"
      })
    }

    const getExperience = () => {
      window.scrollTo({
        top: experienceRef.current.offsetTop,
        behavior: "smooth"
      })
    }

    const getContactMe = () => {
      window.scrollTo({
        top: contactMeRef.current.offsetTop,
        behavior: "smooth"
      })
    }

    const [menuClicked, setmenuClicked] = useState(false);
    const toggleMenuClicked = () => {
        setmenuClicked(!menuClicked);
    }

  return (
      <div>
           <nav className = 'navbar'>
             <span className = "navbarLogo" onClick={getHome}> A. S.</span>

            {/* Menu conversion depending on the size of the device. */}
            { menuClicked ? (
                <FiXCircle size={25} className="navbarMenu" onClick={toggleMenuClicked}/>
                ) : (
                <FiMenu size={25} className="navbarMenu" onClick={toggleMenuClicked}/>
                )
            } 

            <ul
                className = {
                    menuClicked ? "navbarList navbarList--active" : "navbarList" }
            >
                <li className = 'navbarItem' onClick={getHome}>
                    <p  className = 'navbarLink'>Home</p>
                </li>
                <li className = 'navbarItem' onClick={getProgramming}>
                    <p  className = 'navbarLink'>Programming</p>
                </li>
                <li className = 'navbarItem' onClick = {getCertificates}>
                    <p  className = 'navbarLink' > Certificates</p>
                </li>
                <li className = 'navbarItem' onClick = {getPortfolio}>
                    <p  className = 'navbarLink' > Portfolio</p>
                </li>
                <li className = 'navbarItem' onClick = {getLanguages}>
                    <p className = 'navbarLink' >Languages</p>
                </li>
                <li className = 'navbarItem' onClick = {getExperience}>
                    <p className = 'navbarLink'>Experience</p>
                </li>
                <li   className = 'navbarItem' onClick = {getContactMe}>
                    <p  className = 'navbarLink'> Contact </p>
                </li>
            </ul>
        </nav>   
        
        <>         
            <div ref={homeRef}>
              <Home/>
            </div>

            <div ref={programmingRef}>
              <Programming/>
            </div>

            <div ref={certificatesRef}>
              <Certificates/>
            </div>
        
            <div ref={portfolioRef}>
              <Portfolio/>
            </div>


            <div className = "langExpContainer">
              <div ref={languagesRef} className="languagesGlobalContainer">
                <Languages/>
              </div>
              <div ref={experienceRef} className="experienceGlobalContainer">
                <Experience/>
              </div>
            </div>

            <div ref={contactMeRef}>
              <Contact/>
            </div>
        </>    
    </div>
  )
}

export default App;
