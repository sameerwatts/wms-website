import React from 'react';
import globeImg from "../../assets/Images/globe@2x.png"
import paymentBulletImg from "../../assets/Images/paymentBullet.png";
// import calenderBulletImg from "../../assets/Images/";
import alarmBulletImg from "../../assets/Images/alarmBullet.png";
import complaintsBulletImg from "../../assets/Images/complaintBullet.png";
import locationBulletImg from "../../assets/Images/locationBullet.png";
import easyBulletImg from "../../assets/Images/easyBullet.png";
import attendanceBulletImg from "../../assets/Images/attendanceBullet.png";
import visibilityBulletImg from "../../assets/Images/visibilityBullet.png";
import "./style.css";

const Features = (props) => {
    return (
        <div className="featuresWrapper">
            <div className="globeWrapper desktop">
                <img className="globe" src={globeImg} alt="Globe" />
                <div className="customersFeaturesHeading">
                    <h1 className="fs-24">Features for customers</h1>
                </div>
                <div className="paymentMode">
                    <p className="fs-14 fw-300 ls-1 lh-1-33">Online payment mode for user charge collection (Subscription)</p>
                    <img src={paymentBulletImg} alt="Payment"/>
                </div>
                <div className="calender">
                    <p className="fs-14 fw-300 ls-1 lh-1-33">Calendar for collection timings for customer convenience</p>
                    <img src={paymentBulletImg} alt="Payment"/>
                </div>
                <div className="alarmSystem">
                    <p className="fs-14 fw-300 ls-1 lh-1-33">Alarm System for customers when collection vehicle is nearby</p>
                    <img src={alarmBulletImg} alt="Payment"/>
                </div>
                <div className="complaints">
                    <p className="fs-14 fw-300 ls-1 lh-1-33">App based Complaints Redressal System for Customers</p>
                    <img src={complaintsBulletImg} alt="Payment"/>
                </div>
                <div className="municipalFeaturesHeading">
                    <h1 className="fs-22">Features for Municipal Corporation</h1>
                </div>
                <div className="geoLocation">
                    <img src={locationBulletImg} alt="Payment"/>
                    <p className="fs-14 fw-300 ls-1 lh-1-33">Geo Location based Live updates of vehicle and workers</p>
                </div>
                <div className="easyWork">
                    <img src={easyBulletImg} alt="Payment"/>
                    <p className="fs-14 fw-300 ls-1 lh-1-33">Easy Work Allotment of employees via app for agency managers</p>
                </div>
                <div className="attendance">
                    <img src={attendanceBulletImg} alt="Payment"/>
                    <p className="fs-14 fw-300 ls-1 lh-1-33">Online Attendance of the employees via app</p>
                </div>
                <div className="visibility">
                    <img src={visibilityBulletImg} alt="Payment"/>
                    <p className="fs-14 fw-300 ls-1 lh-1-33">Complete visibility of end to end hierarchy around work done and waste metrices (App/portal based)</p>
                </div>
            </div>
        </div>
    );
};

export default Features;