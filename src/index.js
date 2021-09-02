import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import App from "./App";
import { Provider } from "mobx-react";
import rootStore from "./stores/rootStore";

const store = new rootStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider {...store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
