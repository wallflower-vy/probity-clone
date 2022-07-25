import './index.css';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Aos from "aos";

const Desktop =()=>{
    useEffect(()=>{
        Aos.init({})
    }, [])
    return (
        <div className ="desktop" data-aos="fade-up" data-aos-duration="1000" >
            <h4>Desktop Application</h4>
            <p className ="cross-text">Our program offers you the chance to learn
             how to build executable application for various operating system and
             create powerful GUI using standard frameworks while following good practice.</p>
        </div>
    )
}
export default Desktop;