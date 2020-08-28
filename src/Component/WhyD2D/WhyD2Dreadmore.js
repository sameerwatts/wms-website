import React from 'react';
import PopupModal from '../PopupModal/PopupModal';

const WhyD2Dreadmore = (props) => {
    return (
        <PopupModal isClicked={props.isClicked}>
            <div className="cardHeadings mb-20">
                <h1 className="sectionHeading fw-300 ">Why Door to Dumps?</h1>
                <button type="reset" className="close-button fs-40" onClick={props.click}>&times;</button>
            </div>
            <p className="sectionContent fs-16 mb-20 fw-300 ls-1 lh-1-33">
                India is urbanizing rapidly and its 1.3 billion citizens are currently generating 277.1 million tonnes of Municipal Solid Waste annually which is anticipated to grow at 7-7.5% and reach ~400 million tonnes by 2025
                </p>
            <p className="sectionContent fs-16 mb-20 fw-300 ls-1 lh-1-33">
                One alarming spillover of India’s remarkable growth story is the fact that its growing population, coupled with rapid urbanization and industrialization, has resulted in spiraling levels of civic and industrial waste being generated. Although an average person generates 0.75 kg of solid waste per day, the volume is huge compared to the population of India.
                </p>
            <p className="sectionContent fs-16 mb-20 fw-300 ls-1 lh-1-33">
                With such rapid urbanization in many Indian cities, it’ll be seamlessly impossible for waste collectors in India to service the growing population effectively without better technology tools.
                </p>
        </PopupModal>
    );
};

export default WhyD2Dreadmore;