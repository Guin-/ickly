import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div className="container">

        <div className="row">
          <div className="col-lg-12 text-center">
            <h1>About Ickly</h1>
              <p className="lead">A search interface for NYC Restaurant Inspection Results data</p>
                <ul className="list-unstyled">
                  <li>It does some things</li>
                  <li>Made by a guin</li>
                </ul>
          </div>
        </div>

      </div>
    )
  }
}

export default About;
