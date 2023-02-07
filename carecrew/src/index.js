import { ThemeProvider } from "@emotion/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { theme } from "./them";
import FormContext from "./Context/FormContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <FormContext>
      <App />
    </FormContext>
  </ThemeProvider>
);
