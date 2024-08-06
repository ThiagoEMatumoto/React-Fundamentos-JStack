import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { PostProvider } from "./Context/PostContext.js";
import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <PostProvider>
      <App />
    </PostProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
