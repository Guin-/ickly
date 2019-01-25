import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
            <div className="intro-text col-lg-12 text-center">
              <h1>Do you really want to eat here?</h1>
                <p className="lead">A search interface for NYC Restaurant Inspection Results data</p>
            </div>
    )
  }
}

export default Header;
