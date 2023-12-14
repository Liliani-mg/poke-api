import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PokemonList from "./components/pokemonList";
import Navbar from "./components/navBar";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/pokemon-list">
          <Navbar />
          <PokemonList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
