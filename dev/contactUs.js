import React from 'react';
import ReactDOM from 'react-dom';


class ContactUs extends React.Component{
  render(){
    return(
      <div className = "row" id = "contactUsScroll">
        <div className = "col s2">
        </div>
        <div className = "col s4">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Address</span>
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
          </div>
        </div>
        <div className = "col s4">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Connect</span>
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
          </div>
        </div>
        <div className = "col s2">
        </div>

      </div>
    );
  }
}


export default ContactUs;
