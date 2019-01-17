import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap'
import Navigation from './nav';


class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid>
      <Navigation />
        <Row>
          <Col lg={8} lgOffset={2} md={8} mdOffset={2} xs={10} xsOffset={1} className="text-center">
            <h2>About Ickly</h2>
              <p>Ickly is a search interface into <a href="https://data.cityofnewyork.us/Health/DOHMH-New-York-City-Restaurant-Inspection-Results/xx67-kt59">NYC Restaurant Inspection Data</a> provided by NYC Open Data.
                Users can look up restaurants by name and get a list of detailed inspection data including
                grades, overall scores, and violation descriptions.
                It was built with Django, Django Rest Framework, React, Redux, and React Bootstrap.
              </p>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default About;

