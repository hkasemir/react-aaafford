import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './views/home';
import About from './views/about';
import Contact from './views/contact';
import Login from './views/login';
import Rates from './views/rates';

export default () => (
  <Router>
    <main className="">
      <header className="">
        <nav>
          <Link to="/">Home</Link>
          <ul>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/rates">Rates</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/rates" component={Rates} />
      <Route path="/contact" component={Contact} />
      <Route path="/login" component={Login} />
    </main>
  </Router>
);
