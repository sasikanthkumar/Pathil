import React from 'react';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import AppBarTabsP from './app-bar-tabs';
import ImageCarousel from './carousel';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AboutUS from './about-us';

const styles = {
  pathilLogoAvatar: {
    backgroundColor:'transparent',
    height:'80px',
    width:'80px',
  },
  appBarStyle:{
    height:'6.25em',
    backgroundColor:'white',
    position:'fixed',
  },
  aboutUsStyle:{
    marginLeft: '15%',
    marginRight:'15%',
    marginTop:'40px',
    marginBottom:'20px',
  },
};


class AppBarP extends React.Component{
  render(){
    return (
      <div >
        <div >
          <MuiThemeProvider>
            <AppBar iconElementLeft = {<Avatar src="images/pathil_logo_black.png" style = {styles.pathilLogoAvatar} />}
                    iconElementRight={<AppBarTabsP/>}
                    style = {styles.appBarStyle}/>
          </MuiThemeProvider>
        </div>
        <div >
          <ImageCarousel />
        </div>
        <div style = {styles.aboutUsStyle}>
          <AboutUS />
        </div>
      </div>
    );
  }
}

export default AppBarP;
