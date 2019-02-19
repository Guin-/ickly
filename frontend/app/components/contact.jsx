import React from 'react';
import Github from '../../static/images/GitHub.png'
import mail from '../../static/images/mail.png'
import Navigation from './nav';

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="full-height-section">
        <Navigation />
        <div className="centered">
          <div className="col-lg-8 offset-lg-2 col-xs-10 offset-xs-1 text-center">
            <h2>Contact</h2>
            <div>
              <div className="icon-image-container">
                <a href="https://github.com/Guin-/">
                  <img className="icon-img"src={Github}/>
                </a>
                <p>@Guin-</p>
              </div>
              <div className="icon-image-container">
                <a href="mailto:angelikajarosz@gmail.com">
                  <img className="icon-img"src={mail}/>
                </a>
                <p>angelikajarosz@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;

