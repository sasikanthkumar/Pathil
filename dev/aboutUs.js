import React from 'react';
import ReactDOM from 'react-dom';


class AboutUs extends React.Component{
  render(){
    return(
      <div className = "container" id = "aboutUsScroll">
        <div className = "row aboutUsRow">

          <div className = "col s3"></div>
          <div className = "col s6">
            <div className="card white">
              <div className="cardContentStyle card-content white-text">
                <span className="card-title cardHeaderCenterAboutUs"><span className = "cardHeaderStyle spanBlack">About Us</span></span>
                <p className = "">PATHIL started with a motive of creating the right awareness of our rich heritage and culture. It not only includes the monuments, but also the intangible aspects like art, nature, festivals, cuisines etc .</p>
              </div>
            </div>
          </div>
          <div className = "col s3"/>
        </div>
      </div>
    );
  }
}

export default AboutUs;
