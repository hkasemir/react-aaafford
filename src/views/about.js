import React, { PureComponent } from 'react';
import { SITE_TITLE } from '../helpers/constants';
import vanImg from '../images/van.jpg';
import securityImg from '../images/security-camera.jpg';
import gateImg from '../images/gate.jpg';

export default class About extends PureComponent {
  componentDidMount() {
    document.title = `${SITE_TITLE} | About`;
  }

  render() {
    return (
      <section className="page-content">
        <h1>About Us</h1>
        <img src={vanImg} alt="van in the aisle of our facility" />
        <p>
          As a family owned small business, we care about each customer and
          bringing you the best service possible. We took ownership of
          AAAffordable in 2009 and have since turned the once ailing property
          into a thriving business. Our mission is to provide a high tech and
          secure Self Storage facility with excellent service for local
          residents and businesses. We have an "A+" rating with the BBB and are
          a member of the Frederick Chamber of Commerce.
        </p>
        <h2>Our Security</h2>
        <img src={securityImg} alt="security camera" />
        <p>
          Our security system includes 24/7 security camera footage and an
          access gate with a coded keypad. We are always a quick phone call away
          whenever you have questions. If you need assistance with the gate
          operation check out this short YouTube video.
        </p>
        <img src={gateImg} alt="our electronic gate" />
      </section>
    );
  }
}
