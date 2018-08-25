import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './views/home';
import About from './views/about';
import Contact from './views/contact';
import Login from './views/login';
import Rates from './views/rates';
import Header from './components/header';
import Footer from './components/footer';

export default () => (
  <Router>
    <main>
      <Header />
      <section>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/rates" component={Rates} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
      </section>
      <Footer />
    </main>
  </Router>
);
