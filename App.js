import React from "react";
import { history } from "./src/redux/store/configuration";
import { Router } from "react-router-native";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import { Routes } from "./src/routes";

export default () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  );
};
