import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MdCreditCard, MdTv, MdNote, MdArrowForward } from 'react-icons/md';
import { SITE_TITLE } from '../helpers/constants';
import './home.css';

class Home extends Component {
  componentDidMount() {
    document.title = `${SITE_TITLE} | Home`;
  }

  render() {
    return (
      <section>
        <section className="hero--container" />
        <h1 className="hero--title">
          AA Affordable - Self Storage in Frederick, CO
        </h1>
        <section className="value-prop">
          <div className="value-prop--item">
            <div>
              <h2>Low Rates</h2>
              <p>
                We provide a selection of storage unit sizes, all at incredibly
                low rates so you can find the deal that works for you.
              </p>
            </div>
            <Link to="/rates" className="value-prop--link">
              Take a look <MdArrowForward style={{ marginLeft: '1rem' }} />
            </Link>
          </div>
          <div className="value-prop--item">
            <div>
              <h2>Secure</h2>
              <p>
                The security of your belongings is important to us. We have 24/7
                security camera coverage, and a gate to keep your stuff safe.
              </p>
            </div>
            <Link to="/about#security" className="value-prop--link">
              Learn more <MdArrowForward style={{ marginLeft: '1rem' }} />
            </Link>
          </div>
          <div className="value-prop--item">
            <div>
              <h2>Family Owned</h2>
              <p>
                As a small, family-owned business, we care about providing you
                the best customer service.
              </p>
            </div>
            <Link to="/about" className="value-prop--link">
              About us <MdArrowForward style={{ marginLeft: '1rem' }} />
            </Link>
          </div>
        </section>
        <section className="actions">
          <h2>Come Visit Us</h2>
          <p>
            Email <a href="mailto:mgr@aaafford.com">mgr@aaafford.com</a> or call{' '}
            <a href="tel:+1-303-833-0692">(303) 833-0692</a> with any questions
            or to set up an appointment.
          </p>
          <p>
            We are located at 5970 Hurt Street in Frederick, Colorado off of
            Colorado Blvd (County Road 13). We're just south of the Rocky
            Mountain Christian Church, a half mile south of Safeway, and north
            of the high school.
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3051.610735375325!2d-104.94532268441162!3d40.106391082378586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c08d58d6d4bcd%3A0x6e213bb94c6f5a1e!2s5970+Hurt+St%2C+Frederick%2C+CO+80530!5e0!3m2!1sen!2sus!4v1535239031914"
            title="map to 5970 Hurt St."
            frameBorder="0"
            className="map"
            allowFullScreen
          />
          <h2>Already a tenant?</h2>
          <ul className="home-useful-links">
            <li>
              <a href="https://www.efirstbank.com/firstbank/person-to-person-transfers.htm">
                <MdCreditCard style={{ marginRight: '1rem' }} />
                Pay your bill online
              </a>
            </li>
            <li>
              <a href="http://www.youtube.com/watch?v=jDDfmYuKSIg">
                <MdTv style={{ marginRight: '1rem' }} />
                Youtube how to work the security gate
              </a>
            </li>
            <li>
              <MdNote
                style={{ marginRight: '1rem', color: 'var(--nav-blue)' }}
              />
              Download the{' '}
              <a href="http://www.aaafford.com/Documents/AAAffordableStorageLease.pdf">
                Lease Agreement
              </a>{' '}
              or{' '}
              <a href="http://www.aaafford.com/Documents/AAAffordableVehicleLease.pdf">
                Vehicle Lease Agreement
              </a>
            </li>
          </ul>
        </section>
      </section>
    );
  }
}

export default Home;
