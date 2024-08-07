import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { PostProvider } from "./Context/PostContext.js";
import GlobalStyle from "./styles/global.js";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <PostProvider>
      <App />
    </PostProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
