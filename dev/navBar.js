import React from 'react';
import ReactDOM from 'react-dom';
import scrollToElement from 'scroll-to-element';

class NavBar extends React.Component{

  constructor(props) {
    super(props);
    this.handleHomeClick = this.handleHomeClick.bind(this);
    this.handleAboutUsClick = this.handleAboutUsClick.bind(this);
    this.handleWhatWeDoClick = this.handleWhatWeDoClick.bind(this);
    this.handleWhyPathilClick = this.handleWhyPathilClick.bind(this);
    this.handleGalleryClick = this.handleGalleryClick.bind(this);
    this.handleContactClick = this.handleContactClick.bind(this);
  }

  handleHomeClick(e){
    scrollToElement('#homeScroll',{
      offset: -80,
    });
  }

  handleAboutUsClick(e) {
    scrollToElement('#aboutUsScroll',{
      offset: -80,
    });
  }

  handleWhatWeDoClick(e) {
    scrollToElement('#whatWeDoScroll',{
      offset: -100,
    });
  }

  handleWhyPathilClick(e) {
    scrollToElement('#whyPathilScroll',{
      offset: -100,
    });
  }

  handleGalleryClick(e) {
    scrollToElement('#galleryScroll',{
      offset: -80,
    });
  }

  handleContactClick(e) {
    scrollToElement('#contactUsScroll',{
      offset: -80,
    });
  }


  render(){
    return(
      <div className="navbar-fixed">
        <nav className = "navBarTransparent">
          <div className="nav-wrapper navBarBackground">
            <a href="#" className="brand-logo"> <img className="responsive-img navBarLogo" src="./images/pathil_logo.png" /></a>
            <ul id="nav-mobile" className="right marginRightNavBar">
              <li className = "listStyleTypeNone"><a href="#" onClick={this.handleHomeClick}>Home</a></li>
              <li className = "listStyleTypeNone"><a href="#" onClick={this.handleAboutUsClick}>About Us</a></li>
              <li className = "listStyleTypeNone"><a href="#" onClick={this.handleWhatWeDoClick}>What We Do</a></li>
              <li className = "listStyleTypeNone"><a href="#" onClick={this.handleWhyPathilClick}>Why Pathil</a></li>
              <li className = "listStyleTypeNone"><a href="#" onClick={this.handleGalleryClick}>Gallery</a></li>
              <li className = "listStyleTypeNone"><a href="#" onClick={this.handleContactClick}>Contact</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
