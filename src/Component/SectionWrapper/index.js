import React from 'react';
import './style.css';

const SectionWrapper = (props) => {
    return (
        <section className="sectionWrapper">
            {props.children}
        </section>
    );
};

export default SectionWrapper;