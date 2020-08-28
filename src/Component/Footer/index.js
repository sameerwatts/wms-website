import React from 'react';
import './style.css';
import logo from "../../assets/Images/desktop-logo.png";
import footerImg from "../../assets/Images/footer.svg";

const Footer = (props) => {
    return (
        <section className="footerWrapper">
            <div className="footerContent">
                <div className="logoContainer">
                    <img src={logo} alt="Logo" />
                    <h6>DOOR TO DUMPS</h6>
                </div>
                <p className="content  fs-16 mb-20 fw-300 ls-1 lh-1-33">Door to Dumps is a tech waste management company that provides waste collection and segregation and smart city solutions to customers and governments. With you, we create and deliver business and technology solutions to disrupt the existing inefficient process and bring transparency, traceability across the waste value chain using our mobile app and website.</p>
            </div>
            <div className="footerForm"></div>
            <div className="footerBottomImage">
                <img src={footerImg} alt="" />
            </div>
            <div className="copyrights">
                <p className="fs-16 ls-1 lh-1-33">
                    Built with pride. All rights reserved. Door to Dumps Team | Door to Dumps is located at Shop No.1, Near Nokia Care, Hanumangarh Jn., Rajasthan
                </p>
            </div>
        </section>
    );
};

export default Footer;