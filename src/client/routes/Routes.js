import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import loadable from "@loadable/component";

const HomePage = loadable(() => import("../containers/Home"));
const DashboardPage = loadable(() => import("../containers/Dashboard"));

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={() => <HomePage />} />
      <Route exact path="/dashboard" component={() => <DashboardPage />} />
      <Route render={() => <Redirect to="/404" />} />
    </Switch>
  );
};

export default Routes;
