import React from 'react';
import SectionWrapper from '../SectionWrapper';
import Logo from "../../Assets/Images/desktop-logo.png";
import './style.css';


const Nav = (props) => {
    return (
        <SectionWrapper>
            <header className="header">
                <div className="navbar">
                    <a href="/dashboard" className="logo-icon">
                        <img src={Logo} alt="Door to Dumps Logo" className="logo" />
                        <span className="fw-bold fs-16 fs-lg-22 ls-1 text-color-pri-blue ml-10">DOOR TO DUMPS</span>
                        {/* <span className="fw-bold fs-22 ls-1 text-color-pri-blue ml-10">DOOR TO DUMPS</span> */}
                    </a>
                    <ul className="navbar-header">
                        <li className="navbar__list-item">
                            <a className="navbar__link fs-22" href="/">Home</a>
                        </li>
                        <li className="navbar__list-item">
                            <a className="navbar__link fs-22" href="/">About us</a>
                        </li>
                        <li className="navbar__list-item">
                            <a className="navbar__link fs-22" href="/">Team</a>
                        </li>
                        <li className="navbar__list-item">
                            <a className="navbar__link fs-22" href="/">Login</a>
                        </li>
                    </ul>

                    {/* <div className={`menu-toggle ${props.isClicked ? "active" : ""}`} onClick={props.handleMenu}> */}
                    <div className={`menu-toggle ${props.isMenuClicked? "active" : ""}`} onClick={props.handleMenu}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </div>
                <ul className={`navbar-mobile ${props.isMenuClicked ? 'active': ''}`}>
                        <li className="navbar__list-item">
                            <a className="navbar__link fs-24 fw-bold" href="/">Home</a>
                        </li>
                        <li className="navbar__list-item">
                            <a className="navbar__link fs-24 fw-bold" href="/">About us</a>
                        </li>
                        <li className="navbar__list-item">
                            <a className="navbar__link fs-24 fw-bold" href="/">Team</a>
                        </li>
                        <li className="navbar__list-item">
                            <a className="navbar__link fs-24 fw-bold" href="/">Login</a>
                        </li>
                    </ul>
            </header>
        </SectionWrapper>
    );
};

export default Nav;