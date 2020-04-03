import React, { Component } from "react";
import axios from "axios";
import Navbar from "./Navbar";

class NewBeer extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", description: "" };
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const name = this.state.name;
    const description = this.state.description;
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", { name, description })
      .then(() => {
        this.props.getData();
        this.setState({ name: "", description: "" });
      })
      .catch(error => console.log(error));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
          <Navbar/>
        <form onSubmit={this.handleFormSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={e => this.handleChange(e)}
          />
          <label>Description:</label>
          <textarea
            name="description"
            value={this.state.description}
            onChange={e => this.handleChange(e)}
          />

         <a href="/beers"><input type="submit" value="Submit"/>Go Back</a>
        </form>
      </div>
    );
  }
}

export default NewBeer;