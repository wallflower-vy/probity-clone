import './index.css';
import banner from '../../../Images/landing-3.png';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Aos from "aos";

const DeskImage =()=>{
    useEffect(()=>{
        Aos.init({})
    }, [])
    return(
        <div className ="deskimage" data-aos="fade-up" data-aos-duration="1000">
            <img src={banner} alt="platform-image" className="platform-image" />
        </div>
    )
}
export default DeskImage;