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
                <h1 className="sectionHeading fw-300 mb-20 fs-32">Why Door to Dumps?</h1>
                <p className="sectionContent fs-16 mb-20 fw-300 ls-1 lh-1-33">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                
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