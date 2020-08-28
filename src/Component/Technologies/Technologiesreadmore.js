import React from 'react';
import PopupModal from '../PopupModal/PopupModal';

const Technologiesreadmore = (props) => {
    return (
        <PopupModal isClicked={props.isClicked}>
            <div className="cardHeadings mb-20">
                <h1 className="sectionHeading fw-300 ">Waste & recycling technology for households and agencies
</h1>
                <button type="reset" className="close-button fs-40" onClick={props.click}>&times;</button>
            </div>
            <p className="sectionContent fs-16 mb-20 fw-300 ls-1 lh-1-33">
            At Door to Dumps, we believe technology can do much in improving municipal solid waste collection services, building efficient waste collection and segregation systems and add value to the existing system without replacing it.
                </p>
            <p className="sectionContent fs-16 mb-20 fw-300 ls-1 lh-1-33">
            The Door to Dumps customer mobile app allows individual households & small businesses to manage waste collection services from a handy smartphone. We provide Regular collections, Online Payment mode for user charge collection, Calendar for collection timings for customer convenience, Alarm System for customers when collection vehicle is in vicinity, App based Complaints Redressal System for Customers along with creating a bridge between the customer and the agencies (Govt/Private).
                </p>
        </PopupModal>
    );
};

export default Technologiesreadmore;