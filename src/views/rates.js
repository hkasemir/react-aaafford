import React, { Component } from 'react';
import { fetchRates } from '../services/aaafford-api-service';
import { SITE_TITLE } from '../helpers/constants';

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
        <ul>
          {rates.map((rate) => (
            <li key={rate.id}>
              {rate.size}: ${rate.rate}
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default Rates;
