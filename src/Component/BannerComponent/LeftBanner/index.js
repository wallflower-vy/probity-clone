import './index.css';
import {FaUserCircle} from "react-icons/fa";
import {FiKey} from "react-icons/fi";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
// import { AOS } from 'aos';

const LeftBanner = () => {
    useEffect(()=>{
        Aos.init({})
    }, [])

    
    return (
        <div data-aos="fade-up-right" data-aos-duration="1000"  className="left-banner-box">
            
            <h1 data-aos="fade-up" data-aos-duration="1000" className ="heading">HowIt'sDoneInReality</h1>
            <p data-aos="fade-up" data-aos-duration="1000" className ="sub-heading">We teach the art of programming to your heart</p>
            <p className ="textone">Become a fullstack software engr. that writes fast and smart algorithm to solve real life problem using modern technologies.</p>
        <button data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear"  className ="signup-btn"><FaUserCircle /> sign up</button>
        <button data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear"  className ="learn-btn">< FiKey/>Learn more</button>
                
            
        </div>
    )
}
export default LeftBanner;