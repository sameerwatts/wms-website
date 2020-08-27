import React, { Component } from 'react';
import './App.css';
import Nav from '../Component/Nav';
import '../Assets/typography.css';
import HeroSlider from '../Component/Slider';

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
        <HeroSlider alignment='right-to-left'/>
      </div>
    );
  }
}

export default App;