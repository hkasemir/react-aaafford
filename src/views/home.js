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
        <section>
          <h2>Come Visit Us</h2>
          <p>
            We are located in Frederick, Colorado off of Colorado Blvd (County
            Road 13) on Hurt Street. We are just South of the Rocky Mountain
            Christian Church, half mile South of Safeway, and North of the High
            School.
          </p>
        </section>
      </section>
    );
  }
}

export default Home;
