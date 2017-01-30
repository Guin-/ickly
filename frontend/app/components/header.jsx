import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h1>Ickly</h1>
                <p className="lead">A search interface for NYC Restaurant Inspection Results data</p>
            </div>
          </div>
      </div>
    )
  }
}

export default Header;
