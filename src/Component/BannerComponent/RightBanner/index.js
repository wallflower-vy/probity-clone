import Card from './Card';
import './index.css';
import {featureFour, featureOne, featureThree, featureTwo} from "../../../lang/HomeLang";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';


const RightBanner=()=>{
    useEffect(()=>{
        Aos.init({})
    }, [])

    return(
        <div className ="right-banner-box" data-aos="fade-up" data-aos-duration="1000"  >
            <Card className='four-card' margin={15} data-aos="fade-up-right" data-aos-duration="1500" >
                <span>{featureOne.icon}</span>
                <h5 className='four'>{featureOne.title}</h5>
                <p className ="four-card-text">{featureOne.text}</p>
            </Card>
            <Card className='four-card' margin={31}  >
                <span> {featureTwo.icon}</span>
                <h5  className='four'>{featureTwo.title}</h5>
                <p className ="four-card-text">{ featureTwo.text}</p>
            
            </Card>
            <Card className='four-card' margin={15} >
                <span >{featureThree.icon}</span>
                <h5  className='four'>{featureThree.title}</h5>
                <p className ="four-card-text">{ featureThree.text}</p>
            </Card> 
            <Card className='four-card' margin={31} >
            <span>{featureFour.icon}</span>
                <h5  className='four'>{featureFour.title}</h5>
                <p className ="four-card-text">{ featureFour.text}</p>
            
            </Card>
        </div>
    )
}
export default RightBanner;