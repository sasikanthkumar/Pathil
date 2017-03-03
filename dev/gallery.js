import React from 'react';
import ReactDOM from 'react-dom';

class Gallery extends React.Component{
  render(){
    return(
      <div>
      <div className = "row cardStyle3" id = "galleryScroll">
        <div className = "col s1"></div>
        <div className = "col s10 cardHeaderCenter">
          <p className = "cardHeaderStyle">Gallery</p>
        </div>
        <div className = "col s1"></div>

        <div className = "row">
          <div className = "col s12 galleryBackground">
            <div className="carousel">
              <a className="carousel-item" href="#one!"><img   src="./images/one.jpg"/></a>
              <a className="carousel-item" href="#two!"><img   src="./images/two.jpg"/></a>
              <a className="carousel-item" href="#three!"><img src="./images/three.jpg"/></a>
              <a className="carousel-item" href="#four!"><img  src="./images/four.jpg"/></a>
              <a className="carousel-item" href="#five!"><img  src="./images/five.jpg"/></a>
            </div>
          </div>
        </div>
      </div>

      </div>
    )
  }
}

export default Gallery;
