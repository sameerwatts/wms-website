import React from 'react';
import Logo from "../../assets/Images/desktop-logo.png";
import './style.css';


const Nav = (props) => {
    return (
        <>
            <section className="navSection">
                <header className="navbar">
                    <a href="/dashboard" className="logo-icon">
                        <img src={Logo} alt="Door to Dumps Logo" className="logo" />
                        <span className="fw-bold fs-16 fs-lg-22 ls-1 text-color-pri-blue ml-10">DOOR TO DUMPS</span>
                    </a>
                    <ul className="navbar-header">
                        <li className="navbar__list-item">
                            <a className="navbar__link fs-22" href="#">Home</a>
                        </li>
                        <li className="navbar__list-item">
                            <a className="navbar__link fs-22" href="#about">About us</a>
                        </li>
                        <li className="navbar__list-item">
                            <a className="navbar__link fs-22" href="#features">Feature</a>
                        </li>
                        <li className="navbar__list-item">
                            <a className="navbar__link fs-22" href="/">Login</a>
                        </li>
                    </ul>

                    <div className={`menu-toggle ${props.isMenuClicked ? "active" : ""}`} onClick={props.handleMenu}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>

                </header>
            </section>
            <div className={`navbar-mobile-container${props.isMenuClicked ? ' active' : ''}`}>
                <ul className={`navbar-mobile${props.isMenuClicked ? ' active' : ''}`}>
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
            </div>
        </>
    );
};

export default Nav;