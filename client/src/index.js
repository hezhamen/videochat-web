import { ThemeProvider } from "@material-ui/core";
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { ContextProvider } from "./Context";
import "./styles.css";
import { themeOptions } from "./theme";

ReactDOM.render(
  <ThemeProvider theme={themeOptions}>
    <ContextProvider>
      <App />
    </ContextProvider>
  </ThemeProvider>,
  document.getElementById("root")
);
