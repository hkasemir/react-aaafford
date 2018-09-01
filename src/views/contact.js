import React, { PureComponent } from 'react';
import { SITE_TITLE } from '../helpers/constants';
import wolframImg from '../images/wolfram.jpg';
import lauraImg from '../images/laura.jpg';
import './contact.css';

export default class Contact extends PureComponent {
  componentDidMount() {
    document.title = `${SITE_TITLE} | Contact`;
  }

  render() {
    return (
      <section className="page-content center">
        <h1>Contact Us</h1>
        <p>Let us know if you have any questions!</p>
        <div className="portrait-container">
          <figure>
            <img
              className="portrait"
              src={wolframImg}
              alt="portrait of Wolfram, the manager"
            />
            <figcaption>Wolfram - Manager</figcaption>
            <p>
              <a href="mailto:wk@aaafford.com">wk@aaafford.com</a>
            </p>
          </figure>
          <figure>
            <img
              className="portrait"
              src={lauraImg}
              alt="portrait of Laura, the assistant manager"
            />
            <figcaption>Laura - Assistant Manager</figcaption>
            <p>
              <a href="mailto:laura@aaafford.com">laura@aaafford.com</a>
            </p>
          </figure>
        </div>
      </section>
    );
  }
}
