import React, { Component } from 'react';
import { fetchRates } from '../services/aaafford-api-service';
import { SITE_TITLE } from '../helpers/constants';
import openUnitImg from '../images/open-unit.jpg';
import './rates.css';

class Rates extends Component {
  state = {
    rates: []
  };

  async componentDidMount() {
    document.title = `${SITE_TITLE} | Rates`;
    const rates = await fetchRates();
    this.setState({ rates });
  }

  render() {
    const { rates } = this.state;
    return (
      <section className="page-content">
        <h1>Rates</h1>
        <p>We strive to keep our prices low to work with your budget.</p>
        <table className="rates-table">
          <thead>
            <tr>
              <th>Unit Size [ft]</th>
              <th>Monthly Rate</th>
            </tr>
          </thead>
          <tbody>
            {rates.map((rate) => (
              <tr key={rate.id} className="rates-row">
                <td>{rate.size}</td>
                <td>${rate.rate}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <img src={openUnitImg} alt="security camera" className="about-img" />
      </section>
    );
  }
}

export default Rates;
