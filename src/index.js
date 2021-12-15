import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import AppContextProvider from "./Context/ApplicationContextProvider";
import ThemeContextProvider from "./Context/ThemeContextProvider";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ThemeContextProvider>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </ThemeContextProvider>
  </StrictMode>,
  rootElement
);
