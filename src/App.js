import React, { Component } from 'react';
import logo from './logo.svg';
import BeerList from './components/BeerList';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Beau's</h1>
        </header>
        <BeerList />
      </div>
    );
  }
}
export default App;