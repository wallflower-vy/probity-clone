import './index.css';
import banner from '../../../Images/landing-2.png';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Aos from "aos";


const WebImage = () => {
    useEffect(()=>{
        Aos.init({})
    }, [])
    return (
        <div className="webimage-box" data-aos="fade-up" data-aos-duration="1000">
             <img src={banner} alt="webimage" className="webimage" />
        </div>
    )
}
export default WebImage;