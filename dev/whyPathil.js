import React from 'react';
import ReactDOM from 'react-dom';


class WhyPathil extends React.Component{
  render(){
    return(
      <div className = "row cardStyle3" id = "whyPathilScroll">
        <div className = "col s1"></div>
        <div className = "col s10 cardHeaderCenter whyPathilCardHeader">
          <p className = "cardHeaderStyle">Why Pathil</p>
        </div>
        <div className = "col s1"></div>
        <div>
          <div className = "row" >
            <div className = "col s1"> </div>
            <div className="col s4">
              <div className="cardHeight card blue-grey darken-1">
                <div className="cardContentStyle card-content white-text">
                  <span className="whyPathilHeadersLeft card-title cardHeaderCenterAboutUs"><span className = "cardHeaderStyle spanBlack">Experts</span></span>
                  <p className = "colorWhite">All the activities are guided by experts from the respective ﬁelds, like History, Archaeology, Indology, Fort Architecture, Temple Art & Architecture, Botanists, Zoologists, Bird Experts, Adventure Experts etc.</p>
                </div>
              </div>
            </div>
            <div className="col s4">
              <div className="cardHeight card blue-grey darken-1">
                <div className="cardContentStyle card-content white-text">
                  <span className="whyPathilHeadersLeft card-title cardHeaderCenterAboutUs"><span className = "cardHeaderStyle spanBlack">Safety First</span></span>
                  <p className = "colorWhite">We believe that the safety of our participants is of utmost priority. Thus, all our camp facilitators & adventure activity experts are certiﬁed with First Aid Courses recommended by the District Sports Authority. All the locations of our activities are thoroughly checked with respect to all foreseen incidences and due care is taken.</p>
                </div>
              </div>
            </div>
            <div className = "col s2"> </div>
          </div>
          <div className = "row">
            <div className = "col s2"> </div>
            <div className="col s4">
              <div className="cardHeight card blue-grey darken-1">
                <div className="cardContentStyle card-content white-text">
                  <span className="whyPathilHeadersLeft card-title cardHeaderCenterAboutUs"><span className = "cardHeaderStyle spanBlack">Personal Attention</span></span>
                  <p className = "colorWhite">During our activities or Kids Camps, we make sure that quality is preferred over quantity and the adult child ratio is maintained at 1:5. We do not overcrowd our batches under any circumstances.</p>
                </div>
              </div>
            </div>
            <div className="col s4">
              <div className="cardHeight card blue-grey darken-1">
                <div className="cardContentStyle card-content white-text">
                  <span className="whyPathilHeadersLeft card-title cardHeaderCenterAboutUs"><span className = "cardHeaderStyle spanBlack">Female Facilitators</span></span>
                  <p className = "colorWhite">Each activity consists of at least 2 female volunteers / facilitators.</p>
                </div>
              </div>
            </div>
            <div className = "col s2"> </div>
          </div>
        </div>

      </div>
    );
  }
}

export default WhyPathil;
