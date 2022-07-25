import './index.css';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Aos from "aos";


const CrossPlatform = () => {
    useEffect(()=>{
        Aos.init({})
    }, [])
    return (
        <div className="cross-platform" data-aos="fade-up" data-aos-duration="800">
            <h4>Cross-Platform Mobile Apps</h4>
            <p className="cross-text">Learn to builld mobile applications for Android and IOS devices using latest technologies. Create powerful UI 
            design that generate high rate UX, easily consume various APIs, and deploy your apps in style.</p>
        </div>
    )
}
export default CrossPlatform;