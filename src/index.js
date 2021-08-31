import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import App from "./App";
import todoStore from "./stores/todoStore";
import { Provider } from "mobx-react";

const todo = new todoStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider todo={todo}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
