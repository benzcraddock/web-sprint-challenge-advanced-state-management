import React from "react";
import ReactDOM from "react-dom";

// Add in all necessary components and libary methods:
// import createStore, thunk and applyMiddleware
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

// import Provider and reducer
import { Provider } from "react-redux";
import { reducer } from "./reducers";

import "./index.css";
import App from "./App";
import { Form } from "react-bootstrap";

const { worker } = require('./mocks/browser');
worker.start();

// Create a store that includes thunk and logger middleware support.
const store = createStore(reducer, applyMiddleware(thunk, logger));

const rootElement = document.getElementById("root");

// Wrap App with Provider
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    rootElement
);

//Task List:
//1. Add in all necessary components and libary methods.
//2. Create a store that includes thunk and logger middleware support.
//3. Wrap the App component in a react-redux Provider element.