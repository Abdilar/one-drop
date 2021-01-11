import React from "react";
import {Router, Switch} from "react-router-dom";
import * as Route from "./components";
import * as Page from "../page";
import history from "../helper/history";
import {PAGE} from "../config/variables";

const AppRouting = () => (
  <Router history={history}>
    <Switch>
      <Route.PublicRoute path={`/${PAGE.HOME.VALUE}`} component={Page.Home} exact />
    </Switch>
  </Router>
);

export default AppRouting;
