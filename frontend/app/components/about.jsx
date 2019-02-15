import React from 'react';
import Navigation from './nav';


class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="full-height-section">
        <Navigation />
        <div className="centered">
          <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-xs-10 offset-xs-1
                          text-center">
            <h2>About Ickly</h2>
            <p>Ickly is a search interface into <a href= "https://data.cityofnewyork.us/Health/DOHMH-New-York-City-Restaurant-Inspection-Results/43nn-pn8j">
              NYC Restaurant Inspection Data</a> provided by NYC Open Data.
              Users can look up restaurants by name and get a list of detailed inspection data
              including grades, overall scores, and violation descriptions.
              It was built with Django, Django Rest Framework, React, Redux, ReactStrap,
              and Bootstrap.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default About;

