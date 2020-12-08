import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CoinDetail from "./CoinDetail";
import Deck from "./Deck";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Deck} />
        <Route path="/:id" component={CoinDetail} />
      </Switch>
    </Router>
  );
}

export default App;
