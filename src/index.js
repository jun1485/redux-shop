import ReactDOM from "react-dom";
import React from "react";
import { Provider } from "react-redux";
import store from "./store/index";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
