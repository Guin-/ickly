import React from 'react';
import Github from '../../static/images/GitHub.png'
import mail from '../../static/images/mail.png'
import '../styles/styles.css'


class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2 text-center">
            <h2>Contact</h2>
               <div>
                    <a href="https://github.com/Guin-/"><img className="icon-img"src={Github}/></a>
                    <a href="mailto:angelikajarosz@gmail.com"><img className="icon-img"src={mail}/></a>
               </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;

