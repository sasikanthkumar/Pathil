import React from 'react';
import ReactDOM from 'react-dom';


class Slider extends React.Component{
  render(){
    return(
      <div>

      <div className="slider sliderFullscreen fullscreen" id = "homeScroll">

        <ul className="slides">
          <li>
            <img src="./images/one.jpg" />
            <div className="caption center-align">
              <h4>HERITAGE WALKS</h4>
            </div>
            <div className = "maskStyle"></div>

          </li>
          <li>
            <img src="./images/two.jpg" />
            <div className="caption center-align">
              <h4>NATURE TRAILS</h4>
            </div>
            <div className = "maskStyle"></div>

          </li>
          <li>
            <img src="./images/three.jpg" />
            <div className="caption center-align">
              <h4>CAMPING</h4>
            </div>
            <div className = "maskStyle"></div>

          </li>
          <li>
            <img src="./images/four.jpg" />
            <div className="caption center-align">
              <h4>CORPORATE OUTBOUND / TEAM BUILDING</h4>
            </div>
            <div className = "maskStyle"></div>

          </li>
          <li>
            <img src="./images/five.jpg" />
            <div className="caption center-align">
              <h4>MUSEUM RESEARCH AND DEVELOPMENT</h4>
            </div>
            <div className = "maskStyle"></div>

          </li>
          <li>
            <img src="./images/six.jpg" />
            <div className="caption center-align">
              <h4>SCHOOLS AND COLLEGES</h4>
            </div>
            <div className = "maskStyle"></div>

          </li>

        </ul>
      </div>
      </div>
    );
  }
}

export default Slider;
