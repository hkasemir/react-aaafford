import React, { PureComponent } from 'react';
import { SITE_TITLE } from '../helpers/constants';

export default class About extends PureComponent {
  componentDidMount() {
    document.title = `${SITE_TITLE} | About`;
  }

  render() {
    return (
      <section>
        <h1>About Us</h1>
      </section>
    );
  }
}
