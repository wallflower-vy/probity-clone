import './index.css';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Aos from "aos";


const Website =()=>{
    useEffect(()=>{
        Aos.init({})
    }, [])
    return (
        <div className ="website-box" data-aos="fade-up" data-aos-duration="1000">
            <h4>Website 38 Web Application</h4>
            <p className ="cross-text">Become a full stack web engineer in few months
             by learning to create data driven and enterprise level web applications: 
            write the code and control the flow yourself! Build elegant and responsive website the smart way.</p>
            
            
        </div>
    )
}

export default Website;