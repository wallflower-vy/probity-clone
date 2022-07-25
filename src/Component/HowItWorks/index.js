import './index.css';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Aos from "aos";

const HowItWorks =()=>{
    useEffect(()=>{
        Aos.init({})
    }, [])
    return(
        <div className="howit-works" >
            <h2 className="hitworks" data-aos="fade-up" data-aos-duration="1500">How it Works</h2>
            <p data-aos="fade-up" data-aos-duration="1500">Follow these process to get started</p>
        </div>
    )
}
export default HowItWorks;