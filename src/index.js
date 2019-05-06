import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import Amplify from "@aws-amplify/core";
import config from "./aws-exports";

Amplify.configure(config);

const render = Component => {
  return ReactDOM.render(<Component />, document.getElementById("root"));
};
render(App);

if (module.hot) {
  module.hot.accept("./App", () => {
    const NewApp = require("./App").default;
    render(NewApp);
  });
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
