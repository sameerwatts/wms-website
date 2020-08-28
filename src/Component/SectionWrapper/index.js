import React from 'react';
import './style.css';

const SectionWrapper = (props) => {
    return (
        <section className={`sectionWrapper ${props.outerSectionClass && props.outerSectionClass} ` }>
            <div className={`sectionInnerWrapper ${props.alignment ? props.alignment: ''}`}>
            {props.children}
            </div>
        </section>
    );
};

export default SectionWrapper;