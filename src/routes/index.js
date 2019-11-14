import React from "react";
import { Switch, Route } from "react-router-native";
import Home from "../components/home";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact strict component={Home} />
    </Switch>
  );
};
