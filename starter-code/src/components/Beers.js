import React, { Component } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { Link } from "react-router-dom";

class Beers extends Component {
constructor() {
super();
this.state = { beers: []};
}
getAllBeers = () => {
axios
      .get(`https://ih-beers-api2.herokuapp.com/beers`)
.then((responseFromApi) => {
this.setState({
beers: responseFromApi.data,
});
});
};
componentDidMount() {
this.getAllBeers();
}
searchFilter = (search) => {
const urlStart = 'https://ih-beers-api2.herokuapp.com/beers/search?q=' + search.target.value.toLowerCase();
console.log(search)
axios
    .get(urlStart)
.then((responseFromApi) => {
console.log(responseFromApi.data)
this.setState({
beers: responseFromApi.data,
});
});
};
render() {
return (
<div>
        <Navbar />
        <input
            type="text"
            placeholder="search"
            name="name"
            value={this.state.name}
            onChange={this.searchFilter}/>
            
        <div className="allBeers">
          {this.state.beers.map((eachBeers) => {
return (
<div key={eachBeers._id} className="oneBeers">
              
                <Link to={`/AllBeers/${eachBeers._id}`}>
                <img src={eachBeers.image_url} alt="foto" />
                {eachBeers.name}
              </Link>
                <p>{eachBeers.tagline}</p>
                <p>{eachBeers.contributed_by}</p>
                </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Beers;