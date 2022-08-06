import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { AuthCntextProvider } from "./store/auth-context";

ReactDOM.render(
  <AuthCntextProvider>
    <App />
  </AuthCntextProvider>,
  document.getElementById("root")
);
