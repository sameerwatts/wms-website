import React, {useState} from 'react';
import Button from '../Buttons/Button';
import './style.css';
import recycleImg from "../../assets/Images/recycle.svg";
import Technologiesreadmore from './Technologiesreadmore';

const Technologies = props => {
    const [clicked, isClicked] = useState(false);
    const readmoreHandler = () => {
        isClicked(!clicked);
    }
    return (
        <div className="outerSection">
            <h2>"Re-imagine your waste management value chain"</h2>
        <section className="TechnologiesSection">
            <div className="recycleImageContainer">
                <img src={recycleImg} alt="Door to Dumps in Mobile"/>
            </div>
            <div className="TechnologiesWrapper">
                <h1 className="sectionHeading fw-300 mb-20 fs-24 fs-lg-32">Waste & recycling technology for households and agencies</h1>
                <p className="sectionContent fs-16 mb-20 fw-300 ls-1 lh-1-33">
                At Door to Dumps, we believe technology can do much in improving municipal solid waste collection services, building efficient waste collection and segregation systems and add value to the existing system without replacing it.
                </p>
                
                <Button btnText="Read More" className="buttonTextWhite bg-blue" click={readmoreHandler}/>
            </div>
            <Technologiesreadmore isClicked={clicked} click={readmoreHandler}/>
        </section>
        </div>
    );
};

export default Technologies;