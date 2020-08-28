import React, {useState} from 'react';
import Button from '../Buttons/Button';
import './style.css';
import mobileImg from "../../Assets/Images/mobile.svg";
import WhyD2Dreadmore from './WhyD2Dreadmore';

const WhyD2D = props => {
    const [clicked, isClicked] = useState(false);
    const readmoreHandler = () => {
        isClicked(!clicked);
    }
    return (
        <section className="whyD2DSection">
            <div className="whyD2DWrapper">
                <h1 className="sectionHeading fw-300 mb-20  fs-24 fs-lg-32">Why Door to Dumps?</h1>
                <p className="sectionContent fs-16 mb-20 fw-300 ls-1 lh-1-33">
                India is urbanizing rapidly and its 1.3 billion citizens are currently generating 277.1 million tonnes of Municipal Solid Waste annually which is anticipated to grow at 7-7.5% and reach ~400 million tonnes by 2025
                </p>
                <p className ='sectionContent fs-16 mb-20 fw-300 ls-1 lh-1-33'>One alarming spillover of India’s remarkable growth story is the fact that its growing population, coupled with rapid urbanization and industrialization, has resulted in spiraling levels of civic and industrial waste being generated. Although an average person generates 0.75 kg of solid waste per day, the volume is huge compared to the population of India.</p>
                <Button btnText="Read More" className="buttonTextWhite bg-blue" click={readmoreHandler}/>
            </div>
            <div className="mobileImageContainer">
                <img src={mobileImg} alt="Door to Dumps in Mobile"/>
            </div>
            <WhyD2Dreadmore isClicked={clicked} click={readmoreHandler}/>
        </section>
    );
};

export default WhyD2D;