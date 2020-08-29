import React from 'react';
import './style.css';
import logo from "../../assets/Images/desktop-logo.png";
import footerImg from "../../assets/Images/footer.svg";
import FooterForm from './FooterForm';
import locationImg from "../../assets/Images/location.svg";
import emailImg from "../../assets/Images/email.svg";
import callImg from "../../assets/Images/phone-call.svg";
import twitterImg from "../../assets/Images/twitter.svg";
import facebookImg from "../../assets/Images/facebook.svg";
import linkdinImg from "../../assets/Images/linkedin.svg";
import googleImg from "../../assets/Images/google.svg";

const Footer = (props) => {
    return (
        <section className="footerWrapper">
            <div className="footerContent">
                <div className="logoContainer">
                    <img src={logo} alt="Logo" />
                    <h6>DOOR TO DUMPS</h6>
                </div>
                <p className="content fs-16 mb-20 fw-300 ls-1 lh-1-33">Door to Dumps is a tech waste management company that provides waste collection and segregation and smart city solutions to customers and governments. With you, we create and deliver business and technology solutions to disrupt the existing inefficient process and bring transparency, traceability across the waste value chain using our mobile app and website.</p>
            </div>
            <div className="footerForm">
                <h1 className="formHeading fw-300 mb-10 fs-24 fs-lg-26">Drop us a line</h1>
                <p className="fs-16 mb-20 fw-300 ls-1 lh-1-33">We always love to hear from you. Contact us from section below or call us +91-7042846806</p>
                <FooterForm />
                <div className="contactDetail">
                    <h3 className="fw-300 mb-10 fs-24 fs-lg-26">Contacts</h3>
                    <div className="location mb-20">
                        <img src={locationImg} alt="location" />
                        <p className="fs-16 fw-300 ml-20 ls-1 lh-1-33">
                            Shop No 1. Near Nokia Care, Hanumangarh jn, Rajasthan
                        </p>
                    </div>
                    <div className="email mb-20">
                        <img src={emailImg} alt="email" />
                        <p className="fs-16 fw-300 ml-20 ls-1 lh-1-33">
                            <a href="mailto:gaurav.mittal@doortodumps.com" style={{ color: '#000000' }}>gaurav.mittal@doortodumps.com</a>
                        </p>
                    </div>
                    <div className="contact mb-20">
                        <img src={callImg} alt="phone" />
                        <p className="fs-16 fw-300 ml-20 ls-1 lh-1-33">
                            <a href="tel:+91-7042846806" style={{ color: '#000000' }}>+91-7042846806</a>
                        </p>
                    </div>
                    <div className="socialLinks">
                        <a href="/">
                            <img src={twitterImg} alt="twitter" />
                        </a>
                        <a href="/">
                            <img src={facebookImg} alt="facebook" />
                        </a>
                        <a href="/">
                            <img src={linkdinImg} alt="linkdin" />
                        </a>
                        <a href="/">
                            <img src={googleImg} alt="google" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footerBottomImage">
                <img src={footerImg} alt="footer" />
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