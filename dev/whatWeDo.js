import React from 'react';
import ReactDOM from 'react-dom';
import WhatWeDoCard from './whatWeDoCard';

const contentArray = [
  <div><p>A variety of heritage walks is offered by us, customized according to the liking or need of the audience. Some of our themed walks include</p>
                  <ul className = "listStyle">
										<li style={{listStyleType:"disc"}}><p>The Old Pune City Walk</p></li>
										<li style={{listStyleType:"disc"}}><p>The Pune Bazar And Handicrafts Walk</p></li>
										<li style={{listStyleType:"disc"}}><p>The Hidden Temples Walk</p></li>
										<li style={{listStyleType:"disc"}}><p>Pune Along The River Walk</p></li>
										<li style={{listStyleType:"disc"}}><p>The Cult-N-Culinary Walk</p></li>
										<li style={{listStyleType:"disc"}}><p>The British East Pune Walk</p></li>
										<li style={{listStyleType:"disc"}}><p>The Pune Peshwai Walk</p></li>
									</ul><p>And many more....</p></div>,
  <div><p>The term nature comprises of many aspects like trees, birds, environmental wonders etc. We organize specialized walks for each of these aspects, some of them include</p>
                  <ul>
										<li style={{listStyleType:"disc"}}>Campus Tree Walks</li>
										<li style={{listStyleType:"disc"}}>Native Plants Pf The City Walk</li>
										<li style={{listStyleType:"disc"}}>Local Birds Trail</li>
										<li style={{listStyleType:"disc"}}>Migratory Birds Trail</li>
										<li style={{listStyleType:"disc"}}>Spider Walks</li>
										<li style={{listStyleType:"disc"}}>Butterfly Trails</li>
										<li style={{listStyleType:"disc"}}>Sacred Groves Trail</li>
									</ul><p>And many more....</p></div>,
  <div><p>Similar to walks and trails we also have a specialized camping vertical. Here too , the camps have specific themes, where everything from the activities to the food is matched accordingly.Some of the camps organized by us are </p>
              <ul>
                <li style={{listStyleType:"disc"}}>Art Camps</li>
                <li style={{listStyleType:"disc"}}>Adventure Camps</li>
                <li style={{listStyleType:"disc"}}>Beach camps</li>
                <li style={{listStyleType:"disc"}}>Heritage camps</li>
                <li style={{listStyleType:"disc"}}>Educative camps</li>
                <li style={{listStyleType:"disc"}}>Farm camps</li>
                <li style={{listStyleType:"disc"}}>Ladies camps</li>
              </ul>
  </div>,
  <div><p>One of our major clientele includes the corporates for their team building exercises, offsite training, trekking, adventure activities, cave explorations, treasure hunts, and city tours for foreign clients etc. We provide end-to-end solutions including training facilitators, expertise etc.</p></div>,
  <div><p>Museums are an integral part of a city’s heritage.<br></br> The story of any place is most effectively told via a museum. We at PATHIL make sure it is done in the most appropriate, aesthetic, interactive and technically advanced ways. Be it an old heritage mansion or a town museum, we ensure a revamp: culturally, aesthetically and technically with our team of specialized experts in Museology.</p></div>,
  <div><p>We have an array of options designed especially for schools & educational institutions. We believe that it is important to inculcate the values of conserving our heritage and educating the youth about the same. Thus, we have come up with unique History & Nature Clubs for students that includes classroom sessions and ﬁeld trips with experts.</p></div>,


];
const imagesArray = [
"./images/one.jpg",
"./images/two.jpg",
"./images/three.jpg",
"./images/four.jpg",
"./images/five.jpg",
"./images/six.jpg",
];

class WhatWeDo extends React.Component{

  render(){
    return(
      <div className = "row cardStyle3" id = "whatWeDoScroll">
        <div className = "col s1"></div>
        <div className = "col s10 cardHeaderCenter">
          <p className = "cardHeaderStyle">What We Do</p>
        </div>
        <div className = "col s1"></div>

        <div className = "col s12 tabsPaddingStyle">
          <ul className="tabs tabs-fixed-width">
            <li className="tab col s2 tabHeightStyle"><a className="active textToNextRow" href="#test1"><div className = "row"><img className="responsive-img navBarLogo" src="./images/001-university.svg"/><figcaption> HERITAGE WALKS </figcaption></div> </a></li>
            <li className="tab col s2 tabHeightStyle"><a className="textToNextRow" href="#test2"><div className = "row"><img className="responsive-img navBarLogo" src="./images/002-museum.svg"/><figcaption>NATURE TRAILS</figcaption></div></a></li>
            <li className="tab col s2 tabHeightStyle"><a className="textToNextRow" href="#test3"><div className = "row"><img className="responsive-img navBarLogo" src="./images/003-hierarchical-structure.svg"/><figcaption>CAMPING</figcaption></div></a></li>
            <li className="tab col s2 tabHeightStyle"><a className="textToNextRow" href="#test4"><div className = "row"><img className="responsive-img navBarLogo" src="./images/004-campfire.svg"/><figcaption>CORPORATE OUTBOUND/TEAM BUILDING</figcaption></div></a></li>
            <li className="tab col s2 tabHeightStyle"><a className="textToNextRow" href="#test5"><div className = "row"><img className="responsive-img navBarLogo" src="./images/005-palm-trees.svg"/><figcaption>MUSEUM RESEARCH AND DEVELOPMENT</figcaption></div></a></li>
            <li className="tab col s2 tabHeightStyle"><a className="textToNextRow" href="#test6"><div className = "row"><img className="responsive-img navBarLogo" src="./images/006-building.svg"/><figcaption>SCHOOLS AND COLLEGES</figcaption></div></a></li>
          </ul>
        </div>
        <div id="test1" className="col s12"><WhatWeDoCard content = {contentArray[0]} imageContent = {imagesArray[0]}/></div>
        <div id="test2" className="col s12"><WhatWeDoCard content = {contentArray[1]} imageContent = {imagesArray[1]}/></div>
        <div id="test3" className="col s12"><WhatWeDoCard content = {contentArray[2]} imageContent = {imagesArray[2]}/></div>
        <div id="test4" className="col s12"><WhatWeDoCard content = {contentArray[3]} imageContent = {imagesArray[3]}/></div>
        <div id="test5" className="col s12"><WhatWeDoCard content = {contentArray[4]} imageContent = {imagesArray[4]}/></div>
        <div id="test6" className="col s12"><WhatWeDoCard content = {contentArray[5]} imageContent = {imagesArray[5]}/></div>
      </div>
    );
  }
}

export default WhatWeDo;
