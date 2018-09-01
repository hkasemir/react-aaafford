import React, { PureComponent } from 'react';
import { SITE_TITLE } from '../helpers/constants';

export default class Login extends PureComponent {
  componentDidMount() {
    document.title = `${SITE_TITLE} | Login`;
  }

  render() {
    return (
      <section className="page-content">
        <h1>Login / Register</h1>
      </section>
    );
  }
}
