import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavSection from "./molecules/NavSection";
import Slider from "./molecules/Slider";
import Jumbotron from "./molecules/Jumbotron";
import BriefInfo from "./molecules/BriefInfo";
import ProductionSection from "./atoms/DoubleSection/ProductionSection";
import Connect from './molecules/Connect';
import Footer from './molecules/Footer';
import Home from './templates/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home/>
        {/* <NavSection/> */}
        {/* <Slider/> */}
        {/*<Jumbotron/>*/}
         {/*<BriefInfo/>*/}
         {/*<ProductionSection/>*/}
         {/*<Connect/>*/}
         {/*<Footer/>*/}
      </div>
    );
  }
}

export default App;
