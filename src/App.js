import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title'
import LightSwitch from './components/LightSwitch'
import User from './components/User'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Codaisseur</h1>
        </header>
        <main>
          <Title content="Some Simple Title" />
          <LightSwitch />
          <div>
            <p>
              User: 
              <User content="Zorro" />
            </p>
            <p>
              User: 
              <User content="Batman" />
            </p>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
