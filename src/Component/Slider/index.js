import React, { Component } from 'react';
import Slider from "react-slick";
import "./style.css";
import banner1 from "../../assets/Images/banner.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class HeroSlider extends Component {
    state = {
        nav1: null,
        nav2: null
    };
    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }
    render() {
        const commonSettings = {
            infinite: true,
            speed: 500,
            autoplaySpeed: 5000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
        }
        const textSettings = {
            dots: true,
        };
        const imageSettings = {
            fade: true,
            dots: false,
        }
        return (
            <section className=" sliderSection right-to-left">
                <div className="textSliderWrapper mb-30">
                    <Slider
                        asNavFor={this.state.nav2}
                        ref={slider => (this.slider1 = slider)}
                        {...textSettings} {...commonSettings}>
                        <div className="mb-30">
                            <h1 className="fw-300 mb-20 fs-24 fs-lg-32">Customer complaints</h1>
                            <p className="text-justify ls-1 lh-1-33">
                            App based complaints redressal system for customers
                        </p>
                        </div>
                        <div className="mb-30">
                            <h1 className="fw-300 mb-20 fs-24 fs-lg-32">Online payments</h1>
                            <p className="text-justify ls-1 lh-1-33">
                            Subscription based online payments and tracking system
                        </p>
                        </div>
                        <div className="mb-30">
                            <h1 className="fw-300 mb-20 fs-24 fs-lg-32">Process visibility</h1>
                            <p className="text-justify ls-1 lh-1-33">
                            Complete visibility of people, vehicles and process in waste supply chain
                        </p>
                        </div>
                        <div className="mb-30">
                            <h1 className="fw-300 mb-20 fs-24 fs-lg-32">Capacity building</h1>
                            <p className="text-justify ls-1 lh-1-33">
                            Training of personnel to revamp on ground execution and improve quality
                        </p>
                        </div>
                        <div className="mb-30">
                            <h1 className="mb-20">Public awareness</h1>
                            <p className="text-justify ls-1 lh-1-33">
                            Public awareness around source segregation and their participation in campaigns in the city.
                        </p>
                        </div>
                    </Slider>
                </div>
                <div className="imageSliderWrapper">
                    <Slider
                        asNavFor={this.state.nav1}
                        ref={slider => (this.slider2 = slider)}
                        {...imageSettings} {...commonSettings}>
                        <div>
                            <img src={banner1} alt="Banner one" />
                        </div>
                        <div>
                            <img src={banner1} alt="Banner one" />
                        </div>
                        <div>
                            <img src={banner1} alt="Banner one" />
                        </div>
                        <div>
                            <img src={banner1} alt="Banner one" />
                        </div>
                        <div>
                            <img src={banner1} alt="Banner one" />
                        </div>
                        <div>
                            <img src={banner1} alt="Banner one" />
                        </div>
                    </Slider>
                </div>
            </section>
        );
    }
};

export default HeroSlider;