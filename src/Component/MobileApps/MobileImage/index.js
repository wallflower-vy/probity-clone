import './index.css';
import banner from '../../../Images/landing-1.png';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Aos from "aos";


const MobileImage =()=>{
    useEffect(()=>{
        Aos.init({})
    }, [])
    return (
        <div className ="mobileimage-box" data-aos="fade-up" data-aos-duration="800" >
             <img src={banner} alt="platform-image" className="platform-image" />
            
        </div>
    )
}

export default MobileImage;