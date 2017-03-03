import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './navBar';
import Slider from './slider';
import AboutUs from './aboutUs';
import WhatWeDo from './whatWeDo';
import WhyPathil from './whyPathil';
import Gallery from './gallery';
import ContactUs from './contactUs';

class Main extends React.Component{
  render(){
    return(
      <div>
        <NavBar/>
        <Slider/>
        <AboutUs/>
        <WhatWeDo/>
        <WhyPathil/>
        <Gallery/>
        <ContactUs/>
      </div>
    );
  }
}


export default Main;
