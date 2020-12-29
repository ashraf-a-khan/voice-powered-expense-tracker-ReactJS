import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "./context/context";
import { SpeechProvider } from "@speechly/react-client";

ReactDOM.render(
  <SpeechProvider appId="69ee3018-89af-4425-811f-2d4608a4bab4" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById("root")
);
