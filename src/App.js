import React, { Component } from 'react';
import './App.css';
import './scss/custom.scss';
import Portfolio from './components/Portfolio';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Portfolio />
      </div>
    );
  }
}

export default App;
