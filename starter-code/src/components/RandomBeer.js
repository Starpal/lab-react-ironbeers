import React, { Component } from "react";
import axios from "axios";
// import { Link } from 'react-router-dom';
import Navbar from "./Navbar";


class RandomBeer extends Component {
    constructor(props){
      super(props);
      this.state = { beers: [] };
    }

    componentDidMount(){
      this.getRandomBeer();
    }

    getRandomBeer = () => {
      axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)

      .then( responseFromApi =>{
        const theBeer = responseFromApi.data;
        // console.log(theBeer)
        this.setState({beers: theBeer});
      })
      .catch((err)=>{
          console.log(err)
      })
    }

    render() {
        return (
          <div className="oneBeer">
              <Navbar/>
            <img className="beerImg" src={this.state.beers.image_url} width="70px"alt="beer-pic"/>
            <h1>{this.state.beers.name}</h1>
            <p>{this.state.beers.tagline}</p>
          </div>
        );
      }
    }

  
// first_brewed
// attenuation_level
// description
// contributed_by
    
    export default RandomBeer;