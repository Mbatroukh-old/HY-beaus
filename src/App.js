import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  componentDidMount(){
    // let url = "//lcboapi.com/products";
    // let headers = { "Content-Type": "application/json" };
    // let token = "";
    let headers = {"Authorization": "Token MDo1MTc5ZTExOC1iN2M2LTExZTgtYjdmMS03N2FjMmRiMmZhZWE6c293aWFiWkFtMGtzTVFRa25pU1Z4WWZheTdCSkF1YXZ6ZG02"}
    return (
      fetch("//lcboapi.com/products?where=is_seasonal", { headers })
        // function getBeer() {
        // return fetch({`${url}$?where=is_seasonal`})
        .then(response => response.json())
        .then(responseJson => {
          return responseJson.result;
        })
        .catch(error => {
          console.error(error);
        })
    );
    // }
    // getBeer();
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
