import {useState, useEffect} from "react";
import "../styles/scrollToTopHookStyles/scrollToTopHookStyles.scss";
import {FaArrowCircleUp} from "react-icons/fa";


const ScrollToTopHook = () => {
  
    const [visible, setVisible] = useState();
    const [scrollPosition, setScrollPosition] = useState(0);
    
    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: "smooth"})
    }

    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        if(scrollPosition > 400){
            setVisible(true);
        } else {
            setVisible(false);
        }
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, [scrollPosition]);

    if(!visible) {
        return false;
    }

    return (
        <div className = "scrollToTop" onClick = {scrollToTop}>
            <FaArrowCircleUp className="topIcon"/>
        </div>
    );
}

export default ScrollToTopHook;