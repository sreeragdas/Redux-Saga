import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import CreateSagaMiddleware from "redux-saga";
import { ConfigureStore, configureStore } from "@reduxjs/toolkit";
import catReducer from "./catState";
import catSaga from "./catSaga";
const root = ReactDOM.createRoot(document.getElementById("root"));

const saga = CreateSagaMiddleware();

const store = configureStore({
  reducer: { cats: catReducer },
  middleware: [saga],
});
saga.run(catSaga)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
