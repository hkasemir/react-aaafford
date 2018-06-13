import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

export default () => (
  <header className="site-header">
    <nav>
      <Link to="/" className="home-nav">
        AA Affordable Storage
      </Link>
      <ul className="page-nav">
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/rates">Rates</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <Link to="/login" className="login-nav">
        Login
      </Link>
    </nav>
  </header>
);
