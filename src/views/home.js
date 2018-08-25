import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { SITE_TITLE } from '../helpers/constants';
import './home.css';

class Home extends Component {
  componentDidMount() {
    document.title = `${SITE_TITLE} | Home`;
  }

  render() {
    return (
      <section>
        <section className="hero--container">
          <h1 className="hero--title">
            AA Affordable Storage - Self Storage in Frederick, CO
          </h1>
        </section>
        <section className="value-prop">
          <div>
            <h2>Low Rates</h2>
            <p>
              We provide a selection of storage unit sizes, all at incredibly
              low rates so you can find the deal that works for you.
            </p>
            <Link to="/rates">Take a look...</Link>
          </div>
          <div>
            <h2>Secure</h2>
            <p>
              The security of your belongings is important to us. We have 24/7
              security camera coverage, and a gate to keep your stuff safe.
            </p>
            <Link to="/about#security">Learn more...</Link>
          </div>
          <div>
            <h2>Family Owned</h2>
            <p>
              As a small, family-owned business, we care about providing you the
              best customer service.
            </p>
            <Link to="/about">About us...</Link>
          </div>
        </section>
        <section className="actions">
          <h2>Come Visit Us</h2>
          <p>
            We are located at 5970 Hurt Street in Frederick, Colorado off of
            Colorado Blvd (County Road 13). We're just South of the Rocky
            Mountain Christian Church, half mile South of Safeway, and North of
            the High School.
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3051.610735375325!2d-104.94532268441162!3d40.106391082378586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c08d58d6d4bcd%3A0x6e213bb94c6f5a1e!2s5970+Hurt+St%2C+Frederick%2C+CO+80530!5e0!3m2!1sen!2sus!4v1535239031914"
            title="map to 5970 Hurt St."
            frameBorder="0"
            className="map"
            allowFullScreen
          />
          <h2>Get in Touch</h2>
          <p>
            Email <a href="mailto:mgr@aaafford.com">mgr@aaafford.com</a>
            or call <a href="tel:+1-303-833-0692">(303) 833-0692</a> with any
            questions or to set up an appointment.
          </p>

          <h2>Already a tenant?</h2>
          <p>Here are some useful links</p>
          <ul>
            <li>
              <a href="http://www.aaafford.com/Documents/AAAffordableStorageLease.pdf">
                Lease Agreement
              </a>
            </li>
            <li>
              <a href="http://www.aaafford.com/Documents/AAAffordableVehicleLease.pdf">
                Vehicle Lease Agreement
              </a>
            </li>
            <li>
              <a href="https://www.efirstbank.com/firstbank/person-to-person-transfers.htm">
                Pay your bill online
              </a>
            </li>
            <li>
              <a href="http://www.youtube.com/watch?v=jDDfmYuKSIg">
                Youtube how to work the security gate
              </a>
            </li>
          </ul>
        </section>
      </section>
    );
  }
}

export default Home;
