import React from 'react';
import './footer.css';
import bbbSeal from '../images/bbbseal.gif';

export default () => (
  <footer className="footer-container">
    <p className="copywrite">
      All Rights Reserved: © 2016 AA Affordable Storage
    </p>
    <img src={bbbSeal} alt="Better Business Bureau Accredited Business Seal" />
  </footer>
);
