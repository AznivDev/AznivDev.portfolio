// import React, {useState, useRef} from 'react';
// import './styles/Navbar.css';
// import { FiMenu, FiXCircle } from 'react-icons/fi';

 
// const Navbar = (...args) => {
//     const [menuClicked, setmenuClicked] = useState(false);
//     const toggleMenuClicked = () => {
//         setmenuClicked(!menuClicked);
//     }

//     // const homeRef = useRef(null);
//     // const programmingRef = useRef(null);
//     // const certificatesRef = useRef(null);
//     // const languagesRef = useRef(null);
//     // const experienceRef = useRef(null);
//     // const contactMeRef = useRef(null);
// debugger
//     const getHome = () => {
//         window.scrollTo({
//           top: args.homeRef.current.offsetTop,
//           behavior: "smooth"
//         })
//       }
  
//       const getProgramming = () => {
//         window.scrollTo({
//           top: args.programmingRef.current.offsetTop,
//           behavior: "smooth"
//         })
//       }
  
//       const getCertificates = () => {
//         window.scrollTo({
//           top: args.certificatesRef.current.offsetTop,
//           behavior: "smooth"
//         })
//       }
  
//       const getLanguages = () => {
//         window.scrollTo({
//           top: args.languagesRef.current.offsetTop,
//           behavior: "smooth"
//         })
//       }
  
//       const getExperience = () => {
//         window.scrollTo({
//           top: args.experienceRef.current.offsetTop,
//           behavior: "smooth"
//         })
//       }
  
//       const getContactMe = () => {
//         window.scrollTo({
//           top: args.contactMeRef.current.offsetTop,
//           behavior: "smooth"
//         })
//       }
  
    

//     return (
//         <nav className = 'navbar'>
//             <span className = "navbar_logo"> A. S.</span>

//             { menuClicked ? (
//                 <FiXCircle size={25} className="navbar_menu" onClick={toggleMenuClicked}/>
//                 ) : (
//                 <FiMenu size={25} className="navbar_menu" onClick={toggleMenuClicked}/>
//                 )
//             } 

//             <ul
//                 className = {
//                 menuClicked ? "navbar_list navbar_list--active" : "navbar_list" }
//             >
//                 <li className = 'navbar_item' onClick={getHome}>
//                     <p  className = 'navbar_link'>Home</p>
//                 </li>
//                 <li className = 'navbar_item' onClick={getProgramming}>
//                     <p  className = 'navbar_link'>Programming</p>
//                 </li>
//                 <li className = 'navbar_item' onClick = {getCertificates}>
//                     <p  className = 'navbar_link' > Certificates</p>
//                 </li>
//                 <li className = 'navbar_item' onClick = {getLanguages}>
//                     <p className = 'navbar_link' >Languages</p>
//                 </li>
//                 <li className = 'navbar_item' onClick = {getExperience}>
//                     <p className = 'navbar_link'>Experience</p>
//                 </li>
//                 <li   className = 'navbar_item' onClick = {getContactMe}>
//                     <p  className = 'navbar_link'> ContactMe </p>
//                 </li>
//             </ul>
            
//         </nav>  
        
//         // <nav className = 'navbar'>
//         //     <span className = "navbar_logo"> A. S.</span>

//         //     { menuClicked ? (
//         //         <FiXCircle size={25} className="navbar_menu" onClick={toggleMenuClicked}/>
//         //         ) : (
//         //         <FiMenu size={25} className="navbar_menu" onClick={toggleMenuClicked}/>
//         //         )
//         //     } 

//         //     <ul
//         //         className = {
//         //         menuClicked ? "navbar_list navbar_list--active" : "navbar_list" }
//         //     >
//         //         <li className = 'navbar_item'>
//         //             <Link to="/" className = 'navbar_link'>Home</Link>
//         //         </li>
//         //         <li className = 'navbar_item'>
//         //             <Link to="programming" className = 'navbar_link' >Programming</Link>
//         //         </li>
//         //         <li className = 'navbar_item'>
//         //             <Link to="certificates" className = 'navbar_link' > Certificates</Link>
//         //         </li>
//         //         <li className = 'navbar_item'>
//         //             <Link to="languages" className = 'navbar_link'>Languages</Link>
//         //         </li>
//         //         <li className = 'navbar_item'>
//         //             <Link to="experience" className = 'navbar_link'>Experience</Link>
//         //         </li>
//         //         <li   className = 'navbar_item'>
//         //             <Link  to="contactMe" className = 'navbar_link'> ContactMe </Link>
//         //         </li>
//         //     </ul>
            
//         // </nav>  
//     );
// }

// export default Navbar;