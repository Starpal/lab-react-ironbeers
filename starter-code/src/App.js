import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from './components/Home';
import Beers from './components/Beers';
import SingleBeer from './components/SingleBeer';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';

class App extends Component {
  render() {
    return (
      <Switch>
      <Route exact path="/"component={Home}/>
      <Route exact path="/beers" component={Beers}/>
      <Route exact path="/beer/:id" component={SingleBeer}/>
      <Route exact path="/random-beer/" component={RandomBeer} />
      <Route exact path="/new/" component={NewBeer} />
      </Switch>
    );
  }
}

export default App;
