import React, { Component } from 'react';
// import { BeerList } from './components';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      beers: []
    }
  }
  componentDidMount() {
    let headers = { "Authorization": "Token MDo1MTc5ZTExOC1iN2M2LTExZTgtYjdmMS03N2FjMmRiMmZhZWE6c293aWFiWkFtMGtzTVFRa25pU1Z4WWZheTdCSkF1YXZ6ZG02" };
    fetch("//lcboapi.com/products?where=is_seasonal", { headers /*, body */ })
      .then(response => response.json())
      .then(responseJson => {
        // console.log(responseJson);
        let beers = responseJson.map((result, index) => {
          return <div key={index}>
            <img src={result.image_thumb_url} alt="" />
            <p>{result.name}</p>
            <p>{result.producer_name}</p>
          </div>;
        }
        )
        this.setState(beers);
        console.log("state", this.state.beers);
      })
      .catch(error => {
        console.error(error);
      })
  }

  render() {
    return <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
         {/* <BeerList/> */}
          {/* This is another test
          {this.state.beers}
          {this.state.dummyBeers.map(index => <li key={index}>{index.name}</li>)} */}
        </div>
      </div>;
  }
}

export default App;
