import React, { Component } from 'react';
import {fetchRates} from './services/aaafford-api-service';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  async componentDidMount() {
    const rates = await fetchRates();
    console.log(rates)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
