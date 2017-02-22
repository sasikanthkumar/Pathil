import React from 'react';
import {Card, CardActions, CardHeader, CardText, CardTitle} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const styles = {
  cardTitleStyle: {
    textAlign:'center',
    top:'36%',
    textTransform:'capitalize',
    fontWeight:'500',
    fontFamily: 'Roboto',
    color:'#fff',
  },
  cardTitleDivStyle:{
    top:'36%',
  },
  cardTextStyle:{
    textAlign:'center',
    marginLeft: '21%',
    marginRight:'21%',
    color:'#fff',
    fontFamily: 'Roboto',
    fontWeight:'400',
    fontSize:'18px',
    paddingTop:'34px',
    paddingBottom:'34px',
  },
  cardStyle:{
    backgroundColor:'#3f51b5',
  },
};

class AboutUS extends React.Component{
  render(){
    return(
      <MuiThemeProvider>
        <Card style = {styles.cardStyle}>
          <div className="row">
            <div className = "col-md-6" style = {styles.cardTitleDivStyle}>
              <CardTitle title="ABOUT US" titleStyle = {styles.cardTitleStyle} style = {styles.cardTitleDivStyle}/>
            </div>
            <div className = "col-md-6">
              <CardText style = {styles.cardTextStyle}>
                PATHIL started with a motive of creating the right awareness of our rich heritage and culture. It not only includes the monuments, but also the intangible aspects like art, nature, festivals, cuisines etc .
              </CardText>
            </div>
          </div>

        </Card>
      </MuiThemeProvider>
    );
  }
}

export default AboutUS;
