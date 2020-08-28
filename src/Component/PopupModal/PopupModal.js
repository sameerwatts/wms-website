import React from 'react';
import "./style.css";

const PopupModal = (props) => {
    return (
        <div className={`overlay ${props.isClicked ? "active" : ""}`} >
            <div className="modal-container">
                {props.children}
            </div>
        </div>
    );
};

export default PopupModal;