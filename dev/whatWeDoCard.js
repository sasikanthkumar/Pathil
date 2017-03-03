import React from 'react';
import ReactDOM from 'react-dom';


class WhatWeDoCard extends React.Component{
  render(){
    return(
      <div className = "row">
        <div className = "col s2"></div>
        <div className="col s8">
        <div className="card horizontal whatWeDoShadowStyle">
          <div className="card-image">
            <img src={this.props.imageContent} />
          </div>
          <div className="card-stacked">
            <div className="card-content">
              {this.props.content}
            </div>
          </div>
        </div>
        </div>
        <div className = "col s2"></div>
      </div>
    )
  }
}


export default WhatWeDoCard;
