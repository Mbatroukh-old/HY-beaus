import React, { Component /*, styled*/ } from 'react';
import axios from "axios";

class BeerList extends Component {
    state = {
        beers: []
    }
    componentDidMount() {
        let headers = { "Authorization": "Token MDo1MTc5ZTExOC1iN2M2LTExZTgtYjdmMS03N2FjMmRiMmZhZWE6c293aWFiWkFtMGtzTVFRa25pU1Z4WWZheTdCSkF1YXZ6ZG02" };
        // fetch("//lcboapi.com/products?where=is_seasonal", { headers /*, body */ })
        //     .then(response => response.json())
        //     .then(responseJson => {
        //         // console.log(responseJson);
        //         let beers = responseJson.map((result, index) => {
        //             return <div key={index}>
        //                 <img src={result.image_thumb_url} alt="" />
        //                 <p>{result.name}</p>
        //                 <p>{result.producer_name}</p>
        //             </div>;
        //         }
        //         )
        //         this.setState(beers);
        //         console.log("state", this.state.beers);
        //     })
        //     .catch(error => {
        //       console.error(error);
        //     })

        axios
          .get(`//lcboapi.com/products?where=is_seasonal`, headers)
          .then(res => {
            const beers = res.data;
            this.setState({ beers });
          });
    }
    render() {
        return(
          <h1>THIS IS BEERLIST COMPONENT</h1>
        //   {this.state.beers}
        )
    }
}

// const BeerListWrap = styled(BeerList)``;

export default BeerList;
