import React from "react";
import { history } from "./app/redux/store/configuration";
import { Router } from "react-router-native";
import { Provider } from "react-redux";
import store from "./app/redux/store";
import { Routes } from "./app/routes";

export default () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  );
};
