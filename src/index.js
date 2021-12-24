import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import SessionContextProvider from "./contexts/SessionContextProvider";

import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <SessionContextProvider>
      <App />
    </SessionContextProvider>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
