import React, { Component } from 'react';
import './App.css';
import Nav from '../Component/Nav';
import '../assets/typography.css';
import HeroSlider from '../Component/Slider';
import WhyD2D from '../Component/WhyD2D';
import Technologies from '../Component/Technologies';
import VisionMission from '../Component/VisionMission';
import Footer from '../Component/Footer';
import Features from '../Component/Features';

class App extends Component {
  state = {
    isMenuClicked: false,
  }
  menuHandler = () => {
    this.setState(prevState => ({ isMenuClicked: !prevState.isMenuClicked }))
  }
  render() {
    return (
      <div className="App">
        <Nav handleMenu={this.menuHandler} isMenuClicked={this.state.isMenuClicked} />
        <HeroSlider />
        <WhyD2D/>
        <Features />
        <Technologies />
        <VisionMission />
        <Footer />
      </div>
    );
  }
}

export default App;