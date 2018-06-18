import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import IndexRoute from "react";
import store from "./store/store";
import Search from "./components/views/Search";
import {Router, Route} from "react-router-dom";
import {syncHistoryWithStore} from "react-router-redux";
import MyRouter from "./router";


import MainLayout from "./components/layouts/mainLayout";
import SearchLayoutContainer from "./components/containers/searchLayoutContainer";

require("es6-promise").polyfill();
// Provider is a top-level component that wrapps our entire application, including
// the Router. We pass it a reference to the store so we can use react-redux's
// connect() method for Component Containers.
//const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
    <Provider store = {store}>
            <Search/>
    </Provider>,
    document.getElementById("root")
);