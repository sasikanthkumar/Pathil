import React from 'react';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import AppBarTabsP from './app-bar-tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
  pathilLogoAvatar: {
    backgroundColor:'transparent',
    height:'80px',
    width:'80px',
  },
  appBarStyle:{
    height:'6.25em',
    backgroundColor:'#fff',
  },
};


class AppBarP extends React.Component{
  render(){
    return (
      <MuiThemeProvider>
        <AppBar iconElementLeft = {<Avatar src="images/pathil_logo_black.png" style = {styles.pathilLogoAvatar} />}
                iconElementRight={<AppBarTabsP/>}
                style = {styles.appBarStyle}/>
      </MuiThemeProvider>
    );
  }
}

export default AppBarP;
