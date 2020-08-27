import React, { Component } from 'react';
import Slider from "react-slick";
import "./style.css";
import SectionWrapper from '../SectionWrapper';
import banner1 from "../../Assets/Images/banner.svg";
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
            <SectionWrapper alignment="right-to-left">
                <div className="textSliderWrapper mb-30">
                    <header className="heading mb-40 fs-28 fs-lg-40 fw-bold">
                        Lorem ipsum dolor
                    </header>
                    <Slider
                        asNavFor={this.state.nav2}
                        ref={slider => (this.slider1 = slider)}
                        {...textSettings} {...commonSettings}>
                        <div className="mb-30">
                            <h1 className="mb-20">Lorem Ipsum</h1>
                            <p className="text-justify">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy
                        </p>
                        </div>
                        <div className="mb-30">
                            <h1 className="mb-20">Lorem Ipsum</h1>
                            <p className="text-justify">
                                text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy
                        </p>
                        </div>
                        <div className="mb-30">
                            <h1 className="mb-20">Lorem Ipsum</h1>
                            <p className="text-justify">
                                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy
                        </p>
                        </div>
                        <div className="mb-30">
                            <h1 className="mb-20">Lorem Ipsum</h1>
                            <p className="text-justify">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy
                        </p>
                        </div>
                        <div className="mb-30">
                            <h1 className="mb-20">Lorem Ipsum</h1>
                            <p className="text-justify">
                                text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy
                        </p>
                        </div>
                        <div className="mb-30">
                            <h1 className="mb-20">Lorem Ipsum</h1>
                            <p className="text-justify">
                                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy
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
            </SectionWrapper>
        );
    }
};

export default HeroSlider;