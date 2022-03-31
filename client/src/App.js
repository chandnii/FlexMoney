import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FlexMoneyPayment from "./components/flexMoneyPayment";
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path={["/"]} component={FlexMoneyPayment} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
