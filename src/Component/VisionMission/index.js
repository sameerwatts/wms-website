import React from 'react';
import "./style.css";
import visionImg from "../../assets/Images/vision.svg";
import missionImg from "../../assets/Images/mission.svg";

const VisionMission = () => {
    return (
        <section className="visionmissionSection">
            <div className="visionImageContainer">
                <img src={visionImg} alt="" />
                <h1 className="visionHeading fw-300 fs-40 ls-1 lh-1-33">VISION</h1>
                <p className="visionContent fs-16 mb-20 fw-300 ls-1 lh-1-33">To maximize resource value, while minimizing - and even eliminating - environmental impact so that both our economy and our environment can thrive.</p>
            </div>
            <div className="missionImageContainer">
                <img src={missionImg} alt="" />
                <h1 className="missionHeading fw-300 fs-40 ls-1 lh-1-33">MISSION</h1>
                <p className="missionContent fs-16 mb-20 fw-300 ls-1 lh-1-33">With you, we create and deliver business and technology solutions to disrupt the existing inefficient process and bring transparency, traceability across the waste value chain.</p>
            </div>
        </section>
    );
};

export default VisionMission;