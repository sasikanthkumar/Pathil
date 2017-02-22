import React from 'react';
import Carousel from 're-carousel'
import IndicatorDots from 're-carousel/indicator-dots'

const styles = {
  carStyle: {
    height:'90vh',
    paddingTop:'6.25em',
  },
};

class ImageCarousel extends React.Component{
  render(){
    return(
      <Carousel auto indicator={IndicatorDots} style = {styles.carStyle}>
        <div style={{backgroundColor: 'tomato', height: '100%'}}>Frame 1</div>
        <div style={{backgroundColor: 'orange', height: '100%'}}>Frame 2</div>
        <div style={{backgroundColor: 'orchid', height: '100%'}}>Frame 3</div>
      </Carousel>
    );
  }
}


export default ImageCarousel;
