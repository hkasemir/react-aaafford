import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { MdMenu, MdClose } from 'react-icons/md';
import { Link } from 'react-router-dom';
import UnstlyedButton from '../components/unstyled-button';
import './header.css';

export default class Header extends PureComponent {
  state = {
    isCollapsed: true
  };

  toggleMenu = () => {
    this.setState((prevState) => ({ isCollapsed: !prevState.isCollapsed }));
  };

  closeMenu = () => {
    this.setState({ isCollapsed: true });
  };

  render() {
    const { isCollapsed } = this.state;

    return (
      <header className="site-header">
        <nav>
          <div className="home-nav">
            <Link to="/" onClick={this.closeMenu}>
              AA Affordable Storage
            </Link>
            <UnstlyedButton onClick={this.toggleMenu} className="menu-toggle">
              {isCollapsed ? <MdMenu /> : <MdClose />}
            </UnstlyedButton>
          </div>
          <div
            className={classnames('collapse-menu', { collapsed: isCollapsed })}
          >
            <ul className="page-nav">
              <li>
                <Link to="/about" onClick={this.closeMenu}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/rates" onClick={this.closeMenu}>
                  Rates
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={this.closeMenu}>
                  Contact
                </Link>
              </li>
            </ul>
            <Link to="/login" className="login-nav">
              Login
            </Link>
          </div>
        </nav>
      </header>
    );
  }
}
