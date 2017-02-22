import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';


const styles = {
  tabsStyle:{
    height:'5.25em',
    backgroundColor:'white',
  },
  tabStyle:{
    height:'5.25em',
    color:'#686868',
  },
  inkBarStyles:{
    backgroundColor:'blue',
  },
  tabButtonStyle:{
    background:'white',

  },
  tabButtonStyle1:{
    background:'white',
    marginLeft:'8px',
    marginRight:'8px',
  },
  tabButtonStyle2:{
    background:'white',
    paddingLeft:'20px',
    paddingRight:'20px',
    marginRight:'20px',
    marginLeft:'20px',
  },
  tabButtonStyle3:{
    background:'white',
    paddingLeft:'20px',
    paddingRight:'20px',
    marginRight:'20px',
    marginLeft:'20px',
  },
  tabButtonStyle4:{
    background:'white',

  },
  tabButtonStyle5:{
    background:'white',

  },
  tabItemContainerStyles:{
    backgroundColor:'white',
  },
  contentContainerStyles:{
  },
  btnStyle:{
    height:'6.25em',

  },
  divStyle:{
    marginTop:'-8px',
  },
};

class AppBarTabsP extends React.Component{
  render(){
    return(
      <MuiThemeProvider>
      {/**
        <Tabs style = {styles.tabsStyle} inkBarStyle = {styles.inkBarStyles} tabItemContainerStyle = {styles.tabItemContainerStyles} contentContainerStyle = {styles.contentContainerStyles}>
          <Tab style = {styles.tabStyle} buttonStyle = {styles.tabButtonStyle} label = "Home"/>
          <Tab style = {styles.tabStyle} buttonStyle = {styles.tabButtonStyle1} label = "About Us"/>
          <Tab style = {styles.tabStyle} buttonStyle = {styles.tabButtonStyle2} label = "What We Do"/>
          <Tab style = {styles.tabStyle} buttonStyle = {styles.tabButtonStyle3} label = "Why Pathil"/>
          <Tab style = {styles.tabStyle} buttonStyle = {styles.tabButtonStyle4} label = "Gallery"/>
          <Tab style = {styles.tabStyle} buttonStyle = {styles.tabButtonStyle5} label = "Contact"/>
        </Tabs>
      **/}
      <div style = {styles.divStyle}>
        <FlatButton  style = {styles.btnStyle} label = "Home"/>
        <FlatButton  style = {styles.btnStyle} label = "About Us"/>
        <FlatButton  style = {styles.btnStyle} label = "What We Do"/>
        <FlatButton  style = {styles.btnStyle} label = "Why Pathil"/>
        <FlatButton  style = {styles.btnStyle} label = "Gallery"/>
        <FlatButton  style = {styles.btnStyle} label = "Contact"/>

  </div>
      </MuiThemeProvider>
    );
  }
}

export default AppBarTabsP;
