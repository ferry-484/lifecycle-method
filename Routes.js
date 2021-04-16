import React, { Component } from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import Home from "./Home";
import MountingLifeCycle from "./MountingLifeCycle";

export class Routes extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <Switch>
            <Route
              exact={true}
              path="/about"
              render={(e, props) => <MountingLifeCycle {...e} data={props} />}
            />

            <Route
              exact={true}
              path="/"
              render={(e, props) => <Home {...e} data={props} />}
            />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default Routes;
