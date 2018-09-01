import React from 'react';
import { MdEmail, MdPhone, MdCopyright } from 'react-icons/md';
import './footer.css';
import bbbSeal from '../images/bbbseal.gif';

export default () => (
  <footer className="footer-container">
    <ul className="footer-actions">
      <li>
        <a href="mailto:mgr@aaafford.com">
          <MdEmail style={{ marginRight: '1rem' }} /> mgr@aaafford.com
        </a>
      </li>
      <li>
        <a href="tel:+1-303-833-0692">
          <MdPhone style={{ marginRight: '1rem' }} /> (303) 833-0692
        </a>
      </li>
    </ul>
    <p className="copywrite">
      All Rights Reserved: <MdCopyright /> 2016 AA Affordable Storage
    </p>
    <img
      className="footer-bbb"
      src={bbbSeal}
      alt="Better Business Bureau Accredited Business Seal"
    />
  </footer>
);
