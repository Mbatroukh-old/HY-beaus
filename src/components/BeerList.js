import React, { Component } from 'react';
import styled from "styled-components";
import axios from "axios";

let headers = { "Authorization": "Token MDo1MTc5ZTExOC1iN2M2LTExZTgtYjdmMS03N2FjMmRiMmZhZWE6c293aWFiWkFtMGtzTVFRa25pU1Z4WWZheTdCSkF1YXZ6ZG02" };
let params =  { q: "beau", where: "is_seasonal", per_page: 100 }

class BeerList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            beers: [],
            baus: [],
            locations: [],
            beer: {},
            modal: false
        }
    }
    componentDidMount() {
        axios
          .get(`//lcboapi.com/products`, {params, headers})
          .then(response => {
                const beers = response.data.result;
                this.setState({ beers });
            }).catch(error => {
                console.error(error);
            });
    }

    handleClick = (id) => {
        axios.get(`//lcboapi.com/stores?product_id=${id}`, {headers})
        .then(response => {
            const beer = response.data.product;
            const locations = response.data.result;
            this.setState({ beer, locations, modal: true });
        })
        .catch(error => {
            console.error(error);
        });
    }
    handleDismiss = () => {
        this.setState({ modal: false });
    }
    render() {
        const {className} = this.props;
        return <Container className={className}>
            {this.state.beers.map((result, index) => {
              return <Beer key={index}>
                  <img src={result.image_thumb_url !== null ? result.image_thumb_url : "https://via.placeholder.com/239x319"} alt="" />
                  <p>{result.name}</p>
                  <p>{result.producer_name}</p>
                  <button onClick={() => {
                      this.handleClick(result.id);
                    }}>
                    Get info
                  </button>
                </Beer>
            })}{this.state.modal && <Modal>
                <div>
                  <img src={this.state.beer.image_url !== null ? this.state.beer.image_url : "https://via.placeholder.com/239x319"} alt="" />
                  <section>
                    <h1>{this.state.beer.name}</h1>
                    <span>Description:</span>
                    <p>{this.state.beer.description ? this.state.beer.description : "No Description Available"}</p>
                    <span>Where To Buy:</span>
                    <ul>
                        {this.state.locations.map((location, index) => {
                            return <li key={index}>
                                {location.name}
                            </li>;
                        })}
                    </ul>
                    {console.log(this.state.beer.description)}
                    <button onClick={() => {
                        this.handleDismiss();
                      }}>
                      Dismiss
                    </button>
                  </section>
                </div>
              </Modal>}
          </Container>
    }
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1200px;
  flex-wrap: wrap;
  margin: 0 auto;
`;


const Beer = styled.div`
  width: 25%;
  margin-bottom: 30px;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  transition: all 0.2s;
  border: solid 1px #fff;
  padding: 15px;
  &:hover {
    transition: all 0.2s;
    border: solid 1px #ccc;
  }
  img {
    max-width: 100%;
  }
`;

const Modal = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  transition: all 0.2s;
  background: rgba(0, 0, 0, 0.3);
  text-align: left;
  div {
    background: white;
    width: 75%;
    height: 80vh;
    min-height: 80vh;
    display: flex;
    align-items: center;
  }
  img {
    width: auto;
    height: auto;
    max-width: 40%;
    margin: 0 15px;
  }
`;

export default BeerList;
