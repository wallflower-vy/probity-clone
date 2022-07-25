import './index.css';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Aos from "aos";

const Footer =()=>{
    useEffect(()=>{
        Aos.init({})
    }, [])
    return(
        <div className="footer">
            <div className ="footer-box">
             <span className="copyright"> &copy;2020 <a href ="" className ="footer-title">Probity Hub</a></span>  
            </div>
            <div className="footerlink-box">
               
                <li><a href="index.js">Home</a></li>
                <li><a href="index.js">Plan</a></li>
                <li><a href="index.js">Sign up</a></li>
            </div>
        </div>
        
    )
}
export default Footer;