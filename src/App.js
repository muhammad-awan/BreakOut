import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">BREAKOUT</h1>
        </header>
        <canvas id="game" width="500" height="400"></canvas>
      </div>
    );
  }
}

export default App;
