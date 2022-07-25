import './index.css';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Aos from "aos";

const Technologies = () => {
    useEffect(()=>{
        Aos.init({})
    }, [])
    return (
        <div className="tech-box">
            <div className="content-box">
                <h1 className="tech-heading" data-aos="fade-up" data-aos-duration="1500">Technologies Supported</h1>
                <p className="tech-text" data-aos="fade-up-right" data-aos-duration="1550">Get the most out of the technologies our training covers.
                    learn it, understand it and apply it to solve real life problem</p>

                <button  className ="tech-btn" data-aos="fade-up" data-aos-duration="1500">Learn More</button>
                <button className="signing-btn" data-aos="fade-up" data-aos-duration="1500">Sign up</button>
            </div>


        </div>
    )
}
export default Technologies;