import React, { PureComponent } from 'react';
import { SITE_TITLE } from '../helpers/constants';

export default class Contact extends PureComponent {
  componentDidMount() {
    document.title = `${SITE_TITLE} | Contact`;
  }

  render() {
    return (
      <section>
        <h1>Contact Us</h1>
      </section>
    );
  }
}
